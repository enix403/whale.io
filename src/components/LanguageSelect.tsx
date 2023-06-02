import SelectArrow from "assets/SelectArrow.svg";
import UK from "assets/UK.png";

export const LanguageSelect = () => (
  <div className='relative mx-2 h-12 w-36 cursor-pointer rounded-1.5xl bg-a-dark-200 hover:bg-a-dark-200/75'>
    <div className='box-center absolute left-2 top-0 h-full'>
      <img src={UK} />
    </div>
    <select className='ml-12 h-full w-full cursor-pointer appearance-none bg-transparent text-sm'>
      <option>English</option>
    </select>
    <div className='box-center absolute right-0 top-0 h-full px-4'>
      <img src={SelectArrow} />
    </div>
  </div>
);