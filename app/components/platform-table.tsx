
import Badges from "./badges";
import Delete from "./delete";
import Edit from "./edit";

export default function PlatformTable({ query }: { query?: string }) {
    
    return (
      <div className="relative mt-2 lg:mt-3 shadow-sm border sm:rounded-lg mb-32">
        <table className="w-full relative md:overflow-x-auto text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-900 border-t bg-white font-light hover:bg-gray-50">
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
              <th scope="col" className="px-1 py-4 font-normal">
                Platform
              </th>
              <th scope="col" className="px-1 py-4 font-normal">
                Platform Categories
              </th>
              <th scope="col" className="px-1 py-4 font-normal"></th>
            </tr>
          </thead>
          <tbody className="text-xs font-normal">
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
                className="px-1 py-4 font-medium text-xs text-gray-900 whitespace-nowrap"
              >
                Landing pages
              </th>
              <td
                scope="row"
                className="px-0 pt-2 pb-4 font-normal text-xs text-gray-900 whitespace-nowrap"
              >
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-x-2 gap-y-3">
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                </div>
              </td>

              <td className="flex justify-start items-center pl-16 py-4 gap-x-3">
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
                className="px-1 py-4 font-medium text-xs text-gray-900 whitespace-nowrap"
              >
                Web
              </th>
              <td
                scope="row"
                className="px-0 py-4  font-normal text-xs text-gray-900 whitespace-nowrap"
              >
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-x-2 gap-y-3">
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                </div>
              </td>

              <td className="flex justify-start pl-16 py-4 gap-x-3">
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
                className="px-1 py-4 font-medium text-xs text-gray-900 whitespace-nowrap"
              >
                Android
              </th>
              <td
                scope="row"
                className="px-0 py-4  font-normal text-xs text-gray-900 whitespace-nowrap"
              >
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-x-2 gap-y-3">
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                </div>
              </td>

              <td className="flex justify-start pl-16 py-4 gap-x-3">
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
                className="px-1 py-4 font-medium text-xs text-gray-900 whitespace-nowrap"
              >
                IOS
              </th>
              <td
                scope="row"
                className="px-0 py-4  font-normal text-xs text-gray-900 whitespace-nowrap"
              >
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-x-2 gap-y-3">
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                  <Badges name="Portfolios" />
                  <Badges name="Business" />
                  <Badges name="Finance" />
                  <Badges name="Education" />
                  <Badges name="Productivity" />
                </div>
              </td>

              <td className="flex justify-start pl-16 py-4 gap-x-3">
                <Edit />
                <Delete />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}