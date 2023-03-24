import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Checkbox from "./Checkbox";
const pageViewPrices = {
  "10K": {
    monthly: 8,
  },
  "50K": {
    monthly: 12,
  },
  "100K": {
    monthly: 16,
  },
  "500K": {
    monthly: 24,
  },
  "1M": {
    monthly: 36,
  },
};
export default function Main() {
  const [currentPageView, setCurrentPageView] = useState("10K");
  const [monthlyBilling, setMonthlyBilling] = useState(true);
  const [yearlyBilling, setYearlyBilling] = useState(false);
  return (
    <main className="grid justify-center">
      <div
        id="viewBox"
        className="bg-white p-8 rounded-lg text-text -translate-y-24 -mb-24 relative max-w-[300px] md:min-w-[600px] md:m-0 md:translate-y-0 md:p-12"
      >
        <div className="flex items-center justify-between">
          <div className="text-center font-bold uppercase tracking-widest md:text-md">
            {currentPageView} pageviews
          </div>
          <div className="text-[40px] font-bold text-black hidden items-center gap-2 justify-center md:flex">
            $
            {monthlyBilling ? (
              <>
                {pageViewPrices[currentPageView].monthly.toFixed(2)}{" "}
                <span className="lowercase text-text text-base">/ month</span>
              </>
            ) : yearlyBilling ? (
              <>
                {(
                  pageViewPrices[currentPageView].monthly *
                  12 *
                  (75 / 100)
                ).toFixed(2)}
                <span className="lowercase text-text text-base">/ year</span>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <ProgressBar setCurrentPageView={setCurrentPageView} />
        <div className="text-4xl font-bold text-black flex items-center gap-2 justify-center md:hidden">
          $
          {monthlyBilling ? (
            <>
              {pageViewPrices[currentPageView].monthly.toFixed(2)}{" "}
              <span className="lowercase text-text text-sm">/month</span>
            </>
          ) : yearlyBilling ? (
            <>
              {(
                pageViewPrices[currentPageView].monthly *
                12 *
                (75 / 100)
              ).toFixed(2)}
              <span className="lowercase text-text text-sm">/year</span>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-center my-10">
          <span className="text-xs whitespace-nowrap md:text-sm">
            Monthly Billing
          </span>
          <Checkbox
            setMonthlyBilling={setMonthlyBilling}
            setYearlyBilling={setYearlyBilling}
            yearlyBilling={yearlyBilling}
          />
          <span className="flex items-center">
            <div className="flex-1 text-xs whitespace-nowrap md:text-sm">
              Yearly Billing
            </div>{" "}
            <div className="text-discountText bg-discountBackground px-2 rounded-[25px] text-xs py-1 ml-2 md:hidden">
              25%
            </div>
            <div className="text-discountText bg-discountBackground px-2 rounded-[25px] text-xs py-1 ml-2 hidden md:block">
              25% discount
            </div>
          </span>
        </div>
        <hr className="-mx-8" />
        <div className="flex flex-col items-center mt-6 gap-10 md:flex-row md:justify-between">
          <ul className="text-sm space-y-2">
            <li className="flex justify-center items-center gap-4 md:justify-start">
              <div>
                <img src="./assets/images/icon-check.svg" alt="check" />
              </div>
              Unlimited websites
            </li>
            <li className="flex justify-center items-center gap-4 md:justify-start">
              <div>
                <img src="./assets/images/icon-check.svg" alt="check" />
              </div>
              100% data ownership
            </li>
            <li className="flex justify-center items-center gap-4 md:justify-start">
              <div>
                <img src="./assets/images/icon-check.svg" alt="check" />
              </div>
              Email reports
            </li>
          </ul>
          <button className="bg-CTABackground text-CTAText text-sm font-bold px-12 rounded-full py-3 duration-200 ease-in-out cursor-pointer hover:text-white">
            Start my trial
          </button>
        </div>
      </div>
    </main>
  );
}
