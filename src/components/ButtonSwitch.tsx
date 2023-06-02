import { useCallback } from 'react';

import cx from "classnames";

interface ButtonSwitchProps {
  left: React.ReactNode;
  right: React.ReactNode;
  active?: "left" | "right";
}
export function ButtonSwitch(props: ButtonSwitchProps) {
  const { active } = props;

  const getClass = useCallback(
    (value: ButtonSwitchProps["active"]) => {
      const activeClass = "bg-a-green";
      const inactiveClass = "hover:bg-a-green/10";
      return active === value ? activeClass : inactiveClass;
    },
    [active]
  );

  return (
    <div className='inline-flex h-full w-full cursor-pointer items-stretch p-1'>
      <div
        className={cx(
          "box-center text-sm mr-1 flex-1 rounded-xl px-2 py-1.5 transition-all",
          getClass("left")
        )}
      >
        {props.left}
      </div>
      <div
        className={cx(
          "box-center text-sm ml-1 flex-1 rounded-xl px-2 py-1.5 transition-all",
          getClass("right")
        )}
      >
        {props.right}
      </div>
    </div>
  );
}