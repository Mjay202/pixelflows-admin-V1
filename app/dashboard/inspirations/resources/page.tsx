"use client";

import ButtonWithIcon from "@/app/components/button-with-icon";
import LandingPageTable from "@/app/dashboard/inspirations/resources/landing-page/landing-pages-table";
import Search from "@/app/components/search";
import { initTabs } from "flowbite";
import LandingPage from "./landing-page/landing-page";
import WebPage from "./web/web-page";

function ResourcesPage() {
  return (
    <section>
      <h1 className="text-lg font-semibold">Resources</h1>
      <h5 className="text-sm font-normal mt-2">
        View and manage inspiration resources
      </h5>

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          // data-tabs-active-classes="text-purple-700 hover:text-purple-900 "
          // data-tabs-inactive-classes=" text-gray-500 hover:text-gray-600"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg  hover:text-gray-600 hover:border-gray-300"
              id="landing-pages-styled-tab"
              data-tabs-target="#landing-pages"
              type="button"
              role="tab"
              onMouseDown={initTabs}
              aria-controls="landing-pages"
              aria-selected="true"
            >
              Landing Pages
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="web-styled-tab"
              data-tabs-target="#web"
              onMouseDown={initTabs}
              type="button"
              role="tab"
              aria-controls="web"
              aria-selected="false"
            >
              Web
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="android-styled-tab"
              data-tabs-target="#android"
              onMouseDown={initTabs}
              type="button"
              role="tab"
              aria-controls="android"
              aria-selected="false"
            >
              Android
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              id="ios-styled-tab"
              data-tabs-target="#ios"
              onMouseDown={initTabs}
              type="button"
              role="tab"
              aria-controls="ios"
              aria-selected="false"
            >
              IOS
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <LandingPage />
        <WebPage/>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="android"
          role="tabpanel"
          aria-labelledby="android-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Android tab's associated content
            </strong>
          </p>
          <div className="block">Table here</div>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="ios"
          role="tabpanel"
          aria-labelledby="ios-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              ios tab's associated content
            </strong>
          </p>
          <div className="block">Table here</div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesPage;
