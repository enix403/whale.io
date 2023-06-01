import "./common.css";

import CoinBTC from "assets/CoinBTC.svg";
import CopyIcon from "assets/CopyIcon.svg";
import WarningCircle from "assets/WarningCircle.svg";
import QrCode from "./Qrcode.svg";

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

const WarningLine = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_89_1191)'>
      <path
        d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z'
        fill='#A4A8AB'
      />
    </g>
    <defs>
      <clipPath id='clip0_89_1191'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const TimeIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z'
      fill='#A4A8AB'
    />
  </svg>
);

function CoinPreview() {
  return (
    <div className='box-center mr-3 rounded-2xl bg-a-dark-200 px-2 py-0'>
      <img src={CoinBTC} />
      <span className='ml-2 mr-1 font-semibold'> Bitcoin</span>
    </div>
  );
}

export function CoinViewBox(props: React.PropsWithChildren) {
  return (
    <div className='group relative box-content flex h-12 w-full items-stretch rounded-4xl bg-a-dark-300 px-3 py-2'>
      <CoinPreview />
      {props.children}
    </div>
  );
}

export function CoinSelect() {
  return (
    <CoinViewBox>
      <select className='flex-1 bg-transparent text-sm text-a-white-200'>
        <option>BTC</option>
      </select>
      <div className='box-center pointer-events-none absolute right-2 aspect-square self-center rounded-2xl bg-a-dark-200 transition-colors group-hover:bg-a-green'>
        <SelectDownArrow />
      </div>
    </CoinViewBox>
  );
}

export const TipsDeposit = () => (
  <div className='mt-4 w-full rounded-4xl bg-a-dark-300 px-12 py-10'>
    <ul className='circle-bullet text-a-white-200/80 [&>li]:mb-6'>
      <li>
        If you have deposited please pay attention to the text messagesm site
        letters and emails we send to you.
      </li>
      <li>Coins will be deposited after 1 network confirmations.</li>
      <li>
        Until 2 confrimations are mafe.an equivalent amount of your assets will
        be temporarily unavailable for witdrawals.
      </li>
      <li>
        You could check the blockchain records and deposit status at{" "}
        <a href='#' className='text-a-green'>
          Deposit Records.
        </a>
      </li>
    </ul>
  </div>
);

export const CopyButton = () => (
  <button className='box-center mx-2 h-full rounded-2.5xl bg-a-green px-5 hover:bg-a-green/80'>
    <p className='self-center font-bold'>Copy</p>
    <img src={CopyIcon} />
  </button>
);

export const BTCAddressInput = () => (
  <>
    <p className='my-2 ml-6 text-sm text-a-white-200'>BTC Address:</p>
    <div className='flex h-16 w-full rounded-4xl bg-a-dark-300'>
      <input
        className='mx-5 flex-1 bg-transparent font-semibold'
        defaultValue={"bc1qXY2kGdygjrsqtzE2n0yrf2XY3"}
        size={1}
      />
      <div className='py-2'>
        <CopyButton />
      </div>
    </div>
  </>
);

export const BTCAlert = () => (
  <>
    <img src={WarningCircle} />
    <p className='mb-3 mt-4 text-lg font-semibold'>
      Send Only BTC to this Address!
    </p>
    <p className='text-a-white-200'>
      Sending coin or token other than BTC to this Address may reault in the
      loss of your deposit.
    </p>
  </>
);

export function NetworkPane() {
  return (
    <>
      <h1 className='flex items-center text-lg font-bold'>
        <span className='mx-2'>Deposite Network</span>
        <WarningLine />
      </h1>

      <div className='network-selector'>
        <div className='active'>BTC</div>
        <div>BEP2</div>
        <div>BEP20 (BSC)</div>
        <div>RRC20</div>
      </div>

      <div className='box-center mt-6'>
        <TimeIcon />
        <span className='mx-2 text-a-white-200/80'>Average Arrival Time:</span>
        <span>3 Minutes</span>
      </div>

      <p className='mt-10 text-center text-lg font-semibold'>BTC Address</p>
      <img src={QrCode} className='mx-auto mt-6' />

      <div className='mx-10 mt-16'>
        <BTCAlert />
      </div>
    </>
  );
}
