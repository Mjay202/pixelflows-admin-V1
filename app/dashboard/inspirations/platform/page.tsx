import Search from "@/app/components/search";
import Image from "next/image";
import ButtonWithIcon from "@/app/components/button-with-icon";
import PlatformTable from "@/app/dashboard/inspirations/platform/platform-table";
import Add from "./add-platform";

function PlatformPage() {
  return (
    <section>
      <h1 className="text-lg font-semibold">Platforms</h1>
      <h5 className="text-sm font-normal mt-2">
        View and manage platforms and categories
      </h5>

      <div className="mt-3">
        <div className="flex justify-between items-center">
          <div>
            <Search placeholder="Search" />
          </div>
          <div className="flex">
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
            <Add/>
          </div>
        </div>
        <PlatformTable query="" />
      </div>
    </section>
  );
}

export default PlatformPage;
