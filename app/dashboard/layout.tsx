
import type { ReactNode } from "react";
import SideBar from "./side-bar";
import NavbarButton from "./navbar-button";

type LayoutProps = {
  children: ReactNode;
};


function Layout({ children }: LayoutProps) {

  return (
    <section className="bg-white text-sm">
    <NavbarButton/>

     <SideBar/>

      <div className="p-t px-16 mt-10 lg:ml-48 bg-white">{children}</div>
    </section>
  );
}

export default Layout;
