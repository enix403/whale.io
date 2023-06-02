import { LanguageSelect } from 'components/LanguageSelect';

import SearchIcon from "assets/SearchIcon.svg";
import VecBlocks from "assets/vector-blocks.png";
import Folder from "./Folder.svg";
import Notification from "./Notification.svg";
import Settings from "./Settings.svg";

const SearchInput = () => {
  return (
    <div className='ml-8 flex h-12 w-96 rounded-2.5xl bg-a-dark-200'>
      <p className='box-center ml-6 self-stretch'>
        <img src={SearchIcon} />
      </p>
      <input
        className='ml-5 h-full flex-1 bg-transparent'
        placeholder='Search in dashboard...'
        size={1}
      />
    </div>
  );
};

/*
const LanguageSelect = () => (
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
  */

const IconButton = ({ children }: React.PropsWithChildren) => (
  <div className='box-center relative mx-2 aspect-square h-12 cursor-pointer rounded-1.5xl bg-a-dark-200 hover:bg-a-dark-200/75'>
    {children}
  </div>
);

const TopBarContents = () => {
  return (
    <div className='h-full pl-52 group-[.full]/layout:pl-0'>
      <div className='flex h-full items-center border-l-2 border-a-white-100/10 bg-a-dark-300 px-6'>
        <img className='ml-8' src={VecBlocks} />
        <SearchInput />
        <div className='flex-grow' />
        <LanguageSelect />
        <IconButton>
          <img src={Folder} />
        </IconButton>
        <IconButton>
          <img src={Settings} />
        </IconButton>
        <IconButton>
          <img src={Notification} />
          <span className='box-center absolute left-6 top-1.5 h-5 w-5  self-center rounded-md bg-red-500 text-center text-sm'>
            8
          </span>
        </IconButton>
      </div>
    </div>
  );
};

export const TopBar = () => {
  return (
    <div className='fixed z-10 group-[.full]/layout:z-30 h-16 w-full'>
      <TopBarContents />
    </div>
  );
};
