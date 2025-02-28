import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="p-5 flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto p-4 pt-5">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
