import SelectArrowIMG from "assets/SelectArrow.svg";

const SelectArrow = () => (
  <img src={SelectArrowIMG} />
)

export function SelectBox(props: React.PropsWithChildren) {
  return (
    <div className='relative mx-2 h-12 w-36 cursor-pointer rounded-2.5xl bg-a-dark-300 hover:bg-a-dark-300/75'>
      <select className='ml-5 h-full w-full cursor-pointer appearance-none bg-transparent text-sm text-a-white-200'>
        {props.children}
      </select>
      <div className='box-center absolute right-0 top-0 h-full px-4'>
        <SelectArrow />
      </div>
    </div>
  );
}
