"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import { Stack, Typography } from "@mui/material";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

export default function Uploader({
  setCover,
}: {
  setCover: React.Dispatch<
    React.SetStateAction<
      {
        fileUrl: string;
        fileKey: string;
      }[]
    >
  >;
}) {
  return (
    <Stack height="100%" justifyContent="center" alignItems="center">
      <Typography>Your book cover goes here</Typography>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          if (res) {
            setCover(res);
          }
          console.log("Files: ", res);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </Stack>
  );
}
