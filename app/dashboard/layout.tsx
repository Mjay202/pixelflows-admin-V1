"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { initDropdowns, initAccordions, initFlowbite } from "flowbite";

type LayoutProps = {
  children: ReactNode;
};


function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <section className="bg-white">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        onMouseDown={initDropdowns}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Image
          src="/svg/logo.svg"
          width={27}
          height={27}
          className="me-1"
          alt="logo"
        />
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-6 overflow-y-auto bg-gray-800">
          <Link href="/dashboard" className="flex items-center ps-2.5 mb-5">
            <Image
              src="/svg/logo.svg"
              width={20}
              height={20}
              className="me-1"
              alt="logo"
            />
            <span className="self-center text-lg font-normal whitespace-nowrap text-white">
              Pixelflow
            </span>
          </Link>

          <ul className="space-y-3 font-light mt-6 p-2">
            <li className="">
              <Link
                href="/dashboard"
                className={` ${
                  pathname === "/dashboard" ? "text-purple-300" : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/home.svg"
                  alt="Home Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs">Home</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/dashboard/users"
                className={` ${
                  pathname === "/dashboard/users"
                    ? "text-purple-300"
                    : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/users.svg"
                  alt="Users Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs ">Users</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/dashboard/team-mates"
                className={` ${
                  pathname === "/dashboard/team-mates"
                    ? "text-purple-300"
                    : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/team.svg"
                  alt="Team Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs">Team mates</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                // onClick={initDropdowns}
                onDoubleClick={initFlowbite}
                className="flex items-center w-full p-3 text-base text-white transition duration-300 rounded-md group hover:bg-slate-700 "
                aria-controls="inspirations"
                data-collapse-toggle="inspirations"
              >
                <Image
                  src="/svg/bulb.svg"
                  alt="Bulb Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs flex-1 text-left rtl:text-right whitespace-nowrap">
                  Inspirations
                </span>
                <Image
                  src="/svg/arrow-down.svg"
                  alt="Arrow Icon"
                  width={10}
                  height={5}
                />
              </button>
              <ul id="inspirations" className="hidden py-2 space-y-2">
                <li>
                  <Link
                    href="/dashboard/inspirations/platform"
                    className="flex items-center p-3 ml-6 hover:bg-slate-700 transition duration-300  rounded-md text-white group"
                  >
                    <span className="ms-4 font-light text-xs">Platform</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/inspirations/resources"
                    className="flex items-center p-3 ml-6 hover:bg-slate-700 transition duration-300  rounded-md text-white group"
                  >
                    <span className="ms-4 font-light text-xs">Resources</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="">
              <Link
                href="/dashboard/ui-assets"
                className={` ${
                  pathname === "/dashboard/ui-assets"
                    ? "text-purple-300"
                    : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/figma.svg"
                  alt="UI Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs">UI Assets</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/dashboard/job-boards"
                className={` ${
                  pathname === "/dashboard/job-boards"
                    ? "text-purple-300"
                    : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/job.svg"
                  alt="Job Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs">Job Boards</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/dashboard/knowledge"
                className={` ${
                  pathname === "/dashboard/knowledge"
                    ? "text-purple-300"
                    : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/book.svg"
                  alt="Book Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs">Knowledge</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/dashboard/settings"
                className={` ${
                  pathname === "/dashboard/settings"
                    ? "text-purple-300"
                    : "text-white "
                } flex items-center p-3 hover:bg-slate-700 rounded-md transition duration-300  group`}
              >
                <Image
                  src="/svg/settings.svg"
                  alt="Settings Icon"
                  width={14}
                  height={14}
                />
                <span className="ms-4 font-light text-xs">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-t px-16 mt-10 lg:ml-48 bg-white">{children}</div>
    </section>
  );
}

export default Layout;
