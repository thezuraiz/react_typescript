import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Header from "./components/header";
import { Button } from "@/components/ui/button";
import NotificationCard from "./components/notification-card";
import SectionCard from "./components/section-card";
import { CalendarIcon, ChevronDown } from "lucide-react";
import CustomChart from "./components/custom-chart";
import { Card } from "@/components/ui/card";
import MyBarChart from "./components/My-Bar-Chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import {
  getCampaigns,
  getDevices,
  getRoutes,
  getScreens,
  getToken,
} from "@/dashbboard/http/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type TDevices = {
  total: number;
  active: number;
  available: number;
  offline: number;
};

type TRoutes = {
  total: number;
  active: number;
};

type TOverview = {
  month_num: number;
  published: number;
  pending: number;
  cancelled: number;
};

type TCampaigns = {
  published: number;
  pending: number;
  cancelled: number;
  overview: TOverview[];
};

const GarjPage = () => {
  const [campaigns, setCampaigns] = useState<TCampaigns>();
  const [devices, setDevices] = useState<TDevices>();
  const [routes, setRoutes] = useState<TRoutes>();
  const [screens, setScreens] = useState<TDevices>();
  const chart1Data = [
    {
      browser: "Active",
      visitors: devices?.active ?? 275,
      fill: "hsl(var(--chart-4))",
    },
    {
      browser: "In Active",
      visitors: devices?.offline ?? 200,
      fill: "#3B86F7",
    },
    {
      browser: "Available",
      visitors: devices?.available ?? 187,
      fill: "hsl(var(--chart-2))",
    },
  ];

  const chart2Data = [
    { browser: "Available", visitors: 125, fill: "#FF0000" },
    { browser: "Not Available", visitors: 120, fill: "hsl(var(--chart-4))" },
    { browser: "Maintainance", visitors: 187, fill: "hsl(var(--chart-2))" },
  ];

  const yearData = [
    { month: "Jan", impressions: 186 },
    { month: "Feb", impressions: 305 },
    { month: "Mar", impressions: 237 },
    { month: "Apr", impressions: 73 },
    { month: "May", impressions: 209 },
    { month: "Jun", impressions: 214 },
    { month: "Jul", impressions: 237 },
    { month: "Apr", impressions: 73 },
    { month: "Aug", impressions: 209 },
    { month: "Sep", impressions: 214 },
    { month: "Oct", impressions: 237 },
    { month: "Nov", impressions: 1000 },
    { month: "Dec", impressions: 700 },
  ];

  const campaignData = [
    { month: "Jan", published: 120, pending: 50, cancelled: 16 },
    { month: "Feb", published: 150, pending: 70, cancelled: 20 },
    { month: "Mar", published: 180, pending: 90, cancelled: 25 },
    { month: "Apr", published: 100, pending: 90, cancelled: 10 },
    { month: "May", published: 200, pending: 80, cancelled: 30 },
    { month: "Jun", published: 170, pending: 65, cancelled: 20 },
    { month: "Jul", published: 90, pending: 95, cancelled: 22 },
    { month: "Aug", published: 110, pending: 90, cancelled: 35 },
    { month: "Sep", published: 220, pending: 85, cancelled: 28 },
    { month: "Oct", published: 140, pending: 95, cancelled: 32 },
    { month: "Nov", published: 200, pending: 120, cancelled: 50 },
    { month: "Dec", published: 180, pending: 110, cancelled: 45 },
  ];

  const options = {
    responsive: true,
    borderRadius: 6,

    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          padding: "6",
          font: {
            size: 16,
          },
        },
      },
      y: {
        ticks: {
          stepSize: 200,
        },
        title: {
          display: true,
          text: "Impressions",
          padding: "16",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const compaignOption = {
    borderRadius: 6,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Overall Performance",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Months",
          color: "rgb(14,118,110)",
          font: {
            size: 14,
          },
        },
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 100,
        },
        title: {
          display: true,
          text: "Impressions",
          color: "rgb(14,118,110)",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const token = await getToken();
        console.log("Token:", token);

        const [campaignRes, deviceRes, routeRes, screenRes] = await Promise.all(
          [getCampaigns(), getDevices(), getRoutes(), getScreens()]
        );

        setCampaigns(campaignRes.data);
        setDevices(deviceRes.data);
        setRoutes(routeRes.data);
        setScreens(screenRes.data);

        console.log("Campaigns:", campaignRes.data);
        console.log("Devices:", deviceRes.data);
        console.log("Routes:", routeRes.data);
        console.log("Screens:", screenRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <>
      <Header />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-20 gap-8 pl-14">
        <main className="col-span-4 lg:col-span-3">
          <div className="flex flex-wrap justify-between items-center">
            <h3 className="font-bold text-2xl">Dashboard</h3>
            <span className="flex flex-wrap gap-4 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 rounded-xl px-4 py-2"
                  >
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Last 7 Days</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Today</DropdownMenuItem>
                  <DropdownMenuItem>Yesterday</DropdownMenuItem>
                  <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                  <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                  <DropdownMenuItem>This Month</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="default"
                className="bg-teal-700 text-white hover:bg-teal-800"
              >
                Export Report
              </Button>
            </span>
          </div>
          <div className="flex flex-wrap gap-6 items-stretch justify-between mt-10">
            <SectionCard variant="default" totalRoutes={routes?.total ?? 120} />
            <SectionCard
              title="Active Routes"
              variant="info"
              totalRoutes={routes?.active ?? 100}
            />
          </div>
          {/* Bar Chart  */}
          <h3 className="font-bold text-2xl mt-6">Overall Impressions</h3>
          <Card className="mt-6 p-4 pt-8 h-96">
            <MyBarChart
              options={options}
              chartData={{
                labels: yearData.map((item) => item.month),
                datasets: [
                  {
                    data: yearData.map((item) => item.impressions),
                    backgroundColor: "rgb(14,118,110)",
                  },
                ],
              }}
            />
          </Card>
          {/* Device Status */}
          <h3 className="font-bold text-2xl mt-6">Device Status</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch justify-between mt-4">
            <SectionCard
              title="Published Compaigns"
              variant="default"
              totalRoutes={devices?.total ?? 210}
              percentage={5}
            />
            <SectionCard
              title="Available Compaigns"
              variant="warning"
              totalRoutes={devices?.available ?? 138}
              percentage={12}
            />
            {/* Chart-1  */}
            <CustomChart data={chart1Data} />
            <SectionCard
              title="Active Compaigns"
              variant="warning"
              totalRoutes={devices?.active ?? 138}
              percentage={12}
            />
            <SectionCard
              title="Offline Compaigns"
              variant="danger"
              totalRoutes={devices?.offline ?? 138}
              percentage={12}
            />
          </div>
          {/* Screen Status */}
          <h3 className="font-bold text-2xl mt-6">Screen Status</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch justify-between mt-4">
            <SectionCard
              title="Total Screens"
              variant="default"
              totalRoutes={screens?.total ?? 350}
              percentage={5}
            />
            <SectionCard
              title="Available Screens"
              variant="warning"
              totalRoutes={screens?.available ?? 280}
              percentage={12}
            />
            {/* Chart-2  */}
            <CustomChart data={chart2Data} />
            <SectionCard
              title="Connected Screens"
              variant="warning"
              totalRoutes={screens?.active ?? 186}
              percentage={12}
            />
            <SectionCard
              title="Maintainance Screens"
              variant="danger"
              totalRoutes={screens?.offline ?? 186}
              percentage={12}
            />
          </div>
          {/* Compaign Status  */}
          <h3 className="font-bold text-2xl mt-6">Campaign Status</h3>
          <div className="flex flex-wrap gap-3 items-stretch justify-between mt-4">
            <SectionCard
              title="Published Compaigns"
              variant="default"
              totalRoutes={campaigns?.published ?? 210}
              percentage={5}
            />
            <SectionCard
              title="Pending Compaigns"
              variant="warning"
              totalRoutes={campaigns?.pending ?? 136}
              percentage={12}
            />
            <SectionCard
              title="Cancelled Compaigns"
              variant="danger"
              totalRoutes={campaigns?.cancelled ?? 136}
              percentage={12}
            />
          </div>
          {/* Bar Chart */}
          <h3 className="font-bold text-2xl mt-6">Compaign Overall</h3>
          <Card className="mt-6 p-4 pt-8 h-96">
            <MyBarChart
              options={compaignOption}
              chartData={{
                labels: campaignData.map(
                  (item: { month: string }) => item.month
                ),
                datasets: [
                  {
                    label: "Published",
                    data: campaignData.map(
                      (item: { published: number }) => item.published
                    ),
                    backgroundColor: "rgb(14,118,110)",
                  },
                  {
                    label: "Pending",
                    data: campaignData.map(
                      (item: { pending: number }) => item.pending
                    ),
                    backgroundColor: "rgb(37,99,235)",
                  },
                  {
                    label: "Cancelled",
                    data: campaignData.map(
                      (item: { cancelled: number }) => item.cancelled
                    ),
                    backgroundColor: "rgb(255,0,0)",
                  },
                ],
              }}
            />
          </Card>
        </main>
        <aside className="lg:col-span-1 hidden lg:block">
          <div className="flex justify-between items-center mt-10">
            <h3 className="font-bold text-2xl">Activity</h3>
            <Button variant="link">View All</Button>
          </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <NotificationCard key={index} />
          ))}
        </aside>
      </section>
    </>
  );
};

export default GarjPage;
