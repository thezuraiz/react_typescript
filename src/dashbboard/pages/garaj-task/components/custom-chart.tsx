import { Card } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";

const CustomChart = ({ data }: any) => {
  return (
    <Card className="md:row-span-2 rounded-xl border-2 border-gray-200 flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-around p-4 gap-4">
      <div className="w-full flex justify-center">
        <Doughnut
          className="w-32 h-32 md:w-[200px] md:h-[200px]"
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            responsive: true,
          }}
          data={{
            labels: data.map((item) => item.browser),
            datasets: [
              {
                data: data.map((item: any) => item.visitors),
                backgroundColor: data.map((item: any) => item.fill),
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>

      <ul className="flex flex-col gap-2 items-center md:items-start">
        {data.map((item: any, idx: number) => (
          <li key={idx} className="flex items-center text-sm">
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
