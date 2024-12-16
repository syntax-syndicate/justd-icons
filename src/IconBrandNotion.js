import * as React from "react";
const SvgIconBrandNotion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M5.776 6.321c.616.5.848.463 2.004.385l10.906-.654c.231 0 .039-.231-.038-.27l-1.811-1.309c-.347-.27-.81-.578-1.696-.5l-10.56.77c-.385.038-.462.23-.309.385zm.655 2.542v11.475c0 .616.308.847 1.002.809l11.985-.694c.694-.038.772-.462.772-.963V8.092c0-.5-.193-.77-.618-.731l-12.525.731c-.462.04-.616.27-.616.77Zm11.832.615c.077.347 0 .694-.347.733l-.578.115v8.471c-.501.27-.964.424-1.349.424-.617 0-.771-.193-1.233-.77l-3.778-5.93v5.738l1.196.27s0 .692-.965.692l-2.658.154c-.078-.154 0-.539.27-.616l.693-.192V10.98l-.963-.077c-.077-.347.115-.847.655-.886l2.852-.192 3.931 6.007v-5.314l-1.002-.116c-.077-.424.23-.732.616-.77zM3.694 3.703l10.985-.809c1.348-.116 1.696-.038 2.543.578l3.507 2.464c.578.424.771.54.771 1.001v13.516c0 .848-.309 1.349-1.387 1.425l-12.756.77c-.81.04-1.196-.076-1.62-.616l-2.582-3.35c-.463-.616-.655-1.078-.655-1.618V5.05c0-.693.309-1.27 1.194-1.347"
    />
  </svg>
);
export default SvgIconBrandNotion;
