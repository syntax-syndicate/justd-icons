import * as React from "react";
const SvgIconArrowDown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 14 12 20.25 5.75 14M12 19.5V3.75"
    />
  </svg>
);
export default SvgIconArrowDown;
