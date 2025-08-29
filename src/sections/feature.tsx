import { BarChart3, CheckCircle, FileText, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function Feature() {
  return (
    <div className='max-w-6xl mx-auto py-8'>
      <div className='text-center space-y-4'>
        <h2 className='text-3xl font-bold text-foreground'>
          Why Choose Our AI Resume Reviewer?
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Get comprehensive analysis that goes beyond basic spell-checking
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
        <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
          <CardContent className='p-6 text-center space-y-4'>
            <div className='w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto'>
              <BarChart3 className='w-8 h-8 text-accent' />
            </div>
            <h3 className='font-semibold text-foreground'>Detailed Scoring</h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Get numerical scores for clarity, formatting, skills relevance,
              and experience strength
            </p>
          </CardContent>
        </Card>

        <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
          <CardContent className='p-6 text-center space-y-4'>
            <div className='w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto'>
              <FileText className='w-8 h-8 text-accent' />
            </div>
            <h3 className='font-semibold text-foreground'>Content Analysis</h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              AI-powered review of your resume content, structure, and keyword
              optimization
            </p>
          </CardContent>
        </Card>

        <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
          <CardContent className='p-6 text-center space-y-4'>
            <div className='w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto'>
              <CheckCircle className='w-8 h-8 text-accent' />
            </div>
            <h3 className='font-semibold text-foreground'>Actionable Tips</h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Specific, actionable suggestions to improve your resume and
              increase interview chances
            </p>
          </CardContent>
        </Card>

        <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
          <CardContent className='p-6 text-center space-y-4'>
            <div className='w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto'>
              <Users className='w-8 h-8 text-accent' />
            </div>
            <h3 className='font-semibold text-foreground'>
              Industry Standards
            </h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Analysis based on current hiring trends and industry best
              practices
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
