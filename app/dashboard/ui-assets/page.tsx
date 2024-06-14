'use client'

import ButtonWithIcon from "@/app/components/button-with-icon";
import Search from "@/app/components/search";
import { getDesignSystems } from "@/app/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesignTable from "./design-systems-table";
import { initModals } from "flowbite";
import Image from "next/image";
import AddDesignSystem from "./add-design-system";

function UIAssetsPage() {
  const [toggle, setToggle] = useState("design-systems");
  const [designs, setDesigns] = useState<any | null>(null);

  useEffect(() => {
    const getAllDesignSystems = async () => {
      const response = await getDesignSystems();
      if (response) {
        setDesigns(response);
      }
    };
    getAllDesignSystems();
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold">UI Assets</h1>
      <h5 className="text-sm font-normal mt-2">View and manage UI Assets</h5>

      <div className="text-sm font-medium text-center mt-4 text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <Link
              href="#design-systems"
              className={`inline-block  border-b-2 ${
                toggle == "design-systems"
                  ? "text-purple-600 border-b-2 p-5 border-purple-600 hover:border-purple-700 hover:text-purple-700 active"
                  : "border-transparent rounded-t-lg hover:text-gray-600 p-4"
              }  `}
              onMouseDown={() => setToggle("design-systems")}
            >
              Design Systems
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#3d-assets"
              className={`inline-block border-b-2 ${
                toggle == "3d-assets"
                  ? "text-purple-600 border-b-2 p-5  border-purple-600 hover:border-purple-700 hover:text-purple-700"
                  : "border-transparent rounded-t-lg hover:text-gray-600 p-4 "
              }  `}
              onMouseDown={() => setToggle("3d-assets")}
            >
              3D Assets
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#illustrations"
              className={`inline-block  border-b-2 ${
                toggle == "illustrations"
                  ? "text-purple-600 border-b-2 p-5 border-purple-600 hover:border-purple-700 hover:text-purple-700"
                  : "border-transparent rounded-t-lg hover:text-gray-600 p-4"
              }  `}
              onMouseDown={() => setToggle("illustrations")}
            >
              Illustrations
            </Link>
          </li>
        </ul>
      </div>

      <div id="#content" className="mt-3">
        <div
          className={`p-4 rounded-lg ${
            toggle == "design-systems" ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <Search placeholder="Search" />
            </div>
            <div className="flex">
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Action"
              />
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Sort"
              />
              <button
                id="#add1"
                onMouseDown={initModals}
                data-modal-target="add-design"
                data-modal-toggle="add-design"
                className="bg-purple-600 border ml-1 items-center font-medium border-gray-300 text-white text-xs rounded-md hover:border-gray-400  transition ease-out duration-300 py-1.5 px-3  me-2 mb-2"
                type="button"
              >
                <Image
                  src="/svg/plus.svg"
                  alt="Icon"
                  width={11}
                  height={11}
                  className="inline-flex mr-2"
                />
                Add Design System
              </button>
              <AddDesignSystem/>
            </div>
          </div>
          {designs ? (
            <DesignTable designs={designs} />
          ) : (
            <div className="text-center mt-36">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div
          className={`p-4 rounded-lg ${
            toggle == "3d-assets" ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <Search placeholder="Search" />
            </div>
            <div className="flex">
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Action"
              />
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Sort"
              />
            </div>
          </div>
          <div className="text-center mt-20 font-extralight text-6xl text-gray-300">
            Coming Soon...
          </div>
        </div>
        <div
          className={`p-4 rounded-lg ${
            toggle == "illustrations" ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <Search placeholder="Search" />
            </div>
            <div className="flex">
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Action"
              />
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Sort"
              />
            </div>
          </div>
          <div className="text-center mt-20 font-extralight text-6xl text-gray-300">
            Coming Soon...
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIAssetsPage;