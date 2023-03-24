import React from "react";

export default function Checkbox({
  setMonthlyBilling,
  setYearlyBilling,
  yearlyBilling,
}) {
  function handleChange() {
    setMonthlyBilling((prev) => !prev);
    setYearlyBilling((prev) => !prev);
  }
  return (
    <div
      onClick={handleChange}
      className={`relative duration-200 ease-in-out w-fit rounded-[30px] mx-1 cursor-pointer ${
        yearlyBilling ? "bg-sliderBackground" : "bg-sliderEmpty"
      } md:hover:bg-sliderFull`}
    >
      <div
        className={`absolute w-4 h-4 bg-white rounded-full top-1/2 -translate-y-1/2 ease-in-out duration-200 ${
          yearlyBilling ? "left-5 md:left-8" : "left-1 md:left-1"
        } md:w-5 md:h-5`}
      ></div>
      <input
        type="checkbox"
        value={yearlyBilling}
        className={`appearance-none w-10 h-2 cursor-pointer md:w-14 md:h-5`}
      />
    </div>
  );
}
