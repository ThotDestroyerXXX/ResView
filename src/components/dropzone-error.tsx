export const DropzoneError = ({ error }: { error: string }) => {
  return (
    <div className='text-center space-y-4'>
      <p className='text-red-500'>{error}</p>
      <p className='text-sm text-muted-foreground'>
        Try dropping another file or click to browse
      </p>
    </div>
  );
};
