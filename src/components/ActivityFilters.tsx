import { SelectBox } from "components/SelectBox";

import FilterIcon from "assets/Filter.png";
import SearchIcon from "assets/SearchIcon.svg";

export function ActivityFilters() {
  return (
    <>
    <div className="lg:mb-0 mb-4">
      <SelectBox>
        <option>Last 30 Days</option>
      </SelectBox>
    </div>
    <div className="lg:mb-0 mb-4">
      <SelectBox>
        <option>Aug 2022</option>
      </SelectBox>
    </div>
      <div className='ml-2 flex self-stretch w-96 rounded-2.5xl bg-a-dark-300'>
        <div className='box-center ml-6 self-stretch'>
          <img src={SearchIcon} />
        </div>
        <input
          className='ml-5 self-center h-full flex-1 bg-transparent'
          placeholder='Search'
          size={1}
        />
        <div className='mr-1 self-center'>
          <img src={FilterIcon} />
        </div>
      </div>
    </>
  );
}