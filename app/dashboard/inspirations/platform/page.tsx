import Search from '@/app/components/search'
import Image from 'next/image';
import ButtonWithIcon from '@/app/components/button-with-icon';
import PlatformTable from '@/app/components/platform-table';

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
          <div className="py-2">
         
            <ButtonWithIcon
              color="text-gray-900"
              bg="bg-gray-50"
              svg="/svg/sort.svg"
              text="Action"
            />
            <ButtonWithIcon
              color="text-gray-900"
              bg="bg-gray-50"
              svg="/svg/sort.svg"
              text="Sort"
            />
            <ButtonWithIcon
              color="text-white"
              bg="bg-purple-600"
              svg="/svg/plus.svg"
              text="Add Platforms"
            />
          </div>
        </div>
            <PlatformTable query=''/>
      </div>
    </section>
  );
}

export default PlatformPage;