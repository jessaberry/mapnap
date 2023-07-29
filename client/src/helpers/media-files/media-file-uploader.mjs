import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Uploady, {
  withRequestPreSendUpdate,
  useItemFinalizeListener,
  useItemStartListener,
} from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview, { PREVIEW_TYPES } from "@rpldy/upload-preview";
import cropImage from "./media-file-cropper.mjs";
import "./styles.css";

//const mockSenderEnhancer = getMockSenderEnhancer({ delay: 1500 });

const StyledReactCrop = styled(ReactCrop)`
  width: 100%;
  max-width: 900px;
  height: 400px;
`;

const PreviewImage = styled.img`
  margin: 5px;
  max-width: 200px;
  height: auto;
  max-height: 200px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const uploadDestination =
  "https://mapnap.s3.us-west-2.amazonaws.com/dummy.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYFMHL5XRUQ2GEPXU%2F20230726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230726T070058Z&X-Amz-Expires=3600&X-Amz-Signature=00d4afb15c3ec2cae97a9f6f6e5eacad21126c8b267334f46da433ddc5e7c28c&X-Amz-SignedHeaders=host&x-id=PutObject";

const PreviewButtons = ({
  finished,
  crop,
  updateRequest,
  onUploadCancel,
  onUploadCrop,
}) => {
  return (
    <ButtonsWrapper>
      <button
        style={{
          display: !finished && updateRequest && crop ? "block" : "none",
        }}
        onClick={onUploadCrop}
      >
        Upload Cropped
      </button>
      <button
        style={{ display: !finished && updateRequest ? "block" : "none" }}
        onClick={updateRequest}
      >
        Upload without Crop
      </button>
      <button
        style={{
          display: !finished && updateRequest && crop ? "block" : "none",
        }}
        onClick={onUploadCancel}
      >
        Cancel
      </button>
    </ButtonsWrapper>
  );
};

const UPLOAD_STATES = {
  NONE: 0,
  UPLOADING: 1,
  FINISHED: 2,
};

const ItemPreviewWithCrop = withRequestPreSendUpdate((props) => {
  const {
    id,
    url,
    isFallback,
    type,
    updateRequest,
    requestData,
    previewMethods,
  } = props;
  const cropRef = useRef(null);
  const [uploadState, setUploadState] = useState(UPLOAD_STATES.NONE);
  const [crop, setCrop] = useState(null);
  const [croppedUrl, setCroppedUrl] = useState(null);
  const isFinished = uploadState === UPLOAD_STATES.FINISHED;

  useItemStartListener(() => setUploadState(UPLOAD_STATES.UPLOADING), id);
  useItemFinalizeListener(() => setUploadState(UPLOAD_STATES.FINISHED), id);

  const onImageLoaded = useCallback((image) => {
    cropRef.current = image;
  }, []);

  const onUploadCrop = useCallback(async () => {
    if (updateRequest && (crop?.height || crop?.width)) {
      const {
        blob: croppedBlob,
        blobUrl,
        revokeUrl,
      } = await cropImage(
        cropRef.current,
        requestData.items[0].file,
        crop,
        true
      );

      requestData.items[0].file = croppedBlob;

      updateRequest({ items: requestData.items });
      setCroppedUrl({ blobUrl, revokeUrl });
    }
  }, [requestData, updateRequest, crop]);

  const onUploadCancel = useCallback(() => {
    updateRequest(false);
    if (previewMethods.current?.clear) {
      previewMethods.current.clear();
    }
  }, [updateRequest, previewMethods]);

  useEffect(() => () => croppedUrl?.revokeUrl(), [croppedUrl]);

  return isFallback || type !== PREVIEW_TYPES.IMAGE ? (
    <PreviewImage src={url} alt="fallback img" />
  ) : (
    <>
      {requestData && uploadState === UPLOAD_STATES.NONE ? (
        <StyledReactCrop
          ruleOfThirds
          src={url}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onChange={setCrop}
          onComplete={setCrop}
          style={{ height: "100%" }}
        />
      ) : (
        <PreviewImage src={croppedUrl?.blobUrl || url} alt="img to upload" />
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

export default function MediaFileUploader(props) {
  const previewMethodsRef = useRef();

  return (
    <Uploady multiple={false} destination={{ url: uploadDestination }}>
      <UploadButton>Select File to upload</UploadButton>
      <p>Uploading for user {props.userId} </p>
      <br />
      <UploadPreview
        PreviewComponent={ItemPreviewWithCrop}
        previewComponentProps={{ previewMethods: previewMethodsRef }}
        previewMethodsRef={previewMethodsRef}
        fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
      />
    </Uploady>
  );
}
