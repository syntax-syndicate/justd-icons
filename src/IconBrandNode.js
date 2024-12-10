import * as React from "react";
const SvgIconBrandNode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 22.999c-.276 0-.534-.074-.773-.202l-2.448-1.452c-.368-.202-.184-.275-.074-.312.497-.166.59-.202 1.105-.496.055-.037.128-.019.184.018l1.877 1.12c.074.037.166.037.221 0l7.344-4.244c.073-.036.11-.11.11-.201V8.76c0-.093-.037-.166-.11-.203l-7.344-4.226c-.074-.037-.166-.037-.22 0L4.526 8.557c-.074.037-.11.129-.11.202v8.47c0 .074.037.166.11.202l2.006 1.158c1.086.551 1.767-.092 1.767-.735v-8.36c0-.11.092-.22.221-.22h.939c.11 0 .22.091.22.22v8.36c0 1.452-.79 2.297-2.171 2.297-.424 0-.755 0-1.693-.46L3.883 18.59a1.55 1.55 0 0 1-.773-1.341v-8.47a1.55 1.55 0 0 1 .773-1.342l7.344-4.244a1.65 1.65 0 0 1 1.546 0l7.344 4.244a1.55 1.55 0 0 1 .773 1.341v8.47a1.55 1.55 0 0 1-.773 1.342l-7.344 4.244A2.1 2.1 0 0 1 12 23Z"
    />
    <path
      fill="currentColor"
      d="M14.282 17.174c-3.221 0-3.883-1.47-3.883-2.72 0-.11.092-.22.22-.22h.958c.11 0 .202.074.202.184.147.974.57 1.452 2.522 1.452 1.546 0 2.208-.35 2.208-1.176 0-.478-.184-.827-2.595-1.066-2.006-.202-3.258-.643-3.258-2.242 0-1.488 1.252-2.37 3.35-2.37 2.356 0 3.516.809 3.663 2.573q0 .082-.055.165c-.037.037-.092.074-.148.074h-.975a.215.215 0 0 1-.203-.166c-.22-1.01-.79-1.341-2.3-1.341-1.694 0-1.896.588-1.896 1.029 0 .533.24.698 2.522.992 2.264.294 3.33.717 3.33 2.297 0 1.617-1.343 2.535-3.662 2.535"
    />
  </svg>
);
export default SvgIconBrandNode;
