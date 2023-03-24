import React from "react";
import { useRef, useState, useEffect } from "react";
export default function ProgressBar({ setCurrentPageView }) {
  const sliderbarRef = useRef(null);
  const fillRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    let sliderbar = sliderbarRef.current;
    let currentDroppable = null;
    let isDragging = false;
    const gridContainer = document.querySelector(".grid");
    const viewBox = document.querySelector("#viewBox");
    function onMouseDown(e) {
      e.preventDefault();
      let target = e.target.closest(".draggable");
      if (!target) return;
      if (isDragging) return;
      setDragging(true);
      isDragging = true;
      let shiftX = e.clientX - target.getBoundingClientRect().left;
      function moveAt(clientX) {
        let margins =
          parseInt(
            window
              .getComputedStyle(document.querySelector(".App > .container"))
              .getPropertyValue("margin-left")
          ) +
          (gridContainer.offsetWidth - viewBox.offsetWidth) / 2;
        let left = clientX - shiftX - margins - target.offsetWidth / 2;
        if (left < 0) {
          left = 0;
        }
        if (left > target.parentElement.clientWidth) {
          left = target.parentElement.clientWidth;
        }
        target.style.left = left + "px";
        fillRef.current.style.right = sliderbar.clientWidth - left + "px";
      }
      moveAt(e.clientX);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      function onMouseMove(e) {
        target.classList.add("dragging");
        fillRef.current.classList.add("dragging");
        target.classList.add("hidden");
        let elemBelow = document.elementFromPoint(
          e.clientX,
          sliderbar.getBoundingClientRect().top
        );
        target.classList.remove("hidden");
        moveAt(e.clientX);
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }

      function leaveDroppable(elem) {}
      function enterDroppable(elem) {
        let currentPageView;
        switch (elem.getAttribute("id")) {
          case "start":
            currentPageView = "10K";
            break;
          case "quarter":
            currentPageView = "50K";
            break;
          case "half":
            currentPageView = "100K";
            break;
          case "threeQuarters":
            currentPageView = "500K";
            break;
          case "end":
            currentPageView = "1M";
            break;
        }
        setCurrentPageView(currentPageView);
      }
      function onMouseUp(e) {
        if (!isDragging) return;
        isDragging = false;
        setDragging(false);
        target.classList.remove("dragging");
        fillRef.current.classList.remove("dragging");
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
    }
    function onTouchStart(e) {
      e.preventDefault();
      let target = e.targetTouches[0].target.closest(".draggable");
      if (!target) return;
      if (isDragging) return;
      setDragging(true);
      isDragging = true;
      let shiftX = e.touches[0].clientX - target.getBoundingClientRect().left;
      function moveAt(clientX) {
        let left =
          clientX -
          parseInt(
            window
              .getComputedStyle(document.querySelector(".App > .container"))
              .getPropertyValue("margin-left")
          ) -
          shiftX;
        if (left < 0) {
          left = 0;
        }
        if (left > target.parentElement.clientWidth) {
          left = target.parentElement.clientWidth;
        }
        target.style.left = left + "px";
        fillRef.current.style.right = sliderbar.clientWidth - left + "px";
      }
      moveAt(e.touches[0].clientX);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
      function onTouchMove(e) {
        target.classList.add("dragging");
        fillRef.current.classList.add("dragging");
        target.classList.add("hidden");
        let elemBelow = document.elementFromPoint(
          e.changedTouches[0].clientX,
          sliderbar.getBoundingClientRect().top
        );
        target.classList.remove("hidden");
        moveAt(e.touches[0].clientX);
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }
      function leaveDroppable(elem) {}
      function enterDroppable(elem) {
        let currentPageView;
        switch (elem.getAttribute("id")) {
          case "start":
            currentPageView = "10K";
            break;
          case "quarter":
            currentPageView = "50K";
            break;
          case "half":
            currentPageView = "100K";
            break;
          case "threeQuarters":
            currentPageView = "500K";
            break;
          case "end":
            currentPageView = "1M";
            break;
        }
        setCurrentPageView(currentPageView);
      }
      function onTouchEnd() {
        if (!isDragging) return;
        isDragging = false;
        setDragging(false);
        target.classList.remove("dragging");
        fillRef.current.classList.remove("dragging");
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      }
    }
    sliderbar.addEventListener("mousedown", onMouseDown);
    sliderbar.addEventListener("touchstart", onTouchStart);
    return () => {
      sliderbar.removeEventListener("mousedown", onMouseDown);
      sliderbar.removeEventListener("touchstart", onTouchStart);
    };
  }, []);
  return (
    <div
      ref={sliderbarRef}
      className="h-3 w-full bg-sliderEmpty rounded-[20px] relative my-12"
    >
      {/* drop zones */}
      <div
        ref={fillRef}
        className={`absolute bg-sliderBackground inset-y-0 left-0`}
      >
        <div
          className={`absolute inset-0 bg-white rounded-full duration-200 ease-in-out ${
            isHover && !dragging ? "opacity-50" : "opacity-0"
          }`}
        ></div>
      </div>
      <div className="w-full">
        <div
          id="start"
          className="w-5 h-5 absolute left-[0%] top-1/2 -translate-y-1/2 droppable"
        ></div>
        <div
          id="quarter"
          className="w-5 h-5 absolute left-[25%] top-1/2 -translate-y-1/2 droppable"
        ></div>
        <div
          id="half"
          className="w-5 h-5 absolute left-[50%] top-1/2 -translate-y-1/2 droppable"
        ></div>
        <div
          id="threeQuarters"
          className=" w-5 h-5 absolute left-[75%] top-1/2 -translate-y-1/2 droppable"
        ></div>
        <div
          id="end"
          className="w-5 h-5 absolute left-[98%] top-1/2 -translate-y-1/2 droppable"
        ></div>
      </div>
      <div
        onDragStart={() => {
          return false;
        }}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
        className={`bg-sliderBackground w-12 h-12 rounded-full grid place-items-center absolute left-[10px] -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer draggable`}
      >
        <div
          className={`absolute inset-0 bg-white rounded-full duration-200 ease-in-out ${
            isHover && !dragging ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        <img src="./assets/images/icon-slider.svg" alt="" className="" />
      </div>
    </div>
  );
}
