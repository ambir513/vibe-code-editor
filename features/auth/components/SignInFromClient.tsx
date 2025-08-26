import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import { signIn } from "@/auth";

const SignInFromClient = () => {
  async function handleGoogleSignIn() {
    "use server";
    await signIn("google");
  }
  async function handleGithubSignIn() {
    "use server";
    await signIn("github");
  }
  return (
    <div className="mt-10 mb-10 w-[350px]">
      <Card className="px-5 py-6">
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={300}
              height={300}
              className="w-20"
            />
          </div>
          <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
          <CardDescription>
            Choose your Preferred Sign-in Method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form action={handleGoogleSignIn}>
            <Button variant={"outline"} className="w-full">
              <FaGoogle />
              <span>Sign in with Google</span>
            </Button>
          </form>
          <form action={handleGithubSignIn}>
            <Button variant={"outline"} className="w-full">
              <FaGithub />
              <span>Sign in with Github</span>
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground text-sm">
            By signing in you agree to our{" "}
            <span className="underline">Terms of Service</span> and
            <span className="underline"> Privacy Policy</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInFromClient;
