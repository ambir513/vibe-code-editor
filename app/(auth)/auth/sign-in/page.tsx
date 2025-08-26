import SignInFromClient from "@/features/auth/components/SignInFromClient";
import Image from "next/image";

const SignInPage = () => {
  return (
    <>
      <Image src={"/login.svg"} alt="Logo image" width={300} height={300} />
      <SignInFromClient />
    </>
  );
};

export default SignInPage;
