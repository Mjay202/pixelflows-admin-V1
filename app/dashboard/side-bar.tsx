"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { initFlowbite } from "flowbite";
import Svg from "../components/svg";

export default function SideBar() {
    const pathname = usePathname();
    return (
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-6 overflow-y-auto bg-gray-800">
          <Link href="/dashboard" className="flex items-center ps-2.5 mb-5">
            <Svg src="logo" w={24} h={24} />
            <span className="self-center text-xl font-normal whitespace-nowrap text-white">
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
                <Svg src="home" w={16} h={17} />
                <span className="ms-4 font-light text-sm">Home</span>
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
                <Svg src="users" w={16} h={17} />
                <span className="ms-4 font-light text-sm ">Users</span>
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
                <Svg src="team" w={16} h={17} />
                <span className="ms-4 font-light text-sm">Team mates</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                // onClick={initDropdowns}
                onMouseOver={initFlowbite}
                className="flex items-center w-full p-3 text-base text-white transition duration-300 rounded-md group hover:bg-slate-700 "
                aria-controls="inspirations"
                data-collapse-toggle="inspirations"
              >
                <Svg src="bulb" w={16} h={17} />
                <span className="ms-4 font-light text-sm flex-1 text-left rtl:text-right whitespace-nowrap">
                  Inspirations
                </span>
                <Image
                  src="/svg/arrow-down.svg"
                  alt="Arrow Icon"
                  width={11}
                  height={6}
                />
              </button>
              <ul id="inspirations" className="hidden py-2 space-y-2">
                <li>
                  <Link
                    href="/dashboard/inspirations/platform"
                    className={` ${
                      pathname === "/dashboard/inspirations/platform"
                        ? "text-purple-300"
                        : "text-white "
                    } flex items-center p-3 ml-6 hover:bg-slate-700 rounded-md transition duration-300`}
                  >
                    <span className="ms-4 font-light text-sm">Platform</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/inspirations/resources"
                    className={` ${
                      pathname === "/dashboard/inspirations/resources"
                        ? "text-purple-300"
                        : "text-white "
                    } flex items-center p-3 ml-6 hover:bg-slate-700 rounded-md transition duration-300`}
                  >
                    <span className="ms-4 font-light text-sm">Resources</span>
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
                <Svg src="figma" w={16} h={17} />
                <span className="ms-4 font-light text-sm">UI Assets</span>
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
                <Svg src="job" w={16} h={17} />
                <span className="ms-4 font-light text-sm">Job Boards</span>
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
                <Svg src="book" w={16} h={17} />
                <span className="ms-4 font-light text-sm">Knowledge</span>
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
                <Svg src="settings" w={16} h={17} />
                <span className="ms-4 font-light text-sm">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
}

