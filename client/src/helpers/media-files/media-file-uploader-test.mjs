import MediaFileUploader from "./media-file-uploader.mjs";
import React, {useState} from "react";
import {PageLayout} from "../../content/template/page-layout.mjs";
import {useAuth0} from "@auth0/auth0-react";
import {Circle} from "rc-progress";
import {useItemProgressListener} from "@rpldy/uploady";
import {useDispatch} from "react-redux";


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
        <span className="px-2 py-2 text-sm text-gray-700">{completed === 100 ? "All done!" : "Uploading..."}</span>
    </div>);
};


export default function MediaFileUploaderTest() {
    const {user} = useAuth0();

    const userId = user.sub;
    const extension = ".jpg";


    if (!user) {
        console.log("not user");
        return null;
    }
    return (
        <PageLayout>
            <div>
                <h1>Media Uploader</h1>
                <MediaFileUploader userId={user.sub}></MediaFileUploader>
            </div>
        </PageLayout>
    );
}
