import cx from "classnames";
import { ActivityFilters } from "components/ActivityFilters";
import { Button } from "components/Button";
import { Exchange, ExchangeCircle, ExchangeSide } from "components/Exchange";
import { Contents, Sidebar } from "components/Sidebar";
import { SortArrow } from "components/SortArrow";
import { MainChart, MainPieChart, MiniChart, SubChart } from "./chart";

import CoinBTC from "assets/CoinBTC.svg";
import CoinBTCBlue from "assets/CoinBTCBlue.svg";
import CoinTRX from "assets/CoinTRX.svg";
import CoinUSDT from "assets/CoinUSDT.svg";
import CoinUniSwap from "assets/CoinUniSwap.png";
import SwapIconH from "assets/SwapIconH.svg";
import MArrowLeft from "./ArrowLeft.svg";
import MArrowRight from "./ArrowRight.svg";
import HistoryIcon from "./HistoryIcon.svg";
import SeeAllArrow from "./SeeAllArrow.svg";
import SettingsIcon from "./SettingsIcon.svg";
import RightArrow from "/btn-right-arrow.svg";

import "./Dashboard.css";

interface SelectDownArrowProps {
  width?: any;
  height?: any;
}
const SelectDownArrow = ({ width, height }: SelectDownArrowProps) => (
  <svg
    width={width || "44"}
    height={height || "44"}
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
    <>
      <div className='my-8 items-center lg:flex'>
        <h1 className='mb-4 ml-6 font-semibold lg:mb-0'>Recent Activies</h1>
        <div className='flex-grow'></div>
        <ActivityFilters />
      </div>

      <div className='w-full max-w-full overflow-auto'>
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
    </>
  );
}

function DurationSelect() {
  return (
    <div className='relative h-8 w-16 rounded-lg border-2 border-a-white-100/30'>
      <select className='h-full w-full appearance-none bg-transparent pl-3 text-sm'>
        <option>24h</option>
      </select>
      <div className='pointer-events-none absolute right-[-2px] top-[-2px]'>
        <SelectDownArrow width={"32"} height={"32"} />
      </div>
    </div>
  );
}

interface MarketPriceBoxProps {
  iconUrl: string;
  iconBorder: string;
  label: string;
  chartColor: string;
}
function MarketPriceBox(props: MarketPriceBoxProps) {
  return (
    <div className='mb-6 last:pr-0 lg:w-1/4 lg:pr-16'>
      <div className='flex items-start'>
        <div
          className={cx("rounded-full p-0.5", `price-logo-${props.iconBorder}`)}
        >
          <img
            className='min-h-[32px] min-w-[32px] rounded-full border-8 border-a-dark-100'
            src={props.iconUrl}
          />
        </div>
        <div className='mx-3'>
          <p className='font-semibold'>{props.label}</p>
          <p className='text-xs text-a-white-200/80'>BTC</p>
        </div>

        <div className='flex-1' />
        <DurationSelect />
      </div>

      <SubChart color={props.chartColor} />
    </div>
  );
}

function MarketPrices() {
  return (
    <>
      <div className='mb-12 flex items-center'>
        <p className='font-semibold text-white'>Market Prices</p>
        <div className='flex-grow' />
        <img className='cursor-pointer' src={MArrowLeft} />
        <img className='cursor-pointer' src={MArrowRight} />
      </div>

      <div className='lg:flex'>
        <MarketPriceBox
          iconBorder='btc'
          iconUrl={CoinBTC}
          label='Bitcoin'
          chartColor='#0CAF60'
        />
        <MarketPriceBox
          iconBorder='ustd'
          iconUrl={CoinUSDT}
          label='Theter'
          chartColor='#0CAF60'
        />
        <MarketPriceBox
          iconBorder='uniswap'
          iconUrl={CoinUniSwap}
          label='UniSwap'
          chartColor='#FF5449'
        />
        <MarketPriceBox
          iconBorder='btc-blue'
          iconUrl={CoinBTCBlue}
          label='Bitcoin'
          chartColor='#0CAF60'
        />
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

function WheelChart() {
  return (
    <div>
      <div className='box-center relative mb-6'>
        <MainPieChart />
        <div className='absolute h-20 overflow-hidden'>
          <div className='aspect-square h-24 rounded-full bg-a-dark-300/90 p-3'>
            <p className='box-center mt-3 text-center font-semibold'>$69300</p>
            <p className='box-center mt-1 text-xs text-center'>0.0140 BTC</p>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='flex flex-1 box-center'>
          <div className='box-center relative'>
            <MiniChart value={35} color="orange" />
            <p className='absolute text-sm font-semibold text-a-white-200/80'>
              35%
            </p>
          </div>
          <div className='ml-4'>
            <p className='text-a-white-200/80'>Bitcoin</p>
            <p className='text-lg font-semibold'>$1920</p>
          </div>
        </div>

        <div className='flex flex-1 box-center'>
          <div className='box-center relative'>
            <MiniChart value={5} color="#4464EE" />
            <p className='absolute text-sm font-semibold text-a-white-200/80'>
              5%
            </p>
          </div>
          <div className='ml-4'>
            <p className='text-a-white-200/80'>Waves</p>
            <p className='text-lg font-semibold'>$250</p>
          </div>
        </div>
      </div>

      <div className='mb-4 mt-8 flex border-b border-a-white-100/80 pb-6'>
        <div className='flex flex-1 box-center'>
          <div className='box-center relative'>
            <MiniChart value={50} color="#FB774A" />
            <p className='absolute text-sm font-semibold text-a-white-200/80'>
              50%
            </p>
          </div>
          <div className='ml-4'>
            <p className='text-a-white-200/80'>Avax</p>
            <p className='text-lg font-semibold'>$26</p>
          </div>
        </div>

        <div className='flex flex-1 box-center'>
          <div className='box-center relative'>
            <MiniChart value={10} color="#26A17B" />
            <p className='absolute text-sm font-semibold text-a-white-200/80'>
              10%
            </p>
          </div>
          <div className='ml-4'>
            <p className='text-a-white-200/80'>Bitcoin</p>
            <p className='text-lg font-semibold'>$920</p>
          </div>
        </div>
      </div>

      <p className='box-center mb-12 cursor-pointer font-medium'>
        <span className='mr-2'>See All</span>
        <img src={SeeAllArrow} />
      </p>
    </div>
  );
}

function BalancePane() {
  return (
    <>
      <h1 className='mb-5 flex items-center justify-between pr-10 text-lg font-bold'>
        <span className='ml-2'>Balance</span>
      </h1>
      <WheelChart />
      <ExchangeBox />
    </>
  );
}

export function Dashboard() {
  return (
    <div className='group/layout'>
      <Sidebar />
      <Contents>
        <div className='p-12 pt-0 lg:flex'>
          <div className='flex-[2] lg:mr-6'>
            <TopStats />
            <ProfitChart />
            <ActivitiesTable />
          </div>
          <div className='flex-[1] flex-shrink-0'>
            <BalancePane />
          </div>
        </div>

        <div className='px-14'>
          <MarketPrices />
        </div>
      </Contents>
    </div>
  );
}
