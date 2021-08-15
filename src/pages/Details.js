import React from "react";
import { siteContext } from "../contexts/siteContexts";
import { Redirect } from "react-router-dom";
import AuditsCard from "../components/AuditsCard";
import MainLayout from "../layouts/MainLayout";

const Details = () => {
  const { siteData } = React.useContext(siteContext);

  const auditsToShow = [
    "speed-index",
    "largest-contentful-paint",
    "interactive",
    "first-contentful-paint",
    "first-meaningful-paint",
    "largest-contentful-paint-element",
    "uses-long-cache-ttl",
    "cumulative-layout-shift",
    "layout-shift-elements",
  ];

  return (
    <MainLayout>
      {!siteData && <Redirect to="/" />}
      <div className="px-6 py-6 bg-blue-600 dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="break-words text-xl md:text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">{siteData?.lighthouseResult.finalUrl}</h2>
          <p className="mt-3 max-w-3xl text-md md:text-lg leading-6 text-indigo-200">{siteData?.lighthouseResult.userAgent}</p>
          <p className="text-xs md:text-sm leading-5 text-indigo-200">Fetch Data at {siteData?.lighthouseResult.fetchTime}</p>
          <p className="text-xs md:text-sm leading-5 text-indigo-200">Lighthouse Version {siteData?.lighthouseResult.lighthouseVersion}</p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <img src={siteData?.lighthouseResult.audits["final-screenshot"].details.data} width={400} alt="final screenshot" />
        </div>
      </div>
      <div className="flex justify-center mx-auto">
        <div className="p-0 md:p-5 m-5 flex flex-col md:flex-row flex-wrap justify-start">
          {siteData &&
            auditsToShow.map((name, idx) => (
              <AuditsCard key={idx + name} times={siteData?.lighthouseResult.audits[name].displayValue} title={siteData?.lighthouseResult.audits[name].title} description={siteData?.lighthouseResult.audits[name].description} />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
