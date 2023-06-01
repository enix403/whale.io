import cx from "classnames";

export interface InputGroupProps {
  placeholder: string;
  leftIcon?: JSX.Element;
  rightElement?: React.ReactNode;
  containerClass?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}
export function InputGroup(props: InputGroupProps) {
  return (
    <div className={cx('flex h-16 rounded-2.5xl', props.containerClass)}>
      {props.leftIcon && (
        <>
          <p className='box-center mx-4 self-stretch'>{props.leftIcon}</p>
          <div className='my-6 border border-a-white-100/50'></div>
        </>
      )}
      <input
        className='h-full flex-1 ml-5 bg-transparent'
        placeholder={props.placeholder}
        size={1}
        {...props.inputProps}
      />
      {props.rightElement}
    </div>
  );
}
