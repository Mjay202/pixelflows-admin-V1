'use client'
export default function Badges({ name }: { name: string }) {
    return (
      <span className="bg-purple-50 text-xs font-medium m-0 flex justify-center px-0 py-px rounded-full hover:bg-purple-100">
        {name}
      </span>
    );
}