import * as React from "react";
const SvgIconFileFill = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2H5.75A1.75 1.75 0 0 0 4 3.75v16.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.25V10h-6.25A1.75 1.75 0 0 1 12 8.25z"
    />
    <path
      fill="currentColor"
      d="m19.557 8.5-.07-.073-5.914-5.914-.073-.07V8.25c0 .138.112.25.25.25z"
    />
  </svg>
);
export default SvgIconFileFill;
