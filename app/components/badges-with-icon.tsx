'use client'
import Svg from "./svg";

export default function BadgesWithIcon({ name }: { name: string }) {
  return (
    <button className="bg-purple-100 text-xs font-medium m-0 inline-flex items-center gap-1 justify-self-center px-1.5 py-0.5 rounded-full hover:">
          {name}
          <Svg src="close" w={8} h={8}/>
    </button>
  );
}
