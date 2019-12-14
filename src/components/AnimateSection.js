import React, { Component, useState, useRef, useEffect } from "react";

const isInViewport = element => {
  if (element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
};
const AnimateSection = props => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  const elem = document.getElementById("testing");
  if (isInViewport(elem)) {
    console.log("yes");
  }

  return (
    <div
      className={`${props.prefix} ${isVisible ? props.stylename : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default AnimateSection;
