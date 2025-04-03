import useHabitStore from "../../zustand/store/todoStore";
import { Habit } from "../../zustand/store/todoStore";
import List from "./List";

const RenderList = () => {
  const store = useHabitStore();
  console.log(store);

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-mono my-3 font-medium">Habit</h3>
      {store.habits.map((e: Habit) => (
        <List {...e} key={e.id} />
      ))}
    </div>
  );
};

export default RenderList;
