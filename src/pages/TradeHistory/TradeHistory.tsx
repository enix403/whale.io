import { Contents, Sidebar } from "components/Sidebar";
import { SortArrow } from "components/SortArrow";

import CoinBTC from "./CoinBTC.svg";
import TypeArrowDown from "./TypeArrowDown.svg";
import TypeArrowUp from "./TypeArrowUp.svg";

import "./TradeHistory.css";

const SelectArrow = () => (
  <svg
    width='10'
    height='6'
    viewBox='0 0 10 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.94888 5.99999C5.08612 6.00001 5.22202 5.973 5.34882 5.92049C5.47561 5.86799 5.59084 5.79102 5.6879 5.69399L9.58789 1.794C9.78375 1.59813 9.8938 1.33249 9.8938 1.0555C9.8938 0.77851 9.78375 0.512869 9.58789 0.317007C9.39203 0.121144 9.12639 0.0110984 8.8494 0.0110984C8.5724 0.0110984 8.30676 0.121144 8.1109 0.317007L4.9469 2.717L1.7829 0.317007C1.58704 0.121144 1.32139 0.0110984 1.0444 0.0110984C0.767412 0.0110984 0.50174 0.121144 0.305878 0.317007C0.110015 0.512869 2.14471e-08 0.77851 0 1.0555C-2.1447e-08 1.33249 0.110015 1.59813 0.305878 1.794L4.2059 5.69399C4.3034 5.79155 4.41925 5.86882 4.54678 5.92135C4.67431 5.97387 4.81096 6.00059 4.94888 5.99999Z'
      fill='#E0E4F5'
    />
  </svg>
);

function SelectBox(props: React.PropsWithChildren) {
  return (
    <div className='relative mx-2 h-12 w-52 cursor-pointer rounded-2.5xl bg-a-dark-300 hover:bg-a-dark-300/75'>
      <select className='ml-5 h-full w-full cursor-pointer appearance-none bg-transparent text-sm text-a-white-200'>
        {props.children}
      </select>
      <div className='box-center absolute right-0 top-0 h-full px-4'>
        <SelectArrow />
      </div>
    </div>
  );
}

function Selections() {
  return (
    <div className='mb-16 flex items-center'>
      <h1 className='ml-6 font-semibold'>Tade History</h1>
      <div className='flex-grow'></div>
      <SelectBox>
        <option>Last 30 Days</option>
      </SelectBox>
      <SelectBox>
        <option>Aug 2022</option>
      </SelectBox>
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
        <button className='group h-full flex items-center'>
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
            <th>Coin<SortArrow /></th>
            <th>Transaction<SortArrow /></th>
            <th>Type<SortArrow /></th>
            <th>ID<SortArrow /></th>
            <th>Date/Time<SortArrow /></th>
            <th>IP<SortArrow /></th>
            <th>Status<SortArrow /></th>
            <th>Fees<SortArrow /></th>
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

export function TradeHistory() {
  return (
    <>
      <Sidebar />
      <Contents>
        <div className='p-8'>
          <Selections />
          <HistoryTable />
        </div>
      </Contents>
    </>
  );
}
