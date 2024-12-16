import * as React from "react";
const SvgIconFolderFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M3.75 3A1.75 1.75 0 0 0 2 4.75v13.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 18.25V7.75A1.75 1.75 0 0 0 20.25 6h-7.715a.25.25 0 0 1-.208-.111l-1.406-2.11A1.75 1.75 0 0 0 9.465 3z"
    />
  </svg>
);
export default SvgIconFolderFill;
