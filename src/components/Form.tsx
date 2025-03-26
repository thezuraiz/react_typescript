import React, { useState } from "react";
import useHabitStore from "../zustand/store/todoStore";

const CustomForm = () => {
  const store = useHabitStore();
  console.log(store);

  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"weekly" | "daily">("daily");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      store.submitHabit(name, frequency);
      setName("");
    }
  };
  return (
    <div className="max-w-xl border border-slate-200 rounded-xl text-center mx-auto my-5 p-10">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="habit name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full rounded-lg p-2"
        />
        <select
          name="frequency"
          className="border w-full rounded-lg p-2 mt-5"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as "weekly" | "daily")}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>

        <button
          type="submit"
          className="mt-5 rounded-lg bg-green-400 w-full py-2 text-lg font-bold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
