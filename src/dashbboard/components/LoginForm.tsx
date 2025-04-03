import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { ReactFormState } from "react-dom/client";
import { log } from "console";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  let nav = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      let userEmail = window.localStorage.getItem("email");
      let userPassword = window.localStorage.getItem("password");

      if (userEmail == data.email && userPassword == data.password) {
        console.log(userEmail);
        console.log(userPassword);
        console.log(data.email);
        console.log(data.password);
        return;
      }
      alert("Wrong Email and Password");
      throw new Error("Wrong Email and Password");
    },
    onSuccess: () => {
      nav("/dashboard/home");
      alert("Success Login");
    },
  });

  let handleLogin = async () => {
    let email = emailRef.current?.value;
    let password = passwordRef.current?.value;
    if (!email || !password) {
      alert("Email and Password Required");
      return;
    }
    mutation.mutate({ email: email, password: password });
  };
  return (
    <section className="p-80 min-w-5xl">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form
              className="p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-balance text-muted-foreground">
                    Login to your Elib Inc account
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    ref={emailRef}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
            <div className="relative hidden bg-muted md:block">
              <img
                src="https://woorise.com/wp-content/uploads/2021/03/Online-event-registration.png"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </section>
  );
}
