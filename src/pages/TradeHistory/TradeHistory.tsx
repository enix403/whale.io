import { Contents, Sidebar } from "components/Sidebar";
import { SortArrow } from "components/SortArrow";

import SelectArrowIMG from "assets/SelectArrow.svg";
import CoinBTC from "./CoinBTC.svg";
import TypeArrowDown from "./TypeArrowDown.svg";
import TypeArrowUp from "./TypeArrowUp.svg";

import "./TradeHistory.css";

const SelectArrow = () => (
  <img src={SelectArrowIMG} />
)

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
