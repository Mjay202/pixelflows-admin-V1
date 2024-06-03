'use client'
import ButtonWithIcon from "@/app/components/button-with-icon";
import Search from "@/app/components/search";
import JobTable from "./job-table";
import Add from "./add-job";
import Image from "next/image";
import { toast } from "sonner";

function JobBoardPage() {
  
  const addPost = () => {
    toast.success('Post added successfully');
  }
  return (
    <div>
      <h1 className="text-lg font-semibold">Job Boards</h1>
      <h5 className="text-sm font-normal mt-2">View and manage jobs</h5>

      <div className="flex justify-between items-center mt-4">
        <div>
          <Search placeholder="Search" />
        </div>
        <div className="flex">
          <ButtonWithIcon
            color="text-gray-900"
            bg="bg-gray-50"
            svg="/svg/sort.svg"
            text="Action"
          />
          <ButtonWithIcon
            color="text-gray-900"
            bg="bg-gray-50"
            svg="/svg/sort.svg"
            text="Sort"
          />
          <button
            id="#add1"
            onMouseDown={addPost}
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
        </div>
      </div>
      <JobTable />
    </div>
  );
}

export default JobBoardPage;