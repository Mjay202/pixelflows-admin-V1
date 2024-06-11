"use client";
import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { initModals } from "flowbite";
import Svg from "@/app/components/svg";
import { toast } from "sonner";
import { editPlatform, getPlatform } from "@/app/services/api";


type data = {
  name: string;
  tags: any;
};


export default function Edit({ id } : {id: string}) {
  const [categories, setCategories] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    const getSinglePlatform = async () => {
      const response = await getPlatform(id);
      if (response) {
        
        setName(response.name);
        setCategories(response.tags);
      }

   }
    getSinglePlatform();
   
  }, [id])
  
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && category.trim() !== "") {
      setCategories([...categories, category.trim()]); 
    }
  };

  const deleteCat = (e: MouseEvent<HTMLButtonElement>, category: string) => {
    e.preventDefault();
    
    setCategories(categories.filter((cat)=> cat !== category))
    setCategory('');
  };

  const onCancel = () => {
    toast.warning('Editing process cancelled!');
  };

  const handleEdit = async() => {
    const  editedData : data = {
    name: name,
    tags: categories,
    }
    
    const response = await editPlatform(editedData, id)
    console.log(response);
    if (response.statusCode === 200) {
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Platform" }), 2000)
        );

      toast.promise(promise, {
        loading: "Editing job...",
        success: (data: any) => {
          return `${data.name} has been successfully edited`;
        },
        error: "Error",
      });
       setTimeout(() => {
         window.location.reload();
       }, 2000);
    }
  }
  return (
    <div>

      <div
        id={`edit-modal-${id}`}
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
                data-modal-toggle={`edit-modal-${id}`}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    onKeyDown={handleKeyPress}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter category name and press enter to save"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-1 gap-y-2 mt-6 px-4 col-span-2 w-full" >
                {categories &&
                  categories.map((category: string, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span className="bg-gray-100 text-xs font-medium m-0 text-black inline-flex w-fit items-center gap-1 justify-self-center px-1.5 py-1 rounded-full hover:bg-purple-50">
                        {category}
                        <button onMouseDown={(e) => deleteCat(e, category)}>
                          <Svg src="close" w={8} h={8} />
                        </button>
                      </span>
                    </div>
                  ))}
              </div>
              <div className="flex gap-x-3 justify-center mt-6 pb-4">
                <button
                  type="button"
                  onMouseDown={onCancel}
                  data-modal-hide={`edit-modal-${id}`}
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onMouseDown={handleEdit}
                  data-modal-hide={`edit-modal-${id}`}
                  className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  Edit platform
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
