import { Button } from "components/Button.tsx";
import { InputGroup } from "components/InputGroup";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { SecurityPinDots } from "components/SecurityPinDots/index.tsx";
import { Contents, Sidebar } from "components/Sidebar";
import { CoinSelect } from "./common.tsx";

import HandShake from "assets/HandShake.svg";
import Dream from "./Dream.png";
import HandIcon from "./HandIcon.svg";
import LinkIcon from "./LinkIcon.svg";
import RightArrow from "/btn-right-arrow.svg";

const ReloadIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_1_1304)'>
      <path
        d='M18.537 19.567C16.7224 21.1393 14.401 22.0033 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 14.136 21.33 16.116 20.19 17.74L17 12H20C19.9998 10.1562 19.3628 8.36906 18.1967 6.94089C17.0305 5.51272 15.4069 4.53119 13.6003 4.16236C11.7938 3.79352 9.91533 4.06002 8.28268 4.91677C6.65002 5.77351 5.36342 7.16791 4.64052 8.86408C3.91762 10.5603 3.80281 12.4541 4.31549 14.2251C4.82818 15.9962 5.93689 17.5358 7.45408 18.5836C8.97127 19.6313 10.8038 20.1228 12.6416 19.9749C14.4795 19.827 16.2099 19.0488 17.54 17.772L18.537 19.567Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_1304'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

interface InputGroupActionProps {
  label: string;
}
const InputGroupAction = ({ label }: InputGroupActionProps) => (
  <span className='mr-4 cursor-pointer self-center font-medium text-a-white-200/60 underline transition-colors hover:text-a-white-300'>
    {label}
  </span>
);

export const TipsWithdraw = () => (
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
    </ul>
  </div>
);

function DepositPane() {
  return (
    <>
      <div className='mb-10'>
        <QuestionMarkHeader label='Withdraw' />
      </div>

      <div className='mt-10 pr-10'>
        <p className='my-2 ml-6 text-sm text-a-white-200'>Coin:</p>
        <CoinSelect />
      </div>

      <p className='mx-8 mb-12 mt-8 flex items-center font-semibold text-white'>
        <span>Total Balance:</span>
        <span className='ml-4 mr-2'>0.0121285425 BTC</span>
        <ReloadIcon />
      </p>
      <InputGroup
        containerClass='mb-5 bg-a-dark-300'
        placeholder='Withdraw Address'
        leftIcon={<img src={LinkIcon} />}
        rightElement={<InputGroupAction label='Paste' />}
      />
      <InputGroup
        containerClass='mb-1 bg-a-dark-300'
        placeholder='Amount'
        leftIcon={<img src={HandIcon} />}
        rightElement={<InputGroupAction label='Select All' />}
      />

      <p className='ml-4 text-white'>
        <span className='mx-2 text-a-white-200/80'>Transaction Fee:</span>
        0.0005 BTC
      </p>

      <div className='ml-8 mt-6 flex-wrap items-center pr-2 lg:flex'>
        <span className='mr-4 text-sm font-semibold'>Security Pin:</span>
        <SecurityPinDots dotsCount={4} className='flex-shrink-0' />
        <div className='flex-grow' />
        <div className='mt-5 w-60 flex-shrink-0 lg:mt-0'>
          <Button
            label='Proced Withdrawal'
            className='py-3'
            rightElement={
              <div>
                <img src={RightArrow} />
              </div>
            }
          />
        </div>
      </div>

      <p className='mx-8 mt-14 font-semibold text-white'>Tips</p>
      <TipsWithdraw />
    </>
  );
}

function Banner() {
  return (
    <div className='rounded-4xl border border-[#648D2D] p-4'>
      <img className='mx-2 my-3' src={HandShake} />
      <p className='mb-14 text-center text-lg font-bold uppercase text-white'>
        Your Dreams are Valid
      </p>
      <img className='mx-auto' src={Dream} />

      <p className='mx-10 my-16 text-center text-xl'>
        At ABCDEF, we exist to inspire you to dream bigger. We believe that
        within each and every one of us lies incredible potential and untapped
        possibilities. We're here to guide you on a transformative journey,
        empowering you to reach new heights and achieve your wildest dreams."
      </p>
    </div>
  );
}

export function WithdrawPage() {
  return (
    <>
      <Sidebar />
      <Contents>
        <div className='p-8 pb-0 xl:flex'>
          <div className='mx-4 flex-[2.5] p-6 pb-0'>
            <DepositPane />
          </div>
          <div className='mx-4 mt-8 flex flex-[1] flex-col-reverse xl:mt-0'>
            <Banner />
          </div>
        </div>
      </Contents>
    </>
  );
}
