import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";
import { DataTable } from "@/components/ui/data-table";
import data from "../../data.json";

const DashboardHome = () => {
  return (
    <>
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
};

export default DashboardHome;
