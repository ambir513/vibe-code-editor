import { currentUser } from "@/features/auth/actions";
import Footer from "@/features/landing/components/Footer";
import Header from "@/features/landing/components/Header";
import HeroSection from "@/features/landing/components/HeroSection";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <HeroSection />
      <Footer />
    </div>
  );
}
