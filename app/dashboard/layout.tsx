'use client'
import type { ReactNode } from "react";
import SideBar from "./side-bar";
import NavbarButton from "./navbar-button";
import { redirect } from "next/navigation";
import { useEffect } from "react";


type LayoutProps = {
  children: ReactNode;
};


function Layout({ children }: LayoutProps) {

  useEffect(() => {
   const token = localStorage.getItem("accessToken");
   if (!token) {
    redirect('/login')
   }
  }, []);
  
  return (
    <section className="bg-white text-sm">
    <NavbarButton/>

     <SideBar/>

      <div className="p-t px-16 mt-10 lg:ml-48 bg-white">{children}</div>
    </section>
  );
}

export default Layout;
