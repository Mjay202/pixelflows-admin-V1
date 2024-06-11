'use client'
import Svg from "@/app/components/svg";
import { getSingleResource } from "@/app/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Edit from "../edit-company";
import { initModals } from "flowbite";
import Delete from "../delete-company";
import AddScreen from "../add-screen";
import DeleteScreen from "../delete-screen";


const webPage = ({ params }: { params: { id: string } }) => {
 
  const [resource, setResource] = useState<any>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [screens, setScreens] = useState<any>([]);
  const [platformId, setPlatformId] = useState('')
  const [modalNumber, setModalNumber] = useState('')

  useEffect(() => {
    const getResource = async () => {
      const response = await getSingleResource(params.id)
      if (response)
      {
        setResource(response);
        setTags(response.tags);
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
                Web
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
              src={resource.preview_image}
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
              <span key={index} className="ms-1 text-xs self-center font-normal text-gray-700 md:ms-2 bg-gray-200 rounded-md justify-center py-1 px-3">
                {tag}
              </span>
            ))}
        </div>
      </div>
      <div className="w-2/4 flex gap-3 mt-6">
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
          <AddScreen resourceId={resource._id} platformId={platformId} />
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
          Web
        </span>
        <span className="text-xs font-light">Showing screens</span>
      </div>
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
      {modalNumber && <DeleteScreen id={modalNumber} res_id={params.id} />}
      <div className="w-full flex lg:mb-24 justify-end gap-4 items-center ">
        <button className="flex justify-self-end bg-purple-700 py-2 px-4 text-white text-xs rounded-full items-center gap-1">
          Next page <Svg src="arrow-r" w={10} h={7} />{" "}
        </button>
        <div className="gap-3">
          <span className="text-xs hover:text-purple-700 mr-2">Page</span>
          <span className="text-xs bg-gray-200 px-3 py-1 rounded mr-2">1</span>
          <span className="text-xs hover:text-purple-700 mr-2">of 50</span>
        </div>
      </div>
    </div>
  );
}

export default webPage;