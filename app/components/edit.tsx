'use client'

import Badges from "./badges";

export default function Edit() {
    

    return (
      <div>
        <button
          data-modal-target="edit-modal"
          data-modal-toggle="edit-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Toggle modal
        </button>

        <div
          id="edit-modal"
          tab-index="-1"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
                <h3 className="text-sm font-bold text-gray-900 ">
                  Edit a Platform
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-toggle="edit-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-3 md:p-4 mt-2">
                <div className="grid gap-6 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Platform name<span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                      placeholder="Enter category name and press enter to save"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Platform categories<span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="categories"
                      id="categories"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                      placeholder="Enter Platform name"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-x-0 gap-y-1">
                  
                  <Badges name="Portfolios" />
                  <Badges name="Portfolios" />
                  <Badges name="Portfolios" />
                  <Badges name="Portfolios" />
                                <Badges name="Portfolios" />
                                {
                                    
                                }
                </div>
                <div className="flex gap-x-3 justify-center mt-10">
                  <button
                    type="button"
                    data-modal-hide="edit-modal"
                    className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center"
                  >
                    Add platform
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

