import { FileText, X, CheckCircle } from "lucide-react";
import type { FileWithPath } from "react-dropzone";
import { Button } from "./ui/button";

export const DropzoneFilePreview = ({
  file,
  onRemove,
}: {
  file: FileWithPath;
  onRemove: () => void;
}) => {
  return (
    <div className='text-center space-y-4 w-full'>
      <div className='bg-background rounded-lg p-4 border border-border/50 max-w-sm mx-auto'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex items-center gap-3 min-w-0'>
            <FileText className='w-8 h-8 text-accent flex-shrink-0' />
            <div className='min-w-0'>
              <p className='font-medium text-foreground truncate'>
                {file.name}
              </p>
              <p className='text-sm text-muted-foreground'>
                {(file.size / 1024 / 1024).toFixed(2)} MB • PDF
              </p>
            </div>
          </div>
          <Button
            variant='ghost'
            size='sm'
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
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
};
