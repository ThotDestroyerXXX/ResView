import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Summary } from "@/types";
import { Star } from "lucide-react";

export default function OverallRating({
  overall,
}: Readonly<{ overall: Summary["overall"] }>) {
  const renderStars = (count: number) => {
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      starElements.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < count ? "fill-accent text-accent" : "text-gray-400"
          }`}
        />
      );
    }
    return starElements;
  };
  return (
    <Card className='lg:col-span-1'>
      <CardHeader className='text-center'>
        <CardTitle className='text-lg'>Overall Rating</CardTitle>
      </CardHeader>
      <CardContent className='text-center space-y-4'>
        <div className='text-6xl font-bold text-accent'>{overall.score}</div>
        <div className='flex justify-center space-x-1'>
          {renderStars(overall.stars)}
        </div>
        <Badge variant='secondary' className='text-sm'>
          {overall.rating_text}
        </Badge>
        <p className='text-sm text-muted-foreground text-pretty'>
          Your resume shows strong potential with room for targeted improvements
        </p>
      </CardContent>
    </Card>
  );
}
