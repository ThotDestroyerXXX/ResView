import { Upload, FileText } from "lucide-react";

export const DropzoneEmpty = () => {
  return (
    <div className='gap-4 flex flex-col items-center'>
      <Upload className={`size-12 transition-all duration-300`} />
      <div>
        <p className={`text-xl font-medium transition-colors duration-200`}>
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
};
