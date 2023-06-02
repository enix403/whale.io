import cx from "classnames";
import { ActivityFilters } from "components/ActivityFilters";
import { Contents, Sidebar } from "components/Sidebar";
import { SortArrow } from "components/SortArrow";

import ReloadIcon from "assets/ReloadIcon.svg";
import CoinBTC from "./CoinBTC.svg";
import TypeArrowDown from "./TypeArrowDown.svg";
import TypeArrowUp from "./TypeArrowUp.svg";

import "./TradeHistory.css";

function Selections() {
  return (
    <div className='my-8 items-center lg:flex'>
      <h1 className='mb-4 ml-6 font-semibold lg:mb-0'>Trade History</h1>
      <div className='flex-grow'></div>
      <ActivityFilters />
    </div>
  );
}

function HistoryTableRow() {
  return (
    <tr className='[&>td]:py-3 [&>td]:pr-3 [&>td]:first:pt-8'>
      <td>
        <img src={CoinBTC} />
      </td>
      <td>
        <p className='font-semibold'>$659.10</p>
        <p className='text-sm text-a-white-200/80'>0.15654 BTC</p>
      </td>
      <td>
        <button className='group flex h-full items-center'>
          <img src={TypeArrowUp} />
          <span className='ml-2 mr-6 text-a-red group-hover:text-a-red/60'>
            Withdraw
          </span>
        </button>
      </td>
      <td>#14525156</td>
      <td>Mar 21, 2022 / 3:25:19</td>
      <td>192.168.1.1</td>
      <td>
        <span className='rounded-1.5xl bg-a-green/10 px-3 py-2 text-a-green'>
          Completed
        </span>
      </td>
      <td>0.12000 BTC</td>
    </tr>
  );
}

function HistoryTable() {
  return (
    <div className='w-full max-w-full overflow-auto'>
      <table className='app-table'>
        <thead>
          <tr className='border-b border-a-white-100/30 text-a-white-900/80 [&>th]:pb-4 [&>th]:pr-3'>
            <th>
              Coin
              <SortArrow />
            </th>
            <th>
              Transaction
              <SortArrow />
            </th>
            <th>
              Type
              <SortArrow />
            </th>
            <th>
              ID
              <SortArrow />
            </th>
            <th>
              Date/Time
              <SortArrow />
            </th>
            <th>
              IP
              <SortArrow />
            </th>
            <th>
              Status
              <SortArrow />
            </th>
            <th>
              Fees
              <SortArrow />
            </th>
          </tr>
        </thead>
        <tbody>
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
          <HistoryTableRow />
        </tbody>
      </table>
    </div>
  );
}

interface PaginationButtonProps {
  label: string | number;
  active?: boolean;
}
function PaginationButton({ label, active }: PaginationButtonProps) {
  return (
    <div
      className={cx(
        "box-center mx-1 last:mr-0 aspect-square w-12 cursor-pointer rounded-2.5xl transition-colors hover:bg-a-green/80",
        active ? "bg-a-green" : "border-2 border-a-white-100/20"
      )}
    >
      {label}
    </div>
  );
}

const LoadMoreIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z'
      fill='#E5E5E5'
    />
    <path
      d='M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z'
      fill='#E5E5E5'
    />
    <path
      d='M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z'
      fill='#E5E5E5'
    />
    <path
      d='M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z'
      fill='#E5E5E5'
    />
  </svg>
);

function Pagination() {
  return (
    <div className='mt-10 mx-8 flex items-center justify-between'>
      <div className='flex items-center'>
        <PaginationButton label={1} />
        <PaginationButton active label={2} />
        <PaginationButton label={3} />
        <PaginationButton label={".."} />
        <PaginationButton label={4} />
      </div>

      <div className='box-center cursor-pointer'>
        <LoadMoreIcon />
        <span className="ml-2">Load More</span>
      </div>
      <div className='box-center'>
        <img src={ReloadIcon} />
        <span className='ml-2 mr-1 font-semibold'>474</span>
        <span className='text-a-white-200/80'>Items</span>
      </div>
    </div>
  );
}

export function TradeHistory() {
  return (
    <div className='group/layout'>
      <Sidebar />
      <Contents>
        <div className='p-8'>
          <Selections />
          <HistoryTable />
          <Pagination />
        </div>
      </Contents>
    </div>
  );
}
