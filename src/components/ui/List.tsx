/* eslint-disable prefer-const */
import useHabitStore, { Habit } from "../../zustand/store/todoStore";

const List = (props: Habit) => {
  let today = new Date().toISOString().split("T")[0];
  let { removeHabit, toggleHabit } = useHabitStore();

  return (
    <div
      className="flex justify-between items-center container text-center rounded-xl border border-slate-300 p-3 my-3"
      key={props.id}
    >
      <div>
        <h3 className="text-xl font-medium">{props.name}</h3>
        <p className="text-slate-500 text-start">{props.frequency}</p>
      </div>
      <div className="flex gap-3">
        <button
          className="border rounded-xl px-5 py-2 border-green-400 text-green-400 font-bold"
          onClick={() => toggleHabit(props.id, today)}
        >
          {today ? "Completed" : "Mark Complete"}
        </button>
        <button
          className="border rounded-xl px-5 py-2 border-red-400 text-red-400 font-bold"
          onClick={() => removeHabit(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
