"use client";
import Svg from "@/app/components/svg";
import { deleteResource } from "@/app/services/api";
import { toast } from "sonner";

export default function Delete({ id }: { id: any }) {
  const handleDelete = async () => {
    const response = await deleteResource(id);
    if (response.status == true) {
      toast.success("Deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  const onCancel = () => {
    toast.info("Cancelled!");
  };
  return (
    <div>
      <div
        id={`delete-modal-${id}`}
        tab-index="-1"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide={`delete-modal-${id}`}
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
            <div className="md:p-5 text-center flex flex-col items-center">
              <div className="p-2 bg-rose-100 mt-6 rounded-full border-8 mb-5 border-rose-50">
                <Svg src="bin" w={28} h={31} />
              </div>

              <h3 className="mb-7 text-lg font-semi-bold text-gray-500  dark:text-gray-400">
                Are you sure you want to delete this company?
              </h3>
              <div className="mb-3">
                <button
                  data-modal-hide={`delete-modal-${id}`}
                  type="button"
                  onMouseDown={onCancel}
                  className="py-2.5 px-10  text-sm font-medium text-gray-900 focus:outline-none transition ease-out duration-300 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-600 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  No, Cancel
                </button>
                <button
                  data-modal-hide={`delete-modal-${id}`}
                  type="button"
                  onMouseDown={handleDelete}
                  className="text-rose-800 ms-6 bg-red-100 hover:bg-red-600 hover:text-white transition ease-out duration-300 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-12 py-2.5 text-center"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
