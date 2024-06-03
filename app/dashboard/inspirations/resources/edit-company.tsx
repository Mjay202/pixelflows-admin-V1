"use client";
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { initModals } from "flowbite";
import Svg from "@/app/components/svg";
import { toast } from "sonner";

interface Category {
  id: number;
  name: string;
}

export default function Edit() {

    // Category UI logic
  const [categories, setCategories] = useState<Category[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newCategory: Category = {
        id: categories.length ? categories[categories.length - 1].id + 1 : 1,
        name: inputValue,
      };
      setCategories([...categories, newCategory]);
      setInputValue("");
    }
    console.log(categories);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const deleteCat = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log("Delete button clicked", id);
    setCategories(categories.filter((cat) => cat.id !== id));
    };
    

    const editCancel = () => {
        toast.warning('Edit has been cancelled!');
    }
    const handleSubmit = () => {
        toast.success('Company edited succesfully!');
    }
  return (
    <div>
      <button
        id="#edit1"
        onMouseDown={initModals}
        data-modal-target="edit-modal-1"
        data-modal-toggle="edit-modal-1"
        className="block text-white"
        type="button"
      >
        <Svg src="edit" w={16} h={16} />
      </button>

      <div
        id="edit-modal-1"
        tab-index="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed px-4 mt-2 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2 w-full mt-3  max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Edit a company{" "}
                <span className="text-purple-600">(Landing Page)</span>
              </h3>
              <button
                type="button"
                onMouseDown={editCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="edit-modal-1"
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
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label
                      htmlFor="logo"
                      className="block mb-2 text-sm font-semibold text-gray-900"
                    >
                      Company Logo
                    </label>
                    <div className="px-3 py-3 border-dashed rounded border border-2 border-purple-300 bg-transparent flex justify-center align-center">
                      <button>
                        <Svg src="upload" w={20} h={20} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="logo"
                      className="block mb-2 text-sm font-semibold text-gray-900"
                    >
                      Company Thumbnail
                    </label>
                    <div className="px-3 py-3 border-dashed rounded border-2 border-purple-300 bg-transparent flex justify-center align-center">
                      <button>
                        <Svg src="upload" w={20} h={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company name<span className="text-red-700">*</span>
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
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company Website<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter category website and press enter to save"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company descriptions<span className="text-red-700">*</span>
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type the descriptions here..."
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-x-3 justify-center mt-10 mb-3">
                <button
                  type="button"
                  onMouseDown={editCancel}
                  data-modal-hide="edit-modal"
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-modal-target="edit-modal-2"
                  data-modal-toggle="edit-modal-2"
                  data-modal-hide="edit-modal-1"
                  className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="edit-modal-2"
        tab-index="-2"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 px-4 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2  w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Edit a company 2{" "}
                <span className="text-purple-600">(Landing Page)</span>
              </h3>
              <button
                type="button"
                onMouseDown={editCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="edit-modal-2"
                data-modal-hide="edit-modal-1"
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

            <form className="p-3 md:p-4">
              <div className="grid gap-6 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company categories<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="categories"
                    id="categories"
                    onChange={handleChange}
                    value={inputValue}
                    onKeyDown={handleKeyPress}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter category name and press enter to save"
                    required
                  />
                </div>
                <div className="col-span-2 grid grid-cols-4 gap-14 gap-y-1 justify-between">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <span className="bg-purple-100 text-xs font-semibold inline-flex  items-center gap-1 justify-self-center px-1.5 py-0.5 rounded-full hover:bg-purple-200">
                        {category.name}
                        <button onMouseDown={(e) => deleteCat(e, category.id)}>
                          <Svg src="close" w={9} h={9} />
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Select collection<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="collection"
                    id="collection"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter category name and press enter to save"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Location<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select location"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-x-3 justify-center mt-10 mb-3">
                <button
                  type="button"
                  data-modal-toggle="edit-modal-1"
                  data-modal-target="edit-modal-1"
                  data-modal-hide="edit-modal-2"
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  <span className="sr-only">Close modal</span>
                  Go back
                </button>
                <button
                                  type="submit"
                                  onMouseDown={handleSubmit}
                  data-modal-hide="edit-modal-1"
                  //   data-modal-toggle="edit-modal-1"
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
