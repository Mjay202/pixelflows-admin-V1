'use client'
import Svg from "@/app/components/svg";
import Badges from "../../../components/badges";
import Delete from "./delete-platform";
import Edit from "./edit-platform";
import { initModals } from "flowbite";


export default function PlatformTable({ platforms }: { platforms: [] }) {
  
  return (
    <div className="relative mt-5 lg:mt-3 shadow-sm border sm:rounded-lg mb-32">
      <table className="w-full relative md:overflow-x-auto text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-900 border-t bg-white  hover:bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-1 py-4 font-medium">
              Platform
            </th>
            <th scope="col" className="px-1 py-4 font-medium">
              Platform Categories
            </th>
            <th scope="col" className="px-1 py-4 font-medium "></th>
          </tr>
        </thead>
        <tbody className="text-sm font-medium">
          {platforms &&
            platforms.map((platform: any) => (
              <tr
                className="bg-white border-b hover:bg-gray-50"
                key={platform.id}
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
                  className="px-1 py-4 text-gray-900 whitespace-nowrap"
                >
                  {/* Landing pages */}
                  {platform.name}
                </th>
                <td
                  scope="row"
                  className="px-0 pt-2 pb-4 text-gray-900 whitespace-nowrap"
                >
                  <div className="grid grid-cols-3  gap-x-2 gap-y-3">
                    {platform.tags.map((tag: any) => (
                      <Badges name={tag} />
                    ))}
                  </div>
                </td>

                <td className="flex justify-start items-center pl-16 py-4 gap-x-3">
                  <button
                    id="#edit"
                    onMouseDown={initModals}
                    data-modal-target={`edit-modal-${platform._id}`}
                    data-modal-toggle={`edit-modal-${platform._id}`}
                    className="block text-white"
                    type="button"
                  >
                    <Svg src="edit" w={16} h={16} />
                  </button>
                  <Edit id={platform._id}/>
                  <button
                    onMouseDown={initModals}
                    data-modal-target={`delete-modal-${platform._id}`}
                    data-modal-toggle={`delete-modal-${platform._id}`}
                    className="block text-white"
                    type="button"
                  >
                    <Svg src="delete" w={15} h={16} />
                  </button>
                  <Delete id={platform._id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
