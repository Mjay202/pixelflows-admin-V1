import Delete from "../platform/delete-platform";
import Edit from "../platform/edit-platform";
import Badges from "../../../components/badges";

export default function LandingPageTable({ query }: { query?: string }) {
  return (
    <div className="relative mt-2 lg:mt-3 shadow-sm border sm:rounded-lg mb-32">
      <table className="w-full relative md:overflow-x-auto text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs border-b text-gray-900 border-t bg-white  hover:bg-gray-50 items-center">
          <tr className="">
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
              Company
            </th>

            <th scope="col" className="py-4 font-medium">
              Continent
            </th>
            <th scope="col" className="py-4 mx-0 font-medium">
              Description
            </th>
            <th scope="col" className="py-4 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-xs">
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-1 py-3 font-medium text-xs  whitespace-nowrap"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font"> Catalog</span>
                <span className="text-gray-500 font-thin"> catalogapp.io</span>
              </div>
            </th>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Asia
            </td>
            <td
              scope="row"
              className="px-0 py-4 font-light text-xs text-gray-600 whitespace-nowrap"
            >
              Brings all your news into one place
            </td>

            <td
              scope="row"
              className="px-0 py-4 font-normal text-xs text-gray-600 whitespace-nowrap inline-flex justify-start items-center gap-x-5"
            >
              <Edit />
              <Delete />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
