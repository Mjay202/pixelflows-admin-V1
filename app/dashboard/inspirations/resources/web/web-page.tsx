import ButtonWithIcon from "@/app/components/button-with-icon";
import Search from "@/app/components/search";
import WebTable from "./web-page-table";
import Add from "./add-company";


export default function WebPage() {
  return (
    <div
      className="hidden  rounded-lg"
      id="web"
      role="tabpanel"
      aria-labelledby="web-tab"
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
      <WebTable/>
    </div>
  );
}
