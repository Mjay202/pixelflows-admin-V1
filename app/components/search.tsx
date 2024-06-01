'use client'
import Image from "next/image";

export default function Search({ placeholder }: { placeholder: string }) {
    function handleSearch(term: string) {
    console.log(term);
  }
    return (
      <div>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Image src="/svg/search.svg" alt="Search Icon" width={15} height={15} />
          </div>
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 border-1 text-gray-700 text-sm rounded-lg focus:ring-purple-500 block w-full ps-10 p-2.5 px-8"
            placeholder={placeholder}
            onChange={(e) =>
            { handleSearch(e.target.value); }
            }
            required
          />
        </div>
      </div>
    );
}