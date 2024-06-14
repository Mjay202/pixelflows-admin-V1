"use client";
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";

import Svg from "@/app/components/svg";
import { toast } from "sonner";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useRouter } from "next/navigation";
import { editJob, getJob } from "@/app/services/api";



export default function Edit({ id }: { id: string }) {

  
    const [value, setValue] = useState("Lorem ipsum dolor sit amet.");

    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [job_type, setJob_type] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [company_url, setCompany_url] = useState<string>("");
    const [company_logo, setCompany_logo] = useState<string>("");
    const [uploaded, setUploaded] = useState<boolean>(true);
    const [apply_url, setApply_url] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [seniority_level, setSeniority_level] = useState<string>("");
    const [work_arrangement, setWork_arrangement] = useState<string>("");
    const [location_flexibility, setLocation_flexibility] = useState<string>("");
    // const [tags, setTags] = useState<string[]>([]);
    // const [tagInput, setTagInput] = useState<string>("");
    
  useEffect(() => {
    const getEachJob = async (id: string) => {
      const response = await getJob(id);
      if (response) {
        
        setValue(response.description);
        setTitle(response.title);
        setSummary(response.summary);
        setLocation(response.location);
        setJob_type(response.job_type);
        setCompany(response.company);
        setCompany_url(response.company_url);
        setCompany_logo(response.company_logo);
        setApply_url(response.apply_url);
        setStatus(response.status);
        // setTags(response.tags);
        setWork_arrangement(response.seniority_level);
        setWork_arrangement(response.work_arrangement);
        setLocation_flexibility(response.location_flexibility);
      }
     
    }
    getEachJob(id);
  }, [id]);

  // const handleTagInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTagInput(event.target.value);
  // };

  // const handleTagKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter" && tagInput.trim() !== "") {
  //     event.preventDefault();
  //     setTags([...tags, tagInput.trim()]);
  //     setTagInput("");
      
  //   }
  // };

  const editCancel = () => {
    toast.warning("Job editing process has been cancelled!");
  };

  const handleUpdate = async () => {
    const data = {
      title,
      // summary,
      description: value,
      location,
      job_type,
      company,
      company_url,
      company_logo,
      apply_url,
      // tags,
      status,
      seniority_level,
      work_arrangement,
      location_flexibility,
    };

    const response = await editJob(data, id);

      if (response.data) {
        console.log(response);
        const promise = () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Job" }), 2000)
          );

        toast.promise(promise, {
          loading: "Loading...",
          success: (data: any) => {
            return `${data.name} has been successfully edited`;
          },
          error: "Error",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      if (response.error) {
        const errorMsg = response.error.message[0];
        toast.error(errorMsg);
      }
  };
  return (
    <div>
      {/* First modal */}
      <div
        id={`${id}-1`}
        tab-index="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed px-4 mt-2 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2 w-full mt-3  max-w-md max-h-full">
          <div className="relative bg-white rounded-lg pb-3 shadow ">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-base font-bold text-gray-900 pl-2">
                              Edit a Job post <span className="text-purple-700">(1)</span>
              </h3>
              <button
                type="button"
                onMouseDown={editCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle={`${id}-1`}
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

            <div className="grid gap-5 mb-4 grid-cols-2 py-2 px-4 md:p-4 mt-2">
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
                
              </div>
            </div>

            <div className="flex gap-x-3 justify-center mt-4 mb-3">
              <button
                type="button"
                onMouseDown={editCancel}
                data-modal-hide={`${id}-1`}
                className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                data-modal-target={`${id}-2`}
                data-modal-toggle={`${id}-2`}
                data-modal-hide={`${id}-1`}
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
        id={`${id}-2`}
        tab-index="-2"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 px-4 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2  w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow pb-2 mb-2 dark:bg-gray-700">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-base font-bold text-gray-900 ">
                Edit a Job post 2 <span className="text-purple-700">(1)</span>
              </h3>
              <button
                type="button"
                onMouseDown={editCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle={`${id}-2`}
                data-modal-hide={`${id}-1`}
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

            <div className="grid gap-6 mb-2 grid-cols-2 p-5 md:p-4">
              {/* <div className="col-span-2">
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
                <span className={`gap-x-2 italics mt-2 ${tags?  'inline-flex' : 'hidden'}`}>
                  {tags?.map((tag, index) => (
                    <span key={index} className="bg-purple-100 rounded-lg p-2">
                      {tag}
                    </span>
                  ))}
                </span>
              </div> */}
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
                <select
                  id="job_type"
                  value={job_type}
                  onChange={(e) => setJob_type(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a job_type</option>
                  <option value="full-time">Full time</option>
                  <option value="part-time">Part time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
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

            <div className="flex gap-x-3 justify-center mt-5 mb-3">
              <button
                type="button"
                data-modal-toggle={`${id}-1`}
                data-modal-target={`${id}-1`}
                data-modal-hide={`${id}-2`}
                className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-2.5 text-center"
              >
                <span className="sr-only">Close modal</span>
                Go back
              </button>
              <button
                type="button"
                data-modal-hide={`${id}-2`}
                data-modal-toggle={`${id}-3`}
                data-modal-target={`${id}-3`}
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
        id={`${id}-3`}
        tab-index="-2"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 px-4 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-2  w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow pb-2 dark:bg-gray-700">
            <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t">
              <h3 className="text-sm font-bold text-gray-900 ">
                Edit a job <span className="text-purple-700">(3)</span>
              </h3>
              <button
                type="button"
                onMouseDown={editCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle={`${id}-3`}
                data-modal-hide={`${id}-2`}
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
                <div className="px-2 py-2 border-dashed rounded flex-col items-center place-content-center relative border-2 border-purple-300 bg-transparent flex justify-center align-center">
                  <CldUploadWidget
                    uploadPreset="upload-preset-one"
                    onSuccess={(results: CloudinaryUploadWidgetResults) => {
                      if (results) {
                        const resultInfo: CloudinaryUploadWidgetInfo =
                          results.info as CloudinaryUploadWidgetInfo;
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
                    {uploaded
                      ? "Upload sucessfull, Proceed.."
                      : " Click icon to upload logo"}
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
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Select status</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Seniority level<span className="text-red-700">*</span>
                </label>
                <select
                  name="seniority_level"
                  id="seniority_level"
                  value={seniority_level}
                  onChange={(e) => setSeniority_level(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Select level</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Work mode<span className="text-red-700">*</span>
                </label>
                <select
                  name="work_arrangement"
                  id="work_arrangement"
                  value={work_arrangement}
                  onChange={(e) => setWork_arrangement(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Select arrangement</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">Onsite</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-semibold text-gray-900"
                >
                  Location flexibility<span className="text-red-700">*</span>
                </label>
                <select
                  name="location_flexibility"
                  id="location_flexibility"
                  value={location_flexibility}
                  onChange={(e) => setLocation_flexibility(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Flexible?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 px-3 gap-x-3 justify-center mt-5 mb-3">
              <button
                type="button"
                data-modal-toggle={`${id}-2`}
                data-modal-target={`${id}-2`}
                data-modal-hide={`${id}-3`}
                className="text-black font-bold inline-flex items-center bg-white hover:bg-slate-200 transition ease-out duration-300  border-gray-300 border-2  focus:ring-blue-300 rounded-lg text-sm px-14 py-3 text-center"
              >
                <span className="sr-only">Close modal</span>
                Go back
              </button>
              <button
                type="button"
                onMouseDown={handleUpdate}
                data-modal-hide={`${id}-3`}
                data-modal-toggle={`${id}-3`}
                data-modal-target={`${id}-3`}
                className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-900 transition ease-out duration-300 font-semibold rounded-lg text-sm px-14 py-3 text-center"
              >
               Update Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
