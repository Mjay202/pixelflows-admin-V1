'use client'
import Svg from "@/app/components/svg";
import { getSingleResource } from "@/app/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { initModals } from "flowbite";
import Edit from "../edit-company";
import Delete from "../delete-company";
import DeleteScreen from "../delete-screen";
import AddScreen from "../add-screen";




const WebPage = ({ params }: { params: { id: string } }) => {
 
  const [resource, setResource] = useState<any>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [screens, setScreens] = useState<any>([]);
  const [platformId, setPlatformId] = useState('')
  const [platformName, setPlatformName] = useState('')
  const [modalNumber, setModalNumber] = useState('')
  const [screenNumber, setscreenNumber] = useState('')

  useEffect(() => {
    const getResource = async () => {
      const response = await getSingleResource(params.id)
      if (response)
      {
        setResource(response);
        setPlatformName(response.platform.name);
        setTags(response.tags);
        setscreenNumber(response.screens.length);
        setScreens(response.screens as Array<[]>);
        setPlatformId(response.platform._id)
        }
    }

    getResource();
  }, [params.id])
  
  const initModal = (id: string) => {
    initModals();
    setModalNumber(id);
 }
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
                href="/dashboard/inspirations/resources"
                className="ms-1 text-xs font-medium text-gray-700 hover:text-purple-600 md:ms-2"
              >
                Inspirations
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Svg src="pointer-right" w={4} h={8} />
              <Link
                href="/dashboard/inspirations/resources#web"
                className="ms-1 text-xs font-medium text-gray-700 hover:text-purple-600 md:ms-2"
              >
                {platformName && platformName}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <Svg src="pointer-right" w={4} h={8} />
              <span className="ms-1 text-xs font-semibold text-gray-700 md:ms-2 bg-gray-100 rounded-full px-1">
                {resource && resource.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mt-7 flex justify-between items-center">
        <div className="flex flex-start gap-1">
          {resource && (
            <img
              src={resource.logo}
              width={40}
              height={40}
              className="me-1"
              alt="image"
            />
          )}

          <div className="flex flex-col gap-2 content-between">
            <span className="text-medium font-semibold">
              {" "}
              {resource && resource.name}
            </span>
            <span className="text-xs font-normal">
              {resource && resource.description}
            </span>
          </div>
        </div>
        <div className="flex gap-x-2">
          {tags &&
            tags.map((tag: any, index: number) => (
              <span
                key={index}
                className="ms-1 text-xs self-center font-normal text-gray-700 md:ms-2 bg-gray-200 rounded-md justify-center py-1 px-3"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
      <div className="w-2/4 flex gap-3 mt-6 mb-4">
        <button
          onMouseDown={initModals}
          data-modal-target={`edit-modal-${resource._id}-1`}
          data-modal-toggle={`edit-modal-${resource._id}-1`}
          className="rounded-full px-5 py-2 text-xs font-normal items-center inline-flex border gap-x-2 hover:bg-gray-100 transition ease-out duration-300"
        >
          Edit <Svg src="edit" w={10} h={10} />
        </button>
        {platformId && resource && (
          <Edit id={resource._id} platformId={platformId} />
        )}

        <button
          onMouseDown={initModals}
          data-modal-target={`add-modal-${resource._id}`}
          data-modal-toggle={`add-modal-${resource._id}`}
          className="rounded-full px-5 py-2 text-xs font-normal items-center inline-flex border gap-x-2 hover:bg-gray-100 transition ease-out duration-300"
        >
          Add screens <Svg src="add" w={10} h={10} />
        </button>
        {platformId && resource && (
          <AddScreen
            resourceId={resource._id}
            platformId={platformId}
            platformName={resource.platform.name}
          />
        )}

        <button
          onMouseDown={initModals}
          data-modal-target={`delete-modal-${resource._id}`}
          data-modal-toggle={`delete-modal-${resource._id}`}
          className="rounded-full px-5 py-2 text-xs text-red-800 font-normal bg-red-50 items-center inline-flex border gap-x-2 hover:bg-red-300 transition ease-out duration-300"
        >
          Delete <Svg src="del" w={10} h={10} />
        </button>
        {platformId && resource && <Delete id={resource._id} />}
      </div>
      <div className="flex justify-between mt-7 items-center">
        <span className="text-purple-900 font-medium border-b-2 pb-2 border-purple-800">
          {platformName && platformName}
        </span>
        {screenNumber && <span className="text-xs font-light">
          Showing {screenNumber} screens
        </span>}
      </div>
      {screens ? (
        <div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-5 mt-3 mb-8 ">
            {screens &&
              screens.map((screen: any) => (
                <div
                  key={screen._id}
                  className="relative group hover:scale-105 transition ease-out duration-500 items-center content-center"
                >
                  <img
                    src={screen.preview_image}
                    width={300}
                    height={200}
                    className="me-1 "
                    alt="image"
                  />
                  {screen && (
                    <div>
                      <button
                        id={screen._id}
                        onMouseDown={initModals}
                        onMouseOver={(e) => initModal(screen._id)}
                        data-modal-target={`delete-modal-${screen._id}-screen`}
                        data-modal-toggle={`delete-modal-${screen._id}-screen`}
                        className="absolute inset-x-20 bottom-10 items-center ml-0  text-xs flex gap-2 justify-center bg-white rounded-lg z-30 px-1 py-2 text-red-700 hover:scale-110 hover:bg-red-200 transition ease-in-out duration-300"
                      >
                        Delete Screen <Svg src="del" w={12} h={12} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="w-full flex lg:mb-24 justify-end gap-4 items-center ">
            <button className="flex justify-self-end bg-purple-700 py-2 px-4 text-white text-xs rounded-full items-center gap-1">
              Next page <Svg src="arrow-r" w={10} h={7} />{" "}
            </button>
            <div className="gap-3">
              <span className="text-xs hover:text-purple-700 mr-2">Page</span>
              <span className="text-xs bg-gray-200 px-3 py-1 rounded mr-2">
                1
              </span>
              <span className="text-xs hover:text-purple-700 mr-2">of 50</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-36">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {modalNumber && <DeleteScreen id={modalNumber} res_id={params.id} />}
    </div>
  );
}

export default WebPage;