import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const FormHandling = () => {
  const form = useForm();
  let { register, control } = form;
  //   const { name, ref, onChange, onBlur } = register("username"); // Old Way
  return (
    <div className="bg-black text-white h-screen">
      <form className="flex flex-col w-1/3 p-5 ">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />{" "}
        {/* recommeded way */}
        <button className="border-2 border-gray-100 rounded-md p-2 my-4">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FormHandling;
