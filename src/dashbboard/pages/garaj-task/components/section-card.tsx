import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
type SectionCardVariant =
  | "default"
  | "danger"
  | "info" // example third variant
  | "warning";

interface SectionCardProps {
  totalRoutes?: number;
  percentage?: number;
  title?: string;
  variant?: SectionCardVariant;
}

import { ArrowDown, ArrowUp, RouteIcon } from "lucide-react";
const SectionCard: React.FC<SectionCardProps> = ({
  totalRoutes = 120,
  percentage = 20,
  title = "Total Routes",
  variant = "default",
}) => {
  const TrendIcon = percentage > 0 ? ArrowUp : ArrowDown;
  const trendColor =
    variant === "default"
      ? "text-black"
      : variant === "info"
      ? "text-teal-700"
      : variant === "danger"
      ? "text-red-500"
      : "text-blue-500";

  return (
    <Card className="space-y-1 flex-1 p-3 rounded-xl border-2 border-gray-200 min-w-[200px]">
      <CardHeader className="text-sm text-gray-500 font-normal pb-1 p-0">
        {title}
      </CardHeader>
      <CardContent className="flex justify-between items-center p-0 ">
        <h3 className={`text-2xl font-bold leading-tight ${trendColor}`}>
          {totalRoutes}
        </h3>
        <span className="p-2 bg-slate-100 rounded-full">
          <RouteIcon className={`${trendColor} w-4 h-4`} />
        </span>
      </CardContent>
      <CardFooter className="flex items-center text-gray-400 pt-1 p-0 m-0">
        <span
          className={`${
            percentage > 0 ? "text-teal-700" : "text-red-600"
          } flex items-center mr-1 text-sm font-medium leading-none`}
        >
          <TrendIcon className={`h-4 w-4`} />
          {percentage}%
        </span>
        <span className="text-sm font-medium">vs Last period</span>
      </CardFooter>
    </Card>
  );
};

export default SectionCard;
