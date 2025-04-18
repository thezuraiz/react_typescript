import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

const CustomChart = ({ data }: any) => {
  return (
    <Card className="md:row-span-2 rounded-xl border-2 border-gray-200 flex flex-col md:flex-row items-center justify-around p-4">
      <ChartContainer
        config={data}
        className="w-full max-w-xs md:max-w-[250px] aspect-square"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={data}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={50}
          />
        </PieChart>
      </ChartContainer>

      <ul className="flex flex-col gap-2 mt-4 md:mt-0 list-none">
        {data.map((item: any, idx: number) => (
          <li key={idx} className="flex items-center">
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.fill }}
            />
            {item.browser}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default CustomChart;
