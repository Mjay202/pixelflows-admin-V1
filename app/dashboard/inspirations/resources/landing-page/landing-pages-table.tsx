'use client'
import Svg from "@/app/components/svg";
import Delete from "./delete-company";
import Edit from "./edit-company";

import { initModals } from "flowbite";
import { useState } from "react";

export default function LandingPageTable({
  platformId,
  resources,
}: {
  platformId: string;
  resources: any;
}) {
  const [link, setLink] = useState("");
  // setLink(url.split(':')[1]);

  return (
    <div>
      <div className="relative lg:mt-3  sm:rounded-lg mt-7 mb-32">
        <table className="w-full relative border-x md:overflow-x-auto text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-sm border-b text-gray-900 border-t bg-white  hover:bg-gray-50 items-center">
            <tr className="">
              <th scope="col" className="p-3">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-1 py-3 font-medium">
                Company
              </th>

              <th scope="col" className="py-3 font-medium">
                Continent
              </th>
              <th scope="col" className="py-3 mx-0 font-medium">
                Description
              </th>
              <th scope="col" className="py-3 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {resources.map((resource: any) => (
              <tr
                className="bg-white border-b hover:bg-gray-50"
                key={resource._id}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                      required
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray-900"> {resource.name}</span>
                    <span className="text-gray-700 font-light">
                      {" "}
                      {/* {link} */}
                    </span>
                  </div>
                </th>
                <td
                  scope="row"
                  className="px-0 py-3 font-normal text-xs text-gray-900 whitespace-nowrap"
                >
                  {resource.continent}
                </td>
                <td
                  scope="row"
                  className="px-0 py-3 font-normal text-xs text-gray-900 whitespace-nowrap"
                >
                  {resource.description}
                </td>

                <td
                  scope="row"
                  className="px-0 py-3 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
                >
                  <button
                    id="#edit1"
                    onMouseDown={initModals}
                    data-modal-target={`edit-modal-${resource._id}-1`}
                    data-modal-toggle={`edit-modal-${resource._id}-1`}
                    className="block text-white"
                    type="button"
                  >
                    <Svg src="edit" w={16} h={16} />
                  </button>
                  <Edit id={resource._id} platformId={platformId} />
                  <button
                    onMouseDown={initModals}
                    data-modal-target={`delete-modal-${resource._id}`}
                    data-modal-toggle={`delete-modal-${resource._id}`}
                    className="block text-white"
                    type="button"
                  >
                    <Svg src="delete" w={15} h={16} />
                  </button>

                  <Delete id={resource._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-10 " id="pagination">
          <nav aria-label="Page navigation">
            <ul className=" gap-2 text-sm flex items-center justify-between">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 hover:text-gray-900"
                >
                  <Svg src="arrow-left" w={9} h={9} />
                  Previous
                </a>
              </li>
              <div className="flex">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
              </div>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 hover:text-gray-900"
                >
                  Next
                  <Svg src="arrow-right" w={9} h={9} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
