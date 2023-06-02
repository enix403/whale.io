import cx from "classnames";
import { Button } from "components/Button";
import { Exchange, ExchangeCircle, ExchangeSide } from "components/Exchange";
import { Contents, Sidebar } from "components/Sidebar";
import { SortArrow } from "components/SortArrow";
import { MainChart } from "./chart";

import CoinBTC from "assets/CoinBTC.svg";
import CoinTRX from "assets/CoinTRX.svg";
import CoinUSDT from "assets/CoinUSDT.svg";
import SwapIconH from "assets/SwapIconH.svg";
import HistoryIcon from "./HistoryIcon.svg";
import SettingsIcon from "./SettingsIcon.svg";
import RightArrow from "/btn-right-arrow.svg";

import './Dashboard.css';

const SelectDownArrow = () => (
  <svg
    width='44'
    height='44'
    viewBox='0 0 44 44'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 23.5858L26.2929 19.2929C26.6834 18.9024 27.3166 18.9024 27.7071 19.2929C28.0976 19.6834 28.0976 20.3166 27.7071 20.7071L22.7071 25.7071C22.3166 26.0976 21.6834 26.0976 21.2929 25.7071L16.2929 20.7071C15.9024 20.3166 15.9024 19.6834 16.2929 19.2929C16.6834 18.9024 17.3166 18.9024 17.7071 19.2929L22 23.5858Z'
      fill='white'
    />
  </svg>
);

interface StatProps {
  stat: string | number;
  label: string;
  color?: string;
  progress?: number;
}
const Stat = (props: StatProps) => {
  const color = props.color || "#a3a3a3";
  const progress = props.progress || 0;

  return (
    <div className='mb-6 flex-1 last:pr-0 lg:pr-16'>
      <p className='mb-4 text-2xl font-bold'>{props.stat}</p>

      <div className='my-4 flex items-center'>
        <div
          className='aspect-square h-8 rounded-lg p-2.5'
          style={{ backgroundColor: color }}
        >
          <div className='h-full w-full rounded-full bg-white' />
        </div>
        <span className='ml-4 text-a-white-200'>{props.label}</span>
      </div>

      <div className='overflow-hidden rounded-2.5xl bg-a-dark-300'>
        <div
          className='h-1.5 rounded-2.5xl'
          style={{
            backgroundColor: color,
            width: progress * 100 + "%"
          }}
        />
      </div>
    </div>
  );
};

function TopStats() {
  return (
    <div className='lg:flex'>
      <Stat
        progress={0.49}
        color='#0CAF60'
        stat='1,077.3 USD'
        label='Main Account'
      />
      <Stat
        progress={0.49}
        color='#26A17B'
        stat='1,077.3 USD'
        label='Trading Account'
      />
      <Stat
        progress={0.49}
        color='#FB774A'
        stat='1,077.3 USD'
        label='Margin Account'
      />
      <Stat
        progress={0.49}
        color='#ED6167'
        stat='1,077.3 USD'
        label='Futures Account'
      />
    </div>
  );
}

interface ProfileActionBtnProps {
  label: string;
  active?: boolean;
}
function ProfileActionBtn(props: ProfileActionBtnProps) {
  return (
    <div
      className={cx(
        "ml-2 inline cursor-pointer rounded-lg px-4 py-1 text-sm transition-colors",
        props.active
          ? "bg-a-green"
          : "border-2 border-a-white-100/30 bg-transparent text-white/80 hover:bg-a-green"
      )}
    >
      {props.label}
    </div>
  );
}

function ProfileActions() {
  return (
    <div>
      <ProfileActionBtn active label='All' />
      <ProfileActionBtn label='1M' />
      <ProfileActionBtn label='6M' />
      <ProfileActionBtn label='1Y' />
      <ProfileActionBtn label='YTD' />
    </div>
  );
}

function ProfitChart() {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-white'>Portflio Stats</p>
        <ProfileActions />
      </div>

      <MainChart />
    </div>
  );
}

