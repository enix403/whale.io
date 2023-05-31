import cx from "classnames";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  leftElement?: JSX.Element;
  label: string;
  rightElement?: JSX.Element;
};
export const Button = (props: ButtonProps) => {
  const { className, leftElement, label, rightElement, ...rest } = props;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <button
      {...rest}
      className={cx(
        "flex w-full rounded-2.5xl bg-a-green p-4 hover:bg-a-green/80",
        className
      )}
    >
      {leftElement}
      <p className='flex-1 self-center font-bold'>{label}</p>
      {rightElement}
    </button>
  );
};
