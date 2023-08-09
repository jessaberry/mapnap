import React, {useState, useCallback, useRef} from "react";
import Cropper from "react-easy-crop";
import ObjectId from 'bson-objectid';
import Uploady, {
    withRequestPreSendUpdate,
    useItemFinalizeListener,
    useItemProgressListener,
    useItemStartListener
} from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview, {PREVIEW_TYPES} from "@rpldy/upload-preview";
import getCroppedImg from "./media-file-cropper.mjs";
import "./styles.css";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";
import {Circle} from "rc-progress";
import {getPresignedUploadUrlAsync} from "../s3/s3-thunks.mjs";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button/Button.js";
import exifr from "exifr";
import heic2any from "heic2any";
import Box from "@mui/material/Box/Box.js";


const UploadProgress = () => {
    const progressData = useItemProgressListener() || {completed: 0};
    const {completed} = progressData;

    return (<div
        className={completed === 0 ? 'invisible flex flex-row-reverse mb-2 h-25' : "flex flex-row-reverse mb-2 h-25"}>
        <Circle
            className="progress-circle"
            strokeWidth={5}
            strokeColor={completed === 100 ? "#4dc14d" : "#40affd"}
            percent={completed}/>
        <span className="px-2 py-2 text-sm text-gray-700"
              hidden={true}>{completed === 100 ? "All done!" : "Uploading..."}</span>
    </div>);
};


const PreviewButtons = ({
                            finished,
                            crop,
                            updateRequest,
                            onUploadCancel,
                            onUploadCrop
                        }) => {
    return (
        <div className="ButtonWrapper">
            <button
                style={{
                    display: !finished && updateRequest && crop ? "block" : "none"
                }}
                onClick={onUploadCrop}
            >
                Upload Cropped
            </button>
            <button
                style={{display: !finished && updateRequest ? "block" : "none"}}
                onClick={updateRequest}
            >
                Upload without Crop
            </button>
            <button
                style={{
                    display: !finished && updateRequest && crop ? "block" : "none"
                }}
                onClick={onUploadCancel}
            >
                Cancel
            </button>
        </div>
    );
};

const UPLOAD_STATES = {
    NONE: 0,
    UPLOADING: 1,
    FINISHED: 2
};

const ItemPreviewWithCrop = withRequestPreSendUpdate((props) => {
    const {
        id,
        url,
        isFallback,
        type,
        updateRequest,
        requestData,
        previewMethods
    } = props;
    const [uploadState, setUploadState] = useState(UPLOAD_STATES.NONE);
    const [croppedImg, setCroppedImg] = useState(null);


    //data for react-easy-crop
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const isFinished = uploadState === UPLOAD_STATES.FINISHED;

    useItemProgressListener(() => setUploadState(UPLOAD_STATES.UPLOADING), id);
    useItemFinalizeListener(() => setUploadState(UPLOAD_STATES.FINISHED), id);

    const onUploadCrop = useCallback(async () => {
        if (updateRequest && croppedAreaPixels) {
            const [croppedBlob, croppedUri] = await getCroppedImg(
                url,
                croppedAreaPixels
            );

            requestData.items[0].file = croppedBlob;

            updateRequest({items: requestData.items});
            setCroppedImg(croppedUri);


        }
    }, [url, requestData, updateRequest, croppedAreaPixels]);

    const onUploadCancel = useCallback(() => {
        updateRequest(false);
        if (previewMethods.current?.clear) {
            previewMethods.current.clear();
        }
    }, [updateRequest, previewMethods]);


    return isFallback || type !== PREVIEW_TYPES.IMAGE ? (
        <img src={url} alt="fallback img" className="PreviewImage"/>
    ) : (
        <>
            {requestData && uploadState === UPLOAD_STATES.NONE ? (
                <div className="crop-view">
                    <div className="crop-container">
                        <Cropper
                            image={url}
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <div className="controls">
                        <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e) => {
                                setZoom(e.target.value);
                            }}
                            className="zoom-range"
                        />
                    </div>
                </div>
            ) : (
                <img src={croppedImg || url} alt="img to upload" className="PreviewImage"/>
            )}
            <PreviewButtons
                finished={isFinished}
                crop={crop}
                updateRequest={updateRequest}
                onUploadCancel={onUploadCancel}
                onUploadCrop={onUploadCrop}
            />
            <p>{isFinished ? "FINISHED" : ""}</p>
        </>
    );
});

