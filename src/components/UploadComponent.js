import { UploadButton, UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { Divv } from "./StyledComponents";

export default function UploadComponent() {
  const uploader = Uploader({
    apiKey: "free", // Get production API keys from Upload.io
  });

  const options = {
    multi: true,
    styles: {
      margin: "120px",
    },
  };

  const uploaderOptions = {
    multi: true,
    showFinishButton: true,
    styles: {
      colors: {
        primary: "#377dff",
      },
    },
  };

  const MyDropzone = ({ setFiles }) => (
    <UploadDropzone
      uploader={uploader}
      options={uploaderOptions}
      onUpdate={(files) =>
        console.log(`Files: ${files.map((x) => x.fileUrl).join("\n")}`)
      }
      onComplete={setFiles}
      width="600px"
      height="375px"
    >
      Upload a dataset
    </UploadDropzone>
  );

  return (
    <>
      <Divv>
        <MyDropzone />
        {/* <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(files) => {
            console.log(files);
            if (files.length > 0) {
              alert(files.map((x) => x.fileUrl).join("\n"));
            }
          }}
        >
          {({ onClick }) => <button onClick={onClick}>Upload a dataset</button>}
        </UploadButton> */}
        {/* and we will provide the best method and the anomaly detection results. */}
      </Divv>
    </>
  );
}
