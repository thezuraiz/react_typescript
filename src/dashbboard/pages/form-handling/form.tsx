import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password must match",
  });

const FormHandling = () => {
  const form = useForm({ resolver: zodResolver(signUpSchema) });
  let {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset, // For reset form
  } = form;
  //   const { name, ref, onChange, onBlur } = register("username"); // Old Way

  // type FormValues = {
  //   username: string;
  //   email: string;
  //   password: string;
  //   confirmPassword: string;
  // }; // Bad Approach
  type TSignUpSchema = z.infer<typeof signUpSchema>;

  const onSubmit = async (data: TSignUpSchema) => {
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
        <input type="text" id="username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          className="text-black"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="text"
          id="confirmPassword"
          className="text-black"
          {...register("confirmPassword")}
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
