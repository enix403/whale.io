import { ActivityFilters } from "components/ActivityFilters";
import { Contents, Sidebar } from "components/Sidebar";
import { SortArrow } from "components/SortArrow";

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

export function TradeHistory() {
  return (
    <div className='group/layout'>
      <Sidebar />
      <Contents>
        <div className='p-8'>
          <Selections />
          <HistoryTable />
        </div>
      </Contents>
    </div>
  );
}
