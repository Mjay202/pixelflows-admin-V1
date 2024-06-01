import Search from '@/app/components/search'
import Image from 'next/image';

function PlatformPage() {
  
  return (
    <section>
      <h1 className="text-xl font-semibold">Platforms</h1>
      <h5 className="text-sm font-normal mt-3">
        View and manage platforms and categories
      </h5>

      <div className="pl-1 mt-6">
        <div className="flex justify-between">
          <div>
            <Search placeholder="Search" />
          </div>
          <div>
            <button
              type="button"
              className="bg-gray-50 border items-center font-medium border-gray-300 border-1 text-gray-900 text-sm rounded-lg focus:ring-purple-500 py-2 px-5  me-2 mb-2"
            >
              <Image
                src="/svg/sort.svg"
                alt="sort Icon"
                width={15}
                height={10}
                className="inline-flex mr-2"
              />
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformPage;