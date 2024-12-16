import * as React from "react";
const SvgIconStrikeThroughFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.002 2C9.774 2 8.159 2.73 7.1 3.804c-1.046 1.06-1.5 2.41-1.5 3.571 0 .88.204 1.636.589 2.277.381.637.915 1.123 1.516 1.505l.15.093H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-9.024l-.03-.009c-1.451-.387-2.744-.75-3.685-1.35-.457-.29-.802-.62-1.036-1.01-.23-.385-.376-.868-.376-1.506 0-.79.316-1.754 1.069-2.518.74-.75 1.95-1.357 3.834-1.357 1.948 0 3.077.653 3.752 1.369.698.738.98 1.617 1.09 2.145a.75.75 0 1 0 1.468-.306c-.14-.676-.508-1.853-1.467-2.87C15.865 2.8 14.331 2 12.002 2m6.082 12.367a.75.75 0 1 0-1.292.763c.227.383.37.863.37 1.495 0 1.5-1.424 3.875-5.16 3.875-1.95 0-3.176-.655-3.96-1.398a5.27 5.27 0 0 1-1.359-2.191.75.75 0 1 0-1.429.456c.215.673.707 1.83 1.756 2.824C8.077 21.2 9.674 22 12.002 22c4.486 0 6.66-2.971 6.66-5.375 0-.872-.201-1.62-.578-2.258"
    />
  </svg>
);
export default SvgIconStrikeThroughFill;
