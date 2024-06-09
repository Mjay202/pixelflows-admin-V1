"use client";
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { initModals } from "flowbite";
import Svg from "@/app/components/svg";
import Image from "next/image";
import { createPlatform } from "@/app/services/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Category {
  id: number;
  name: string;
}
type data = {
  name: string,
  tags: any
}
  
export default function Add() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim() !== "") {
      const newCategory: Category = {
        id: categories.length ? categories[categories.length - 1].id + 1 : 1,
        name: name,
      };
      setCategories([...categories, newCategory]);
      setName("");
    }
    console.log(categories);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const deleteCat = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log("Delete button clicked", id);
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  
  const handleSubmit = async () =>
  {
    const newData : data = {
    name: name,
    tags: categories,
  }
    const response = await createPlatform(newData);
    if (response) {
      // const promise = () =>
      //   new Promise((resolve) =>
      //     setTimeout(() => resolve({ name: "Platform" }), 2000)
      //   );

      // toast.promise(promise, {
      //   loading: "Job adding...",
      //   success: (data: any) => {
      //     return `${data.name} has been successfully added`;
      //   },
      //   error: "Error",
      // }
      // );
      // router.refresh();
      console.log(response);
    }
    // if (response) {
    //   // const errorMsg = response.error.message[0];
    //   toast.error('There is an error while adding');
    // }
  };
  return (
    <div>
      <button
        type="button"
        id="#add"
        onMouseDown={initModals}
        data-modal-target="add-modal"
        data-modal-toggle="add-modal"
        className="bg-purple-600 border ml-1 items-center font-medium border-gray-300 text-white text-xs rounded-md hover:border-gray-400  transition ease-out duration-300 py-1.5 px-3  me-2 mb-2"
      >
        <Image
          src="/svg/plus.svg"
          alt="Icon"
          width={11}
          height={11}
          className="inline-flex mr-2"
        />
        Add Platforms
      </button>

      <div
        id="add-modal"
        tab-index="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-6 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Add a Platform
              </h3>
              <button
                type="button"
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

            <div className="grid gap-6 mb-4 grid-cols-2 p-3 md:p-4 mt-2">
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
                  placeholder="Enter Platform name"
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
                  onChange={handleChange}
                  value={name}
                  onKeyDown={handleKeyPress}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                  placeholder="Enter category name and press enter to save"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-x-0 gap-y-1 mt-3">
              {categories &&
                categories.map((category) => (
                  <div key={category.id} className="col-span-2 px-4">
                    <span
                      className={`bg-purple-100 text-sm font-medium m-0 ${
                        categories ? "inline-flex" : "hidden"
                      }items-center gap-2 justify-self-center px-2 py-0.5 rounded-full`}
                    >
                      {category.name}
                      <button
                        onMouseDown={(e) => deleteCat(e, category.id)}
                        className="ml-2"
                      >
                        <Svg src="close" w={8} h={8} />
                      </button>
                    </span>
                  </div>
                ))}
            </div>
            <div className="flex gap-x-3 justify-center mt-3 pb-5">
              <button
                type="button"
                data-modal-hide="add-modal"
                className="text-black font-bold inline-flex items-cent5r bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                onMouseDown={handleSubmit}
                data-modal-hide="add-modal"
                // data-modal-toggle="add-modal-5"
                // data-modal-target="add-modal-5"
                className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center"
              >
                Add platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
