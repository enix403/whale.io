import cx from "classnames";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  leftElement?: JSX.Element;
  label: string;
  rightElement?: JSX.Element;
  minimal?: boolean;
};
export const Button = (props: ButtonProps) => {
  const { className, minimal, leftElement, label, rightElement, ...rest } = props;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <button
      {...rest}
      className={cx(
        "flex w-full rounded-2.5xl transition-colors p-3 hover:bg-a-green/80",
        minimal ? "bg-a-white-100/50" : "bg-a-green",
        className
      )}
    >
      {leftElement}
      <p className='flex-1 self-center font-bold text-sm'>{label}</p>
      {rightElement}
    </button>
  );
};
