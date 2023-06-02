import { ButtonSwitch } from "components/ButtonSwitch";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { Contents, Sidebar } from "components/Sidebar";
import { BTCAddressInput, CoinSelect, NetworkPane, TipsDeposit } from "./common.tsx";


function DepositPane() {
  return (
    <>
      <div className='mb-10'>
        <QuestionMarkHeader label='Deposit' />
      </div>

      <div className='inline-block rounded-2xl border border-a-white-100/70'>
        <ButtonSwitch active='left' left='Crypto' right='Fiat' />
      </div>

      <div className='mt-10 pr-6'>
        <p className='my-2 ml-6 text-sm text-a-white-200'>Coin:</p>
        <CoinSelect />
      </div>

      <p className='mx-8 my-6 font-semibold text-white'>
        Total Balance: 0.0121285425 BTC
      </p>

      <BTCAddressInput />

      <p className='mx-8 mt-16 font-semibold text-white'>Tips</p>
      <TipsDeposit />
    </>
  );
}

export function Deposit() {
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
