import { Calendar } from "@/components/ui/calendar";
import React from "react";

const ShadCalender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <h3 className="py-3 italic text-xl font-medium text-center">
        Shad CN Calender
      </h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default ShadCalender;
