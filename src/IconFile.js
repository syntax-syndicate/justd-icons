import * as React from "react";
const SvgIconFile = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 3.25v5a1 1 0 0 0 1 1h5m-13-6.5h6.586a1 1 0 0 1 .707.293l5.914 5.914a1 1 0 0 1 .293.707V20.25a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconFile;
