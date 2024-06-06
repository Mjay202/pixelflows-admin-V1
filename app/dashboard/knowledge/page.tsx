"use client"
import { CldImage, CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Anybody } from "next/font/google";
import { useState } from "react";

interface CloudinaryResultInfo {
  public_id: string;
  version: number;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
}
function KnowledgePage() {
const [resource, setResource] = useState('');
  const show = () => {
  
}
  return (
    <div>
      <h1 className="text-lg font-semibold">Knowledge</h1>
      <h5 className="text-sm font-normal mt-2">View and manage Knowledge</h5>

      <CldUploadWidget
        uploadPreset="upload-preset-one"
        onSuccess={(results: CloudinaryUploadWidgetResults) => {
          console.log(results?.info);
          if (results) {
            const resultInfo: CloudinaryResultInfo =
              results.info as CloudinaryUploadWidgetInfo;
            console.log(resultInfo.secure_url as string);
            setResource(resultInfo.secure_url as string);
          }
        }}
      >
        {({ open }) => {
          return (
            <button className="p-3" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
      <div className="mt-10">
        {/* <CldImage
          width="960"
          height="600"
          src="eyvxiegtx4ihhwmgpez2"
          sizes="100vw"
          alt="Description of my image"
        /> */}
        <div>{resource}</div>
        <CldImage
          width="500"
          height="500"
          src={resource}
          alt="Description of my image"
        />
        {/* <button onClick={()=>show}></button> */}
      </div>
    </div>
  );
}

export default KnowledgePage;