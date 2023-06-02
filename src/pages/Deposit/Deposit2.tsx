import { Button } from "components/Button.tsx";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { Contents, Sidebar } from "components/Sidebar";
import {
  BTCAddressInput,
  CoinViewBox,
  CopyButton,
  NetworkPane,
  TipsDeposit
} from "./common.tsx";

const RefreshIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 4V10H7'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23 20V14H17'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.49 8.99995C19.9828 7.56674 19.1209 6.28536 17.9845 5.27537C16.8482 4.26539 15.4745 3.55972 13.9917 3.22421C12.5089 2.8887 10.9652 2.93429 9.50481 3.35673C8.04437 3.77916 6.71475 4.56467 5.64 5.63995L1 9.99995M23 14L18.36 18.36C17.2853 19.4352 15.9556 20.2207 14.4952 20.6432C13.0348 21.0656 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7345 6.01547 18.7245C4.87913 17.7145 4.01717 16.4332 3.51 15'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

function CoinTransfer() {
  return (
    <CoinViewBox>
      <p className='box-center mr-2 ml-0 flex-col lg:ml-2 lg:flex-row'>
        <span className='text-a-white-200/80'>Transfer:</span>
        0.02347 BTC
      </p>
      <CopyButton />
      <div className='box-center absolute right-2 self-center rounded-2xl bg-a-green/20 px-10 py-2.5 transition-colors'>
        <RefreshIcon />
      </div>
    </CoinViewBox>
  );
}

function DepositPane() {
  return (
    <>
      <div className='mb-8'>
        <QuestionMarkHeader label='Deposit' />
      </div>

      <span className='font-semibold text-a-white-200'>Preferred Payment</span>

      <div className='mb-16 mt-10 pr-10'>
        <p className='my-2 ml-6 text-sm text-a-white-200'>Coin:</p>
        <CoinTransfer />
      </div>

      <BTCAddressInput />
      <div className='mt-8 justify-between lg:flex lg:px-8'>
        <Button label='I have Paid' className='my-3 lg:my-0 lg:w-40 lg:py-1' />
        <Button label='Back to Dashboard' className='lg:w-40 lg:py-1' minimal />
      </div>

      <p className='mx-8 mt-16 font-semibold text-white'>Tips</p>
      <TipsDeposit />
    </>
  );
}

export function Deposit2() {
  return (
    <div className="group/layout">
      <Sidebar />
      <Contents>
        <div className='p-8 xl:flex'>
          <div className='mx-4 flex-[2] p-6'>
            <DepositPane />
          </div>
          <div className='mx-4 mt-8 flex-[1] py-6 xl:mt-0'>
            <NetworkPane />
          </div>
        </div>
      </Contents>
    </div>
  );
}
