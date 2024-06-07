'use client'
import type { ReactNode } from "react";
import SideBar from "./side-bar";
import NavbarButton from "./navbar-button";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";


type LayoutProps = {
  children: ReactNode;
};


function Layout({ children }: LayoutProps) {

  const { admin, accessToken } = useAuth();

  useEffect(() => {
    if (!accessToken) {
      redirect("/login");
    }
  }, [accessToken]);
  
  return (
    <section className="bg-white text-sm">
    <NavbarButton/>

     <SideBar/>

      <div className="p-t px-16 mt-10 lg:ml-48 bg-white">{children}</div>
    </section>
  );
}

export default Layout;
