import * as React from "react";
const SvgIconBrandBootstrap = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.154 4.75c-1.141 0-1.985 1-1.948 2.083.037 1.04-.01 2.39-.35 3.489-.34 1.102-.916 1.8-1.856 1.889v1.016c.94.09 1.516.786 1.856 1.889.34 1.1.387 2.448.35 3.489-.037 1.083.807 2.082 1.948 2.082h11.694c1.14 0 1.985-.999 1.947-2.082-.036-1.041.011-2.39.35-3.489.34-1.103.915-1.8 1.855-1.89v-1.015c-.94-.09-1.514-.787-1.855-1.89-.339-1.099-.386-2.447-.35-3.488.038-1.084-.806-2.083-1.948-2.083H6.155Zm9.24 9.809c0 1.492-1.113 2.396-2.96 2.396H9.027a.08.08 0 0 1-.078-.078v-8.32a.08.08 0 0 1 .078-.078h3.389c1.54 0 2.551.834 2.551 2.115 0 .898-.68 1.703-1.546 1.844v.047c1.18.13 1.974.946 1.974 2.074Zm-3.303-5.005h-1.794v2.532h1.51c1.168 0 1.812-.47 1.812-1.31 0-.788-.553-1.222-1.528-1.222m-1.794 3.536v2.79h1.86c1.216 0 1.86-.487 1.86-1.404s-.662-1.386-1.938-1.386z"
    />
  </svg>
);
export default SvgIconBrandBootstrap;
