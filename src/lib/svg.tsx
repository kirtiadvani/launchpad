import { starTypes } from "./svg-types";

export function Star({ type }: { type: starTypes }) {
  return (
    <svg
      width={type.size.width}
      height={type.size.height}
      viewBox="0 0 255 320"
      fill="none"
      className={`absolute top-${type.top} left-${type.left} right-${type.right} bottom-${type.bottom} z-0`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M127.473 301.445C120.457 227.107 73.1099 168.072 13.4279 160.296C73.2677 152.5 120.708 93.1724 127.527 18.5563C134.542 92.8938 181.89 151.928 241.572 159.703C181.731 167.5 134.291 226.828 127.473 301.445Z"
        stroke="#c5c7c9"
        stroke-width="1.73913"
      />
    </svg>
  );
}
