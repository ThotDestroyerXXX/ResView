import { Star } from "lucide-react";

export default function Hero() {
  return (
    <div className='max-w-4xl mx-auto text-center'>
      <div>
        <div className='inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium'>
          <Star className='w-4 h-4' />
          AI-Powered Resume Analysis
        </div>
        <h1 className='text-5xl md:text-6xl font-bold text-foreground text-balance mb-6 mt-6'>
          Get Your Resume <span className='text-accent block'>Job-Ready</span>
        </h1>
        <p className='text-lg text-muted-foreground text-pretty max-w-2xl mx-auto'>
          Upload your resume and get instant, detailed feedback from our AI.
          Improve your chances of landing your dream job with actionable
          insights and professional recommendations.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-8 py-4'>
        <div className='text-center'>
          <div className='text-3xl font-bold text-foreground'>10K+</div>
          <div className='text-sm text-muted-foreground'>Resumes Analyzed</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-foreground'>4.9</div>
          <div className='text-sm text-muted-foreground'>Average Rating</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-foreground'>85%</div>
          <div className='text-sm text-muted-foreground'>Success Rate</div>
        </div>
      </div>
    </div>
  );
}
