import MediaFileUploader from "./media-file-uploader.mjs";
import React from "react";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";

export default function MediaFileUploaderTest() {
  const { user } = useAuth0();

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
