"use client";
import { initModals } from "flowbite";
import Svg from "@/app/components/svg";
import { toast } from "sonner";
import { KeyboardEvent, MouseEvent, useState } from "react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { addScreen } from "@/app/services/api";



export default function AddScreen({
  resourceId,
  platformId,
  platformName,
}: {
  resourceId: string;
  platformId: string;
  platformName: string;
}) {
  const [uploaded, setUploaded] = useState<boolean>(false);

  // Tag UI logic
  const [categories, setCategories] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [preview_image, setPreview_image] = useState("");
  const [name, setName] = useState("");

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      setCategories([...categories, tag.trim()]);
    }
  };

  const deleteCat = (e: MouseEvent<HTMLButtonElement>, tag: string) => {
    e.preventDefault();
    setCategories(categories.filter((cat) => cat !== tag));
    setTag("");
  };

  const addCancel = () => {
    toast.warning("Add has been cancelled!");
  };

  const handleSubmit = async () => {
    const data = {
      screens: [
        {
          name,
          url: preview_image,
          preview_image,
          platform: platformId,
          tags: categories,
        },
      ],
    };
    const response = await addScreen(data, resourceId);
    if (response.status === true) {
      toast.success("Screen added succesfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (response.status === false) {
      console.log(response.error);
      toast.error(response.error.message[0]);
    }
  };
  return (
    <div>
      <div
        id={`add-modal-${resourceId}`}
        tab-index="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed px-4 mt-2 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2 w-full mt-3  max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Add Screens <span className="text-purple-600">({platformName})</span>
              </h3>
              <button
                type="button"
                onMouseDown={addCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle={`add-modal-${resourceId}`}
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
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Screen name<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                  placeholder="Enter screen name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="logo"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Company Logo
                </label>
                <div className="px-3 py-5 border-dashed rounded border-2 border-purple-300 bg-transparent inline-flex flex-col items-center justify-center align-center">
                  <CldUploadWidget
                    uploadPreset="upload-preset-one"
                    onSuccess={(results: CloudinaryUploadWidgetResults) => {
                      if (results) {
                        const resultInfo: CloudinaryUploadWidgetInfo =
                          results.info as CloudinaryUploadWidgetInfo;
                        setPreview_image(resultInfo.secure_url as string);
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
                  onChange={(e) => setTag(e.target.value)}
                  value={tag}
                  onKeyDownCapture={handleKeyPress}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                  placeholder="Enter tag name and press enter to save"
                  required
                />
              </div>
              <div
                className={`col-span-2 grid ${
                  categories ? "inline-flex" : "hidden"
                } grid-cols-3 gap-5 gap-y-1 justify-between px-5 pr-10`}
              >
                {categories &&
                  categories.map((tag: string, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span className="bg-gray-100 text-xs font-medium m-0 text-black inline-flex w-fit items-center gap-1 justify-self-center px-1.5 py-1 rounded-full hover:bg-purple-50">
                        {tag}
                        <button onMouseDown={(e) => deleteCat(e, tag)}>
                          <Svg src="close" w={8} h={8} />
                        </button>
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex gap-x-3 justify-center pb-4 mt-10 mb-3">
              <button
                type="button"
                onMouseDown={addCancel}
                data-modal-hide={`add-modal-${resourceId}`}
                className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                data-modal-hide={`add-modal-${resourceId}`}
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
