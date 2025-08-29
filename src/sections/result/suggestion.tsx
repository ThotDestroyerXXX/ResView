import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Summary } from "@/types";

export default function Suggestion({
  suggestion,
}: Readonly<{ suggestion: Summary["suggestions"] }>) {
  return (
    <Card className='lg:col-span-3'>
      <CardHeader>
        <CardTitle>AI Suggestions for Improvement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <h4 className='font-semibold text-foreground'>Strengths</h4>
            <ul className='space-y-2'>
              {suggestion.strengths.map((strength, index) => (
                <li
                  className='flex items-start space-x-2'
                  key={`strength-${strength}-${index}`}
                >
                  <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0' />
                  <span className='text-sm text-muted-foreground text-start'>
                    {strength}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-foreground'>
              Areas for Improvement
            </h4>
            <ul className='space-y-2'>
              {suggestion.improvements.map((improvement, index) => (
                <li
                  className='flex items-start space-x-2'
                  key={`improvement-${improvement}-${index}`}
                >
                  <div className='w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0' />
                  <span className='text-sm text-muted-foreground text-start'>
                    {improvement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