interface ActivityRowProps {
  iconUrl: string;
  status: string;
  statusColor?: string;
}
function ActivityRow(props: ActivityRowProps) {
  return (
    <tr className='[&>td]:py-3 [&>td]:pr-3 [&>td]:first:pt-8'>
      <td>
        <img className='mr-8 lg:mr-1' src={props.iconUrl} />
      </td>
      <td>
        <p className='font-semibold'>$659.10</p>
        <p className='text-sm text-a-white-200/80'>0.15654 BTC</p>
      </td>
      <td>#14525156</td>
      <td>Mar 21, 2022</td>
      <td>
        <span
          className='rounded-1.5xl px-3 py-2'
          style={{
            backgroundColor: props.statusColor + "1A",
            color: props.statusColor
          }}
        >
          {props.status}
        </span>
      </td>
      <td>0.12000 BTC</td>
    </tr>
  );
}

function ActivitiesTable() {
  return (
    <div className='mt-12 w-full max-w-full overflow-auto'>
      <table className='app-table'>
        <thead>
          <tr className='border-b border-a-white-100/30 text-a-white-900/80 [&>th]:pb-4 [&>th]:pr-8 lg:[&>th]:pr-0'>
            <th>
              Coin
              <SortArrow />
            </th>
            <th>
              Transaction
              <SortArrow />
            </th>
            <th>
              ID
              <SortArrow />
            </th>
            <th>
              Date
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
          <ActivityRow
            iconUrl={CoinBTC}
            status='Completed'
            statusColor='#0CAF60'
          />
          <ActivityRow
            iconUrl={CoinUSDT}
            status='Declined'
            statusColor='#FF5449'
          />
          <ActivityRow
            iconUrl={CoinTRX}
            status='Pending'
            statusColor='#FB774A'
          />
          <ActivityRow
            iconUrl={CoinUSDT}
            status='Completed'
            statusColor='#0CAF60'
          />
        </tbody>
      </table>
    </div>
  );
}

function MarketPriceBox() {
  return (
    <div className='mb-6 w-1/4 last:pr-0 lg:pr-16'>
      <div className='flex items-start'>
        <div className="p-0.5 rounded-full price-logo-btc">
          <img
            className='min-h-[32px] min-w-[32px] rounded-full border-8 border-a-dark-100'
            src={CoinBTC}
          />
        </div>
        <div className='mx-3'>
          <p className='font-semibold'>Bitcoin</p>
          <p className='text-xs text-a-white-200/80'>BTC</p>
        </div>
      </div>
    </div>
  );
}

function MarketPrices() {
  return (
    <>
      <p className='my-8 font-semibold text-white'>Market Prices</p>

      <div className='lg:flex'>
        <MarketPriceBox />
      </div>
    </>
  );
}

/*  =================== RIGHT PANE ===================  */

function ExchangeBox() {
  return (
    <>
      <h1 className='mb-10 flex items-center pr-4 text-lg font-bold'>
        <span className='ml-2'>Quick Exchange</span>
        <span className='flex-grow' />
        <img className='mx-2 cursor-pointer' src={SettingsIcon} />
        <img className='mx-2 cursor-pointer' src={HistoryIcon} />
      </h1>

      <Exchange
        from={
          <ExchangeSide
            sideName='I have'
            meta={"0.12000 BTC"}
            label={
              <>
                BTC
                <SelectDownArrow />
              </>
            }
            icon={CoinBTC}
            value={"0.01"}
          />
        }
        to={
          <ExchangeSide
            sideName='I want'
            meta={"12000 USDT"}
            label={
              <>
                USDT
                <SelectDownArrow />
              </>
            }
            icon={CoinUSDT}
            value={"$403"}
          />
        }
        circle={
          <ExchangeCircle>
            <div className='box-center h-full w-full rounded-full bg-a-green'>
              <img src={SwapIconH} />
            </div>
          </ExchangeCircle>
        }
      />
      <Button
        label='Exchange'
        className='mt-6 py-4'
        rightElement={
          <div>
            <img src={RightArrow} />
          </div>
        }
      />
    </>
  );
}

function BalancePane() {
  return (
    <>
      <h1 className='mb-10 flex items-center justify-between pr-10 text-lg font-bold'>
        <span className='ml-2'>Balance</span>
      </h1>
      <ExchangeBox />
    </>
  );
}

export function DashboardPage() {
  return (
    <>
      <Sidebar />
      <Contents>
        <div className='px-14 py-14 lg:flex'>
          <div className='flex-[3.2] lg:mr-16'>
            <TopStats />
            <ProfitChart />

            <ActivitiesTable />
            <MarketPrices />
          </div>
          <div className='flex-[1]'>
            <BalancePane />
          </div>
        </div>
      </Contents>
    </>
  );
}
