import { useForm } from "react-hook-form";
const FormHandling = () => {
  const form = useForm();
  let { register } = form;
  const { name, ref, onChange, onBlur } = register("username"); // Old Way
  return (
    <div className="bg-black text-white h-screen">
      <form className="flex flex-col w-1/3 p-5 ">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button className="border-2 border-gray-100 rounded-md p-2 my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
