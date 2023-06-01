import { ButtonSwitch } from "components/ButtonSwitch";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { Contents, Sidebar } from "components/Sidebar";
import { BTCAddressInput, CoinViewBox, NetworkPane, Tips } from "./common.tsx";


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


function CoinSelect() {
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

function DepositPane() {
  return (
    <>
      <div className='mb-10'>
        <QuestionMarkHeader label='Deposit' />
      </div>

      <div className='inline-block rounded-2xl border border-a-white-100/70'>
        <ButtonSwitch active='left' left='Crypto' right='Fiat' />
      </div>

      <div className='mt-10 pr-10'>
        <p className='my-2 ml-6 text-sm text-a-white-200'>Coin:</p>
        <CoinSelect />
      </div>

      <p className='mx-8 my-6 font-semibold text-white'>
        Total Balance: 0.0121285425 BTC
      </p>

      <BTCAddressInput />

      <p className='mx-8 mt-16 font-semibold text-white'>Tips</p>
      <Tips />
    </>
  );
}

export function Deposit() {
  return (
    <>
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
    </>
  );
}
