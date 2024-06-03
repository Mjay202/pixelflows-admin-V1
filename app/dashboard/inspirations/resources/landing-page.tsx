import ButtonWithIcon from "@/app/components/button-with-icon";
import LandingPageTable from "./landing-pages-table";
import Search from "@/app/components/search";
import Add from "./add-company";


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
        <LandingPageTable />
      </div>
    );
};
