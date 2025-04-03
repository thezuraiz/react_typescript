import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";

export function RegisterPage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  let nav = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      window.localStorage.setItem("email", data.email);
      window.localStorage.setItem("password", data.password);
      return true;
    },
    onSuccess: () => {
      alert("Success Login");
      nav("/login");
    },
  });

  let handleLogin = async () => {
    let email = emailRef.current?.value;
    let password = emailRef.current?.value;
    if (!email || !password) {
      alert("Email and Password Required");
      return;
    }
    mutation.mutate({ email: email, password: password });
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className={cn("flex flex-col gap-6 ", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>
              Enter your email below to register your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
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
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
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
                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  Register
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Log In
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
