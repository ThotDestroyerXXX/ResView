import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Summary } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function SkillAnalysis({
  skills,
}: Readonly<{ skills: Summary["skills_analysis"] }>) {
  return (
    <Card className='lg:col-span-1'>
      <CardHeader>
        <CardTitle>Skills Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={skills}
                cx='50%'
                cy='50%'
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey='value'
              >
                {skills.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='space-y-2 mt-4'>
          {skills.map((skill, index) => (
            <div
              key={`skill-${skill.name}-${index}`}
              className='flex items-center justify-between text-sm'
            >
              <div className='flex items-center space-x-2'>
                <div
                  className='w-3 h-3 rounded-full'
                  style={{ backgroundColor: skill.color }}
                />
                <span>{skill.name}</span>
              </div>
              <span className='font-medium'>{skill.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
