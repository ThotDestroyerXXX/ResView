import Dropzone, { type FileWithPath } from "react-dropzone";
import { useState } from "react";
import { CheckCircle, FileText, Upload, X } from "lucide-react";
import { Button } from "./ui/button";

export function DropzoneComponent({
  setFile,
  disabled,
}: Readonly<{ setFile: (file: FileWithPath[]) => void; disabled: boolean }>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <Dropzone
      onDrop={(acceptedFiles) => setFile(acceptedFiles)}
      onDropAccepted={() => setIsLoading(false)}
      onDropRejected={(fileRejections) => {
        setIsLoading(false);
        setError(fileRejections[0].errors[0].message);
      }}
      onError={(error) => {
        setIsLoading(false);
        setError(error.message);
      }}
      accept={{ "application/pdf": [".pdf"] }}
      maxFiles={1}
      maxSize={5 * 1024 * 1024}
      multiple={false}
      disabled={disabled || isLoading}
    >
      {({
        getRootProps,
        getInputProps,
        acceptedFiles,
        isDragActive,
        isDragReject,
      }) => (
        <section>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed border-gray-400 p-4 flex text-lg font-semibold flex-col h-96 justify-center items-center cursor-pointer hover:border-accent transition-colors rounded-xl ${
              isDragActive ? "bg-blue-100" : ""
            } ${isDragReject ? "border-red-400" : ""} ${
              error && "border-destructive/50 bg-destructive/5"
            }
             ${
               acceptedFiles.length > 0
                 ? "border-accent/50 bg-accent/5"
                 : "border-muted-foreground/25 hover:border-accent/50"
             }
            `}
          >
            <input {...getInputProps()} disabled={disabled || isLoading} />
            {(() => {
              if (error) {
                return <p className='text-red-500'>{error}</p>;
              } else if (acceptedFiles.length > 0) {
                return (
                  <div className='text-center space-y-4 w-full'>
                    <div className='bg-background rounded-lg p-4 border border-border/50 max-w-sm mx-auto'>
                      <div className='flex items-center justify-between gap-3'>
                        <div className='flex items-center gap-3 min-w-0'>
                          <FileText className='w-8 h-8 text-accent flex-shrink-0' />
                          <div className='min-w-0'>
                            <p className='font-medium text-foreground truncate'>
                              {acceptedFiles[0].name}
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              {(acceptedFiles[0].size / 1024 / 1024).toFixed(2)}{" "}
                              MB • PDF
                            </p>
                          </div>
                        </div>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => setFile([])}
                          className='flex-shrink-0 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive'
                        >
                          <X className='w-4 h-4' />
                        </Button>
                      </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-sm text-accent'>
                      <CheckCircle className='w-4 h-4' />
                      Ready to analyze
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className='gap-4 flex flex-col items-center'>
                    <Upload className={`size-12 transition-all duration-300`} />
                    <div>
                      <p
                        className={`text-xl font-medium transition-colors duration-200`}
                      >
                        Drop your resume here
                      </p>
                      <p className='text-muted-foreground text-base font-normal'>
                        or click to browse files
                      </p>
                    </div>
                    <div className='flex items-center justify-center gap-4 text-sm text-muted-foreground'>
                      <span className='flex items-center gap-1'>
                        <FileText className='w-4 h-4' />
                        PDF only
                      </span>
                      <span>•</span>
                      <span>Max 5MB</span>
                    </div>
                  </div>
                );
              }
            })()}
          </div>
        </section>
      )}
    </Dropzone>
  );
}
