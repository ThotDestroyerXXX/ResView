import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Summary } from "@/types";
import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
} from "recharts";

export default function ExperienceAnalysis({
  experience,
}: Readonly<{ experience: Summary["experience_analysis"] }>) {
  // Define direct color values instead of CSS variables
  const colors = [
    "#059669", // Emerald green (chart-1)
    "#3b82f6", // Blue (chart-2)
    "#8b5cf6", // Purple (chart-3)
    "#f59e0b", // Orange (chart-4)
  ];

  return (
    <Card className='lg:col-span-2'>
      <CardHeader>
        <CardTitle>Experience Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-64 sm:h-72 w-full overflow-hidden'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={experience}
              margin={{ top: 20, right: 20, left: 10, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='category'
                angle={-45}
                textAnchor='end'
                height={60}
                interval={0}
                fontSize={12}
                className='text-xs sm:text-sm'
              />
              <YAxis fontSize={12} width={40} />
              <Tooltip />
              <Bar dataKey='score' radius={[4, 4, 0, 0]} maxBarSize={60}>
                {experience.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.category}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
