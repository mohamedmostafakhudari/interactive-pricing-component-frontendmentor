import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="App font-body md:bg-[#f1f5fe] min-h-screen relative">
      <div className="container mx-auto">
        <Header />
        <Main />
      </div>
      <footer className="absolute bottom-0 inset-x-0">
        <div className="bg-CTABackground text-center text-CTAText">
          &copy; <span className="font-bold ml-2">Mohamed Mostafa</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
