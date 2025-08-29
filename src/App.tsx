import { useState } from "react";
import "./App.css";
import { DropzoneComponent } from "./components/dropzone-component";
import { type FileWithPath } from "react-dropzone";
import axios from "axios";
import type { Summary } from "./types";
import Hero from "./sections/hero";
import Feature from "./sections/feature";
import HowItWorks from "./sections/how-it-works";
import { Result } from "./result";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";

function App() {
  const [file, setFile] = useState<FileWithPath[]>([]);
  const [result, setResult] = useState<Summary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const handleUpload = async () => {
    setResult(null);
    setError(null);
    setIsUploading(true);
    try {
      if (file.length === 0) {
        setError("Please upload a resume first");
        return;
      }

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("resume", file[0]);

      const res = await axios.post(`${API_URL}/analyze`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data) {
        setResult(res.data);
      } else {
        setError("Error analyzing resume");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError(err instanceof Error ? err.message : "Error uploading resume");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {result ? (
        <Result summary={result} pdfName={file[0].name} />
      ) : (
        <div className='min-h-screen'>
          <div className='mx-auto px-4 py-8'>
            <Hero />
            <div className='gap-6 flex flex-col w-full max-w-[40rem] mx-auto'>
              <DropzoneComponent
                file={file}
                setFile={setFile}
                disabled={isUploading}
              />
              {!!error && <p>{error}</p>}
              {!!file && file.length > 0 && (
                <Button
                  onClick={handleUpload}
                  disabled={isUploading}
                  size='lg'
                  className='w-full max-w-xs mx-auto group'
                >
                  {isUploading ? (
                    <>
                      <div className='w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2' />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze Resume
                      <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                    </>
                  )}
                </Button>
              )}
            </div>
            <Feature />
            <HowItWorks />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
