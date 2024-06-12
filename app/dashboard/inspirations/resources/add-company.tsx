"use client";
import {  MouseEvent, useEffect, useState } from "react";
import Svg from "@/app/components/svg";
import { toast } from "sonner";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { initModals } from "flowbite";
import Image from "next/image";
import { createResource, getPlatform} from "@/app/services/api";


export default function Add({ id }: { id: string })
{
  const [platformName, setPlatformName] = useState<string>("");
  const [url, seturl] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [continent, setContinent] = useState<string>("");
  const [preview_image, setPreview_image] = useState<string>("");

  const [uploaded, setUploaded] = useState<boolean>(false);
  const [uploaded2, setUploaded2] = useState<boolean>(false);

  // Category UI logic
  const [categories, setCategories] = useState<string[]>([]);
   const [initCategories, setInitCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");

 useEffect(() => {
   const getResource = async () => {
     const response = await getPlatform(id);
     if (response) {
       setInitCategories(response.tags);
       setPlatformName(response.name);
  
     }
   };
   getResource();
 }, [id]);
  
  const deleteCat = (e: MouseEvent<HTMLButtonElement>, category: string) => {
    e.preventDefault();
    setCategories(categories.filter((cat) => cat !== category));
    setCategory("");
  };
  
  const addCancel = () => {
    toast.warning("Add has been cancelled!");
  };

  const handleSubmit = async () => {
    
    const data = {
      name,
      description,
      url,
      preview_image,
      logo,
      type,
      continent,
      tags: categories,
      platform: id
    }
    const response = await createResource(data)
    if (response.status == true) {
      console.log(response)
       const promise = () =>
         new Promise((resolve) =>
           setTimeout(() => resolve({ name: "Company" }), 2000)
         );

       toast.promise(promise, {
         loading: "Adding Company...",
         success: (data: any) => {
           return `${data.name} has been successfully added`;
         },
         error: "Error",
       });
       setTimeout(() => {
         window.location.reload();
       }, 2000);
    }
    if (response.status == false) {
      toast.warning('Failed!!!' + response.error.message[0])
    }
  };
  return (
    <div>
      <button
        id="#add1"
        onMouseDown={initModals}
        data-modal-target={`add-modal-1-${id}`}
        data-modal-toggle={`add-modal-1-${id}`}
        className="bg-purple-600 border ml-1 items-center font-medium border-gray-300 text-white text-xs rounded-md hover:border-gray-400  transition ease-out duration-300 py-1.5 px-3  me-2 mb-2"
        type="button"
      >
        <Image
          src="/svg/plus.svg"
          alt="Icon"
          width={11}
          height={11}
          className="inline-flex mr-2"
        />
        Add company
      </button>
      <div
        id={`add-modal-1-${id}`}
        tab-index="-1"
        
        className="hidden overflow-y-auto overflow-x-hidden fixed px-4 mt-2 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2 w-full mt-3  max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Add a company{" "}
                <span className="text-purple-600">({platformName && platformName})</span>
              </h3>
              <button
                type="button"
                onMouseDown={addCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle={`add-modal-1-${id}`}
              >
                <svg
                  className="w-3 h-3"
                  
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
              <div className="col-span-2 grid grid-cols-2 justfiy-between gap-3">
                <div className="flex flex-col">
                  <label
                    htmlFor="logo"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company Logo
                  </label>
                  <div className="px-3 py-3 border-dashed rounded border-2 border-purple-300 bg-transparent inline-flex flex-col items-center justify-center align-center">
                    <CldUploadWidget
                      uploadPreset="upload-preset-one"
                      onSuccess={(results: CloudinaryUploadWidgetResults) => {
                        if (results) {
                          const resultInfo: CloudinaryUploadWidgetInfo =
                            results.info as CloudinaryUploadWidgetInfo;
                          setLogo(resultInfo.secure_url as string);
                          setUploaded(true);
                        }
                      }}
                    >
                      {({ open }) => {
                        return (
                          <button className="p-3" onMouseDown={() => open()}>
                            <Svg src="upload" w={20} h={20} />
                          </button>
                        );
                      }}
                    </CldUploadWidget>
                    <h3 className="text-xs text-purple-600 italic mt-2">
                      {uploaded
                        ? "Upload sucessfull, Proceed.."
                        : " Click icon to upload logo"}
                    </h3>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="logo"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company Thumbnail
                  </label>
                  <div className="px-3 py-2 border-dashed rounded border-2 border-purple-300 bg-transparent inline-flex flex-col items-center justify-center align-center">
                    <CldUploadWidget
                      uploadPreset="upload-preset-one"
                      onSuccess={(results: CloudinaryUploadWidgetResults) => {
                        if (results) {
                          const resultInfo: CloudinaryUploadWidgetInfo =
                            results.info as CloudinaryUploadWidgetInfo;
                          setPreview_image(resultInfo.secure_url as string);
                          setUploaded2(true);
                        }
                      }}
                    >
                      {({ open }) => {
                        return (
                          <button className="p-3" onMouseDown={() => open()}>
                            <Svg src="upload" w={20} h={20} />
                          </button>
                        );
                      }}
                    </CldUploadWidget>
                    <h3 className="text-xs text-purple-600 italic mt text-center">
                      {uploaded2
                        ? "Upload sucessfull, Proceed.."
                        : " Click icon to upload thumbnail"}
                    </h3>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={url}
                  onChange={(e) => seturl(e.target.value)}
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
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type the descriptions here..."
                ></textarea>
              </div>
            </div>

            <div className="flex gap-x-3 justify-center pb-4 mt-6 w-full mb-3">
              <button
                type="button"
                onMouseDown={addCancel}
                data-modal-hide={`add-modal-1-${id}`}
                className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                data-modal-target={`add-modal-2-${id}`}
                data-modal-toggle={`add-modal-2-${id}`}
                data-modal-hide={`add-modal-1-${id}`}
                className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id={`add-modal-2-${id}`}
        tab-index="-2"
        
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 px-4 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2  w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Add a company 2{" "}
                <span className="text-purple-600">({platformName})</span>
              </h3>
              <button
                type="button"
                onMouseDown={addCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle={`add-modal-2-${id}`}
                data-modal-hide={`add-modal-1-${id}`}
              >
                <svg
                  className="w-3 h-3"
                  
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

            <div className="grid gap-6 mb-4 grid-cols-2 p-3 md:p-4">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Company categories<span className="text-red-700">*</span>
                </label>
                <select
                  name="category"
                  id="category"
                  // onSelectCapture={(e) => handleKeyPress}
                  value={category}
                  onChange={(e) =>
                    setCategories([...categories, e.target.value])
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Select company categories</option>
                  {initCategories &&
                    initCategories.map((cat: any, index) => (
                      <option value={cat} key={index}>{cat}</option>
                    ))}
                </select>
              </div>
              <div
                className={`col-span-2 grid ${
                  categories ? "inline-flex" : "hidden"
                } grid-cols-3 gap-x-3 gap-y-3 justify-center px-5 pr-10 w-fit`}
              >
                {categories &&
                  categories.map((category: string, index: number) => (
                    <div key={index} className="flex justify-between gap-x-2">
                      <span className="bg-gray-100 text-xs font-medium m-0 text-black inline-flex w-fit items-center gap-1 justify-self-center px-1.5 py-1 rounded-full hover:bg-purple-50">
                        {category}
                        <button onMouseDown={(e) => deleteCat(e, category)}>
                          <Svg src="close" w={8} h={8} />
                        </button>
                      </span>
                    </div>
                  ))}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Location/Continent<span className="text-red-700">*</span>
                </label>
                <select
                  name="status"
                  id="status"
                  value={continent}
                  onChange={(e) => setContinent(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected value="africa">
                    Africa
                  </option>
                  <option value="australia">Australia</option>
                  <option value="asia">Asia</option>
                  <option value="australia">Australia</option>
                  <option value="europe">Europe</option>
                  <option value="north america">North America</option>
                  <option value="south america">South America</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Type<span className="text-red-700">*</span>
                </label>
                <select
                  name="status"
                  id="status"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Select type</option>
                  <option value="single">Single</option>
                  <option value="collection">Collection</option>
                </select>
              </div>
            </div>

            <div className="flex gap-x-3 justify-center mt-2 pb-4 mb-3">
              <button
                type="button"
                data-modal-toggle={`add-modal-1-${id}`}
                data-modal-target={`add-modal-1-${id}`}
                data-modal-hide={`add-modal-2-${id}`}
                className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
              >
                <span className="sr-only">Close modal</span>
                Go back
              </button>
              <button
                type="button"
                onMouseDown={handleSubmit}
                data-modal-hide={`add-modal-2-${id}`}
                data-modal-toggle={`add-modal-2-${id}`}
                data-modal-target={`add-modal-2-${id}`}
                className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