const handleSubmission = async () => {

}


export default function MediaFileUploader(props) {

    const dispatch = useDispatch();
    const previewMethodsRef = useRef();
    const {user} = useAuth0();

    const extension = 'jpg';


    const [imageWidth, setImageWidth] = useState(1920);
    const [imageHeight, setImageHeight] = useState(1080);

    const [croppedImageWidth, setCroppedImageWidth] = useState(null);
    const [croppedImageHeight, setCroppedImageHeight] = useState(null);

    const [imageLatitude, setImageLatitude] = useState(null);
    const [imageLongitude, setImageLongitude] = useState(null);

    const [imgData, setImgData] = useState({});
    const [imgSrc, setImgSrc] = useState({});

    const convertImage = (file) => {
        const blobURL = URL.createObjectURL(file);
        fetch(blobURL)
            .then((res) => res.blob())
            .then((blob) => heic2any({blob}))
            .then((conversionResult) => {
                setImgSrc(conversionResult);
            })
            .catch((e) => {
            });
    };





    const userId = user.sub;
    const fileId = new ObjectId();

    const type = 'image/jpeg';


    const key = fileId + '.' + extension;

    const uploadUrl = useSelector(state => state.s3.uploadUrl);

    const parameters = {
        url: uploadUrl,
        params: {
            document_name: key,
            ContentEncoding: 'base64'

        },
        method: 'PUT',
        headers: {
            'Content-Type': type,
        },
    }


    const fileMetaData = {
        width: 1600,
        height: 1200,
        url: "",
        latitude: 352.25221,
        longitude: 35.2525,
        fileSize: 162003,
        createdAt: "2023-01-25",
        updatedAt: "2023-01-25",
        title: "Yatsusankan",
        description: "Entrance",
        userId: "GDsgsgs",
        tripId: "SAdegsgsg",
        experienceId: "352tswg",
        isPublic: true
    }

    const handleUploadButtonClick = () => {
        const params = {userid: userId, key: key};
        console.log('parameters', parameters);
        dispatch(getPresignedUploadUrlAsync(params));
    }
    const readImageDimensions = (file) => {
        return new Promise((resolve) => {
            const img = new Image();
            var dataUrl = URL.createObjectURL(file);
            img.src = dataUrl;

            convertImage(file);
            exifr
                .parse(file)
                .then((output) => {
                    setImgData(output);
                })
                .catch((e) => {
                });


            img.onload = () => {
                URL.revokeObjectURL(dataUrl);
                resolve([img.naturalWidth, img.naturalHeight]);
            };
        });
    };

    const UploadWithDimensionsCheck = () => {
        useItemStartListener(async (item) => {
            const [width, height] = await readImageDimensions(item.file);

            return true;
        });
        return <></>;
    };

    const onChangeImageWidth = (e) => {
        setImageWidth(e.value);
    }
    const onChangeImageHeight = (e) => {
        setImageHeight(e.value);
    }

    const name = () => {
        return this.name;
    }

    const value = () => {
        return {uploadUrl};
    }

    return (
        <>
            <div className="MediaFileUploader">
                <Box component="fieldset">
                    <legend>Media File Upload</legend>
                    <Uploady
                        multiple={false}
                        destination={parameters}
                    >
                        <UploadWithDimensionsCheck/>
                        <UploadButton onClick={handleUploadButtonClick}>Select File to upload</UploadButton>
                        <UploadProgress/>
                        <UploadPreview
                            PreviewComponent={ItemPreviewWithCrop}
                            previewComponentProps={{previewMethods: previewMethodsRef}}
                            previewMethodsRef={previewMethodsRef}
                            fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
                        />

                    </Uploady>

                </Box>
                <br /><br />
            </div>

        </>
    );
}
