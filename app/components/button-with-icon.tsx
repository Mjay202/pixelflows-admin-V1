'use client'

import Image from "next/image";

export default function ButtonWithIcon({svg, color, bg, text}:{svg:string, color:string, bg:string, text:string}){
    return (
      <button
        type="button"
        className={`${bg} border ml-1 items-center font-medium border-gray-300 ${color} text-xs rounded-md hover:border-gray-400  transition ease-out duration-300 py-1.5 px-3  me-2 mb-2`}
      >
        <Image
          src={svg}
          alt="Icon"
          width={11}
          height={11}
          className="inline-flex mr-2"
        />
        {text}
      </button>
    );
}