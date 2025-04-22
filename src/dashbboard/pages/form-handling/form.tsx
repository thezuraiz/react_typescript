import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const FormHandling = () => {
  const form = useForm<FormValues>();
  let {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    // reset, // For reset form
  } = form;
  //   const { name, ref, onChange, onBlur } = register("username"); // Old Way

  type FormValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolver) => setTimeout(resolver, 2000));

    console.log(`Form Submitted: `, data);
  };
  return (
    <div className="bg-black text-white h-screen">
      <form
        className="flex flex-col w-1/3 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username Required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email Required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          className="text-black"
          {...register("password", {
            required: "password Requiried",
            minLength: { value: 9, message: "min length should be 9" },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="text"
          id="confirmPassword"
          className="text-black"
          {...register("confirmPassword", {
            validate: (value) =>
              value == getValues("password") || "Password must match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button
          className="border-2 border-gray-100 rounded-md p-2 my-4"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FormHandling;
