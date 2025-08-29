export default function HowItWorks() {
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='text-3xl font-bold text-foreground'>How It Works</h2>
        <p className='text-lg text-muted-foreground'>
          Simple, fast, and effective
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8'>
        <div className='text-center space-y-4'>
          <div className='w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg'>
            1
          </div>
          <h3 className='font-semibold text-foreground'>Upload Resume</h3>
          <p className='text-sm text-muted-foreground'>
            Simply drag and drop your PDF resume or click to browse files
          </p>
        </div>

        <div className='text-center space-y-4'>
          <div className='w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg'>
            2
          </div>
          <h3 className='font-semibold text-foreground'>AI Analysis</h3>
          <p className='text-sm text-muted-foreground'>
            Our AI analyzes your resume content, format, and structure in
            seconds
          </p>
        </div>

        <div className='text-center space-y-4'>
          <div className='w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg'>
            3
          </div>
          <h3 className='font-semibold text-foreground'>Get Results</h3>
          <p className='text-sm text-muted-foreground'>
            Receive detailed feedback with scores, charts, and improvement
            suggestions
          </p>
        </div>
      </div>
    </div>
  );
}
