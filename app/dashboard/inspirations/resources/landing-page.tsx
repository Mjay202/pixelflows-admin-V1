import ButtonWithIcon from "@/app/components/button-with-icon";
import LandingPageTable from "./landing-pages-table";
import Search from "@/app/components/search";


export default function LandingPage() {
    return (
      <div
        className="hidden  rounded-lg"
        id="styled-landing-pages"
        role="tabpanel"
        aria-labelledby="landing-pages-tab"
      >
        <div className="flex justify-between items-center">
          <div>
            <Search placeholder="Search" />
          </div>
          <div className="">
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
        <LandingPageTable />
      </div>
    );
};
