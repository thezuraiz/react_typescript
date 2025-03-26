import { Habit } from "../zustand/store/todoStore";

const List = (props: Habit) => {
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
        <button className="border rounded-xl px-5 py-2 border-green-400 text-green-400 font-bold">
          {props.createdAt ? "Mark As Completed" : "Complete"}
        </button>
        <button className="border rounded-xl px-5 py-2 border-red-400 text-red-400 font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
