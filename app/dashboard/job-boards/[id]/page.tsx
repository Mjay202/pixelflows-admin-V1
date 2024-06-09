'use client'
import Svg from "@/app/components/svg";
import { getJob } from "@/app/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";


function JobPage(this: any, { params }: {params: {id: string}}) {
  
  const [job, setJob] = useState<Job | null>(null);
  
  
  
   useEffect(() => {
     const getEachJob = async () => {
       const response = await getJob(params.id);
       if (response) {
         console.log(response);
         setJob(response);
       }
     };
     getEachJob();
   }, []);


  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link href="/dashboard">
              <Svg src="home-2" w={15} h={15} />
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <Svg src="pointer-right" w={4} h={8} />
              <Link
                href="/dashboard/job-boards"
                className="ms-1 text-xs font-medium text-gray-700 hover:text-purple-600 md:ms-2"
              >
                Job boards
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Svg src="pointer-right" w={4} h={8} />
              {job && (
                <Link
                  href="/dashboard/inspirations/resources#web"
                  className="ms-1 text-xs font-medium text-gray-700 hover:text-purple-600 md:ms-2"
                >
                  Job-{`${job._id}`}
                </Link>
              )}
            </div>
          </li>
        </ol>
      </nav>

      <div className="w-2/4 flex gap-3 mt-6">
        <button className="rounded-full px-5 py-2 text-xs font-normal items-center inline-flex border gap-x-2 hover:bg-gray-100 transition ease-out duration-300">
          Edit <Svg src="edit" w={10} h={10} />
        </button>
        <button className="rounded-full px-5 py-2 text-xs text-red-800 font-normal bg-red-50 items-center inline-flex border gap-x-2 hover:bg-red-300 transition ease-out duration-300">
          Delete <Svg src="del" w={10} h={10} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-4 mt-6 mb-16 max-h-fit ">
        <div
          className="border-2 rounded-md p-4 col-span-2 object-contain"
          dangerouslySetInnerHTML={{ __html: `${job && job.description}` }}
        >
          {/* <span className="text-lg font-bold">Senior UX Designer</span> */}
          {/* <p className="text-sm mt-2">
            We're looking for a talented and passionate Mobile Designer to join
            our team and help create a mobile app that will redefine the online
            shopping experience. As a key member of our design team, you will
            work closely with product and engineering to craft intuitive,
            engaging, and visually stunning user interfaces that delight our
            customers.
          </p> */}
          {/* {`${job && job.description}`} */}
          {/* <div className="text-sm mt-4">
            <span>Responsibilities</span>
            <ul className="list-disc pl-4">
              <li>
                Collaborate with the product team to understand user needs,
                preferences, and pain points, and translate these insights into
                compelling user experiences
              </li>
              <li>
                Design and prototype intuitive, user-friendly interfaces for our
                mobile app, focusing on ease of use, visual appeal, and brand
                consistency
              </li>
              <li>
                Create and maintain design systems, style guides, and UI
                component libraries to ensure a cohesive and scalable design
                across the app and web
              </li>
              <li>
                Work closely with engineering to ensure that designs are
                implemented accurately and efficiently
              </li>
              <li>
                Stay up-to-date with the latest trends and best practices in
                mobile app design, e-commerce UX, and interactive technologies
                Contribute to the overall brand development and visual identity
              </li>
            </ul>
          </div>
          <div className="text-sm mt-4">
            <span>Responsibilities</span>
            <ul className="list-disc pl-4">
              <li>
                Collaborate with the product team to understand user needs,
                preferences, and pain points, and translate these insights into
                compelling user experiences
              </li>
              <li>
                Design and prototype intuitive, user-friendly interfaces for our
                mobile app, focusing on ease of use, visual appeal, and brand
                consistency
              </li>
              <li>
                Create and maintain design systems, style guides, and UI
                component libraries to ensure a cohesive and scalable design
                across the app and web
              </li>
              <li>
                Work closely with engineering to ensure that designs are
                implemented accurately and efficiently
              </li>
              <li>
                Stay up-to-date with the latest trends and best practices in
                mobile app design, e-commerce UX, and interactive technologies
                Contribute to the overall brand development and visual identity
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-1 rounded-md p-4 flex-col max-h-fit h-full">
          <div className="flex flex-col justify-center items-center">
            <img
              src={`${job && job.company_logo}`}
              width={40}
              height={70}
              className="me-1"
              alt="logo"
            />

            <Link
              href={`${job && "https://" + job.company_url}`}
              className="flex gap-2 text-xs mt-4"
              passHref={true as boolean}
            >
              Visit Website <Svg src="arrow-tr" w={10} h={10} />
            </Link>

            <Link
              href={`${job && job.apply_url}`}
              className="bg-purple-700 text-white px-12 py-2 mt-6 rounded-full"
            >
              Apply now
            </Link>

            <hr className="mt-8 h-2 p-2 w-full " />
            <div className="flex gap-4 flex-col flex-start  pr-12 pl-4 py-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-extralight">Job Type</span>
                <span className="font-semibold text-xs ">{`${
                  job && job.job_type
                }`}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-extralight">Location</span>
                <span className="font-semibold text-xs ">{`${
                  job && job.location
                }`}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-extralight">Seniority Level</span>
                <span className="font-semibold text-xs ">
                  {`${job && job.seniority_level}`}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-extralight">Date Posted</span>
                <span className="font-semibold text-xs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPage;