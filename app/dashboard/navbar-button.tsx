'use client'

import { initFlowbite} from "flowbite"
import Image from "next/image";

export default function NavbarButton() {
    return (
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        onMouseOver={initFlowbite}
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
    );
}