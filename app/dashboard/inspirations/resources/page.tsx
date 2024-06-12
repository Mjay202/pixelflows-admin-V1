"use client";
import { useEffect, useState } from "react";
import { getPlatforms } from "@/app/services/api";
import ButtonWithIcon from "@/app/components/button-with-icon";
import Search from "@/app/components/search";
import ResourceTable from "./resource-table";
import Add from "./add-company";


function ResourcesPage() {
  const [platforms, setPlatforms] = useState<any>([]);
  const [toggle, setToggle] = useState<any>([]);

  useEffect(() => {
    const getResources = async () => {
      const response = await getPlatforms();
      if (response) {
        setPlatforms(response);
      }
    };
    getResources();
  }, []);

  return (
    <section>
      <h1 className="text-lg font-semibold">Resources</h1>
      <h5 className="text-sm font-normal mt-2">
        View and manage inspiration resources
      </h5>

      {platforms ? (
        <div>
          <div className="mb-4 border-b mt-6 border-gray-200 ">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              role="tablist"
            >
              {platforms &&
                platforms.map((platform: any, index: number) => (
                  <li className="me-2" role="presentation" key={platform._id}>
                    <button
                      className={`inline-block ${
                        toggle == index
                          ? " border-purple-700 p-2 text-purple-700 hover:text-purple-800"
                          : "border-b-2"
                      } p-4 rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
                      id={`${platform.name !== "" && platform.name}-styled-tab`}
                      data-tabs-target={`#${
                        platform.name !== "" && platform.name
                      }`}
                      type="button"
                      role="tab"
                      onMouseDown={(e) => setToggle(index)}
                      aria-controls={`${platform.name !== "" && platform.name}`}
                      aria-selected="true"
                    >
                      {platform.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div id="default-styled-tab-content">
            {platforms &&
              platforms.map((platform: any, index: number) => (
                <div
                  className={`${
                    toggle == index ? "block" : "hidden"
                  }  p-4 rounded-lg`}
                  id={`${platform.name !== "" && platform.name}`}
                  role="tabpanel"
                  aria-labelledby={`${platform.name}-tab`}
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
                      <Add id={platform._id} />
                    </div>
                  </div>
                  <div>
                    {platform ? (
                      <ResourceTable
                        platformId={platform._id}
                        platformName={platform.name}
                      />
                    ) : (
                      <div className="text-center mt-36">
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            {/* <LandingPage /> */}
            {/* <WebPage /> */}
          </div>
        </div>
      ) : (
        <div className="text-center mt-36">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResourcesPage;
