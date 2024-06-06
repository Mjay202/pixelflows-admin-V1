"use client";
import { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { initModals } from "flowbite";
import Svg from "@/app/components/svg";
import { toast } from "sonner";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";

interface FileInput {
  [key: string]: File | null;
}

export default function Add() {

 const [value, setValue] = useState(
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod. Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam."
 );
  
  
 
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [job_type, setJob_type] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [company_url, setCompany_url] = useState<string>("");
  const [company_logo, setCompany_logo] = useState<string>("");
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [apply_url, setApply_url] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [seniority_level, setSeniority_level] = useState<string>("");
  const [work_arrangement, setWork_arrangement] = useState<string>("");
  const [location_flexibility, setLocation_flexibility] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");

  const handleTagInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleTagKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      event.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  

 
  const addCancel = () => {
    toast.warning("Job adding process has been cancelled!");
  };

  const handleSubmit = () => {
    const data = {
      title,
      summary,
      description: value,
      location,
      job_type,
      company,
      company_url,
      company_logo,
      apply_url,
      tags,
      status,
      seniority_level,
      work_arrangement,
      location_flexibility,
    };
    console.log(data);
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Job" }), 2000)
      );

    toast.promise(promise, {
      loading: "Loading...",
      success: (data: any) => {
        return `${data.name} has been successfully added`;
      },
      error: "Error",
    });
  };
  return (
    <div>
  
        <button
          id="#add1"
          onMouseDown={initModals}
          data-modal-target="add-modal-3"
          data-modal-toggle="add-modal-3"
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
          Post a job
        </button>

        {/* First modal */}
        <div
          id="add-modal-3"
          tab-index="-1"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed px-4 mt-2 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-2 w-full mt-3  max-w-md max-h-full">
            <div className="relative bg-white rounded-lg pb-3 shadow ">
              <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
                <h3 className="text-sm font-bold text-gray-900 pl-2">
                  Add a job post <span className="text-purple-700">(1)</span>
                </h3>
                <button
                  type="button"
                  onMouseDown={addCancel}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-toggle="add-modal-3"
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

              <div className="grid gap-3 mb-4 grid-cols-2 p-5 md:p-4 mt-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Job Title<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter job name"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Job Summary<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="summary"
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter job name"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Job Description<span className="text-red-700">*</span>
                  </label>
                  <ReactQuill theme="snow" value={value} onChange={setValue} />
                  <Image
                    src="/images/editor-img.png"
                    width={500}
                    height={390}
                    className="me-1 w-ful"
                    alt="logo"
                  />
                </div>
              </div>

              <div className="flex gap-x-3 justify-center mt-4 mb-3">
                <button
                  type="button"
                  onMouseDown={addCancel}
                  data-modal-hide="add-modal-3"
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-modal-target="add-modal-4"
                  data-modal-toggle="add-modal-4"
                  data-modal-hide="add-modal-3"
                  className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second modal */}
        <div
          id="add-modal-4"
          tab-index="-2"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 px-4 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-2  w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow pb-2 mb-2 dark:bg-gray-700">
              <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
                <h3 className="text-sm font-bold text-gray-900 ">
                  Add a job 2
                </h3>
                <button
                  type="button"
                  onMouseDown={addCancel}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-toggle="add-modal-4"
                  data-modal-hide="add-modal-3"
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

              <div className="grid gap-6 mb-4 grid-cols-2 p-5 md:p-4">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Select Tags<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    value={tagInput}
                    onChange={handleTagInput}
                    onKeyDownCapture={handleTagKeyPress}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter tag name and press enter to save"
                    required
                  />
                  <span className="inline-flex gap-x-2 italics">
                    {tags?.map((tag) => (
                      <span>{tag}</span>
                    ))}
                  </span>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Job Location<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    id="location"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select location"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Job Type<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    value={job_type}
                    onChange={(e) => setJob_type(e.target.value)}
                    name="job_type"
                    id="job_type"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select type"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Salary type<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select option"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Salary Amount<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select option"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    name="company"
                    id="company"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select option"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-x-3 justify-center mt-10 mb-3">
                <button
                  type="button"
                  data-modal-toggle="add-modal-3"
                  data-modal-target="add-modal-3"
                  data-modal-hide="add-modal-4"
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  <span className="sr-only">Close modal</span>
                  Go back
                </button>
                <button
                  type="button"
                  data-modal-hide="add-modal-4"
                  data-modal-toggle="add-modal-5"
                  data-modal-target="add-modal-5"
                  className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third modal */}
        <div
          id="add-modal-5"
          tab-index="-2"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 px-4 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-2  w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow pb-2 dark:bg-gray-700">
              <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
                <h3 className="text-sm font-bold text-gray-900 ">
                  Add a job <span className="text-purple-700">(3)</span>
                </h3>
                <button
                  type="button"
                  onMouseDown={addCancel}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-toggle="add-modal-5"
                  data-modal-hide="add-modal-4"
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

              <div className="grid gap-6 mb-4 grid-cols-2 p-3 md:p-4">
                <div className="col-span-2 w-1/2">
                  <label
                    htmlFor="logo"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company Logo
                  </label>
                  <div className="px-3 py-5 border-dashed rounded flex-col items-center place-content-center relative border-2 border-purple-300 bg-transparent flex justify-center align-center">
                    <CldUploadWidget
                      uploadPreset="upload-preset-one"
                      onSuccess={(results: CloudinaryUploadWidgetResults) => {
                        console.log(results?.info);
                        if (results) {
                          const resultInfo: CloudinaryUploadWidgetInfo =
                            results.info as CloudinaryUploadWidgetInfo;
                          console.log(resultInfo.secure_url as string);
                          setCompany_logo(resultInfo.secure_url as string);
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
                     {uploaded? "Sucessfull" : " Click to upload logo"}
                    </h3>
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Company website link<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="company_url"
                    id="company_url"
                    value={company_url}
                    onChange={(e) => setCompany_url(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter website link"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Apply link<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="apply"
                    id="apply"
                    value={apply_url}
                    onChange={(e) => setApply_url(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Enter link"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Open/Closed<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select option"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Seniority level<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="seniority_level"
                    id="seniority_level"
                    value={seniority_level}
                    onChange={(e) => setSeniority_level(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select option"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Work mode<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="work_arrangement"
                    id="work_arrangement"
                    value={work_arrangement}
                    onChange={(e) => setWork_arrangement(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                    placeholder="Select option"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-x-3 justify-center mt-5 mb-3">
                <button
                  type="button"
                  data-modal-toggle="add-modal-4"
                  data-modal-target="add-modal-4"
                  data-modal-hide="add-modal-5"
                  className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
                >
                  <span className="sr-only">Close modal</span>
                  Go back
                </button>
                <button
                  type="button"
                 onMouseDown={handleSubmit}
                  data-modal-hide="add-modal-5"
                  data-modal-toggle="add-modal-5"
                  data-modal-target="add-modal-5"
                  className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-20 py-2.5 text-center"
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}
