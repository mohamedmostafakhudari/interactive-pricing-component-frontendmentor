import React from "react";

export default function Header() {
  const bgStyle = {
    backgroundImage: 'url("./assets/images/bg-pattern.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <header
      className="relative py-24 min-h-[50vh] md:min-h-[25vh]"
      style={bgStyle}
    >
      <div className="px-6 md:p-0">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-8">
          <img src="./assets/images/pattern-circles.svg" alt="circles" />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-xl md:text-4xl">
            Simple, traffic-based pricing
          </h3>
          <div className="text-text mt-2 text-sm md:text-lg">
            <p className="leading-8">
              Sign-up for our 30-day trial. <br className="md:hidden" />
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
