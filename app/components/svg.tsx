import Image from "next/image";

export default function Svg({ src, w, h}: { src: string, h:number, w:number}) {
    return (
      <Image
        src={`/svg/${src}.svg`}
        width={w}
        height={h}
        className="me-1"
        alt="svg"
      />
    );
}