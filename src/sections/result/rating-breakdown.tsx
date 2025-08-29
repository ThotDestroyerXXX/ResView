import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Summary } from "@/types";
import { TrendingUp, Eye, Target, Briefcase } from "lucide-react";

export default function RatingBreakdown({
  ratings,
}: Readonly<{ ratings: Summary["ratings"] }>) {
  return (
    <Card className='lg:col-span-2'>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <TrendingUp className='w-5 h-5 mr-2 text-accent' />
          Rating Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Eye className='w-4 h-4 text-chart-1' />
                <span className='font-medium'>Clarity & Formatting</span>
              </div>
              <span className='font-bold text-chart-1'>
                {ratings.clarity_formatting}/10
              </span>
            </div>
            <Progress value={ratings.clarity_formatting * 10} className='h-2' />
          </div>

          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Target className='w-4 h-4 text-chart-2' />
                <span className='font-medium'>Skills Relevance</span>
              </div>
              <span className='font-bold text-chart-2'>
                {ratings.skills_relevance}/10
              </span>
            </div>
            <Progress value={ratings.skills_relevance * 10} className='h-2' />
          </div>

          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Briefcase className='w-4 h-4 text-chart-3' />
                <span className='font-medium'>Experience Strength</span>
              </div>
              <span className='font-bold text-chart-3'>
                {ratings.experience_strength}/10
              </span>
            </div>
            <Progress
              value={ratings.experience_strength * 10}
              className='h-2'
            />
          </div>

          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <div className='w-4 h-4 bg-chart-4 rounded-sm' />
                <span className='font-medium'>Overall Presentation</span>
              </div>
              <span className='font-bold text-chart-4'>
                {ratings.overall_presentation}/10
              </span>
            </div>
            <Progress
              value={ratings.overall_presentation * 10}
              className='h-2'
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
