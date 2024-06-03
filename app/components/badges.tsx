'use client'
export default function Badges({ name }: { name: string }) {
    return (
      <span className="bg-purple-50 text-xs font-medium me-2 flex justify-center px-0 py-0.5 rounded-full hover:bg-purple-100">
        {name}
      </span>
    );
}