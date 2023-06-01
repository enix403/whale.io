import cx from "classnames";
import React from "react";

import "./pin.css";

const PinCodeDigit = () => (
  <div className='pin-code mx-1'>
    <input
      className='h-full w-full bg-transparent text-center text-lg font-semibold'
      size={1}
    />
  </div>
);

export type SecurityPinDotsProps = React.HTMLProps<HTMLDivElement> & {
  dotsCount: number;
};
export const SecurityPinDots = ({
  dotsCount,
  className,
  ...rest
}: SecurityPinDotsProps) => {
  const elems = [];
  for (let i = 0; i < dotsCount; ++i) {
    elems.push(<PinCodeDigit />);
  }

  return (
    <div {...rest} className={cx("inline-flex flex-shrink-0", className)}>
      {/*  */}
      {elems}
    </div>
  );
};
