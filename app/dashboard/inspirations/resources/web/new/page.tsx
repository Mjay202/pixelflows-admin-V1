import Svg from "@/app/components/svg";
import Image from "next/image";
import Link from "next/link";

type webProps = {
  params: {
    slug: string;
  }
};

function webPage({
  params
} : webProps) {
  const { slug } = params;
  // Add component logic here...
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
              <a
                href="#"
                className="ms-1 text-xs font-medium text-gray-700 hover:text-purple-600 md:ms-2"
              >
                Inspirations
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Svg src="pointer-right" w={4} h={8} />
              <Link
                href="/dashboard"
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
                PandaDoc
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mt-7 flex justify-between items-center">
        <div className="flex flex-start gap-1">
          <Image
            src="/images/panda.png"
            width={40}
            height={40}
            className="me-1"
            alt="image"
          />
          <div className="flex flex-col gap-2 content-between">
            <span className="text-medium font-semibold">Panda</span>
            <span className="text-xs font-light">
              Create, Approve, Track & eSign Docs 40% Faste
            </span>
          </div>
        </div>
        <span className="ms-1 text-xs self-center font-normal text-gray-700 md:ms-2 bg-gray-200 rounded-md justify-center py-1 px-3">
          Finance
        </span>
      </div>
      <div className="w-2/4 flex gap-3 mt-6">
        <button className="rounded-full px-5 py-2 text-xs font-normal items-center inline-flex border gap-x-2 hover:bg-gray-100 transition ease-out duration-300">
          Edit <Svg src="edit" w={10} h={10} />
        </button>
        <button className="rounded-full px-5 py-2 text-xs font-normal items-center inline-flex border gap-x-2 hover:bg-gray-100 transition ease-out duration-300">
          Add screens <Svg src="add" w={10} h={10} />
        </button>
        <button className="rounded-full px-5 py-2 text-xs text-red-800 font-normal bg-red-50 items-center inline-flex border gap-x-2 hover:bg-red-300 transition ease-out duration-300">
          Delete <Svg src="del" w={10} h={10} />
        </button>
      </div>
      <div className="flex justify-between mt-7 items-center">
        <span className="text-purple-900 font-medium border-b-2 pb-2 border-purple-800">
          Web
        </span>
        <span className="text-xs font-light">Showing 50 screens</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3 mb-8">
        <Image
          src="/images/screen-2.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-3.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-4.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-5.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-6.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-7.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-8.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-9.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
        <Image
          src="/images/screen-2.png"
          width={300}
          height={200}
          className="me-1"
          alt="image"
        />
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
  );
}

export default webPage;