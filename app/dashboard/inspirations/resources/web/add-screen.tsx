"use client";
import { initModals } from "flowbite";
import Svg from "@/app/components/svg";
import { toast } from "sonner";


export default function AddScreen() {
  const addCancel = () => {
    toast.warning("Add has been cancelled!");
  };
  const handleSubmit = () => {
    toast.success("Company added succesfully!");
  };
  return (
    <div>
      <button
        id="#add1"
        onMouseDown={initModals}
        data-modal-target="add-modal"
        data-modal-toggle="add-modal"
        className="block text-white"
        type="button"
      >
        <Svg src="add" w={12} h={12} />
      </button>

      <div
        id="add-modal"
        tab-index="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed px-4 mt-2 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2 w-full mt-3  max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Add Screens <span className="text-purple-600">(Web)</span>
              </h3>
              <button
                type="button"
                onMouseDown={addCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="add-modal"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Screen name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div className="col-span-2 flex flex-col">
                  <label
                    htmlFor="logo"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Upload Screen
                  </label>
                  <div className=" w-2/4 px-3 py-5 border-dashed rounded border-2 border-purple-300 bg-transparent flex justify-center align-center">
                    <button>
                      <Svg src="upload" w={30} h={32} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-x-3 justify-center mt-10 mb-3">
                <button
                  type="button"
                  onMouseDown={addCancel}
                  data-modal-hide="add-modal"
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  data-modal-hide="add-modal"
                  className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
