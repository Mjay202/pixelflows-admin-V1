'use client'
export default function Badges({ name }: { name: string }) {
    return (
      <span className="bg-purple-50 text-xs font-medium m-0 flex justify-center px-1.5 py-0.5 rounded-full hover:">
        {name}
      </span>
    );
}