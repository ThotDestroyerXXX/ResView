import Dropzone, { type FileWithPath } from "react-dropzone";
import { useState } from "react";
import { DropzoneError } from "./dropzone-error";
import { DropzoneFilePreview } from "./dropzone-file-preview";
import { DropzoneEmpty } from "./dropzone-empty";

const DropzoneContent = ({
  error,
  acceptedFiles,
  setFile,
}: {
  error: string | null;
  acceptedFiles: readonly FileWithPath[];
  setFile: (files: FileWithPath[]) => void;
}) => {
  if (error != null) {
    return <DropzoneError error={error} />;
  } else if (acceptedFiles.length > 0) {
    return (
      <DropzoneFilePreview
        file={acceptedFiles[0]}
        onRemove={() => setFile([])}
      />
    );
  } else {
    return <DropzoneEmpty />;
  }
};

export function DropzoneComponent({
  file,
  setFile,
  disabled,
}: Readonly<{
  file: FileWithPath[];
  setFile: (file: FileWithPath[]) => void;
  disabled: boolean;
}>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <Dropzone
      onDrop={() => {
        setFile([]);
        setError(null);
        setIsLoading(true);
      }}
      onDropAccepted={(acceptedFiles) => {
        setIsLoading(false);
        setError(null);
        setFile(acceptedFiles);
      }}
      onDropRejected={(fileRejections) => {
        setIsLoading(false);
        setError(fileRejections[0].errors[0].message);
        setFile([]);
      }}
      onError={(error) => {
        setIsLoading(false);
        setError(error.message);
        setFile([]);
      }}
      accept={{ "application/pdf": [".pdf"] }}
      maxFiles={1}
      maxSize={5 * 1024 * 1024}
      multiple={false}
      disabled={disabled || isLoading}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed border-gray-400 p-4 flex text-lg font-semibold flex-col h-96 justify-center items-center cursor-pointer hover:border-accent transition-colors rounded-xl ${
              isDragActive ? "bg-blue-100" : ""
            } ${error ? "border-red-400" : ""} ${
              error && "border-destructive/50 bg-destructive/5"
            }
             ${
               file.length > 0
                 ? "border-accent/50 bg-accent/5"
                 : "border-muted-foreground/25 hover:border-accent/50"
             }
            `}
          >
            <input {...getInputProps()} disabled={disabled || isLoading} />
            <DropzoneContent
              error={error}
              acceptedFiles={file}
              setFile={setFile}
            />
          </div>
        </section>
      )}
    </Dropzone>
  );
}
