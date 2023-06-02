import { Button } from "components/Button.tsx";
import { Exchange, ExchangeCircle, ExchangeSide } from "components/Exchange";
import { InputGroup } from "components/InputGroup.tsx";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { Contents, Sidebar } from "components/Sidebar";
import { BTCAlert, CoinSelect, TipsDeposit } from "./common.tsx";

import CoinEthereum from "assets/CoinEthereum.png";
import CoinUSDT from "assets/CoinUSDT.svg";
import SwapIconV from "assets/SwapIconV.svg";
import CalculatorIcon from "./CalculatorIcon.svg";
import Dollar from "./Dollar.svg";
import RightArrow from "/btn-right-arrow.svg";

function DepositPane() {
  return (
    <>
      <div className='mb-8'>
        <QuestionMarkHeader label='Deposit' />
      </div>

      <span className='font-semibold text-a-white-200'>Preferred Payment</span>
      <div className='mt-8 pr-6'>
        <p className='mb-4 ml-6 text-sm text-a-white-200'>Coin:</p>
        <CoinSelect />
      </div>

      <p className='ml-4 mt-1.5 text-white'>
        <span className='mx-2 text-sm text-a-white-200/80'>Asset price:</span>
        $24,000/BTC
      </p>

      <div className='mx-6 mt-8 flex justify-between text-sm'>
        <p className='text-a-white-200/80'>Input Amount:</p>
        <p className='text-white'>
          <span className='mr-1 text-a-white-200/80'>Min/Max:</span>
          $18/$500k
        </p>
      </div>

      <InputGroup
        containerClass='mt-2 mb-5 bg-a-dark-300 font-semibold'
        placeholder='Amount'
        inputProps={{ defaultValue: "18" }}
        leftIcon={<img className='ml-2' src={Dollar} />}
        rightElement={
          <div className='flex py-2 text-2xl [&_*]:font-extralight'>
            <Button className='mx-2 w-20 rounded-4xl' label='+' />
            <Button className='mx-2 w-20 rounded-4xl' label='-' />
          </div>
        }
      />

      <div className='mt-6 flex-wrap justify-between pr-2 lg:ml-8 lg:flex'>
        <div>
          <p>
            <span className='mx-2 text-a-white-200/80'>Daily Returns:</span>
            <span>$1.8</span>
          </p>
          <p className='mt-4'>
            <span className='mx-2 text-a-white-200/80'>Total Returns:</span>
            <span>$144</span>
          </p>
        </div>

        <div className='mt-5 w-52 flex-shrink-0 lg:mt-0'>
          <Button
            label='Proced Deposit'
            className='py-3'
            rightElement={
              <div>
                <img src={RightArrow} />
              </div>
            }
          />
        </div>
      </div>

      <p className='mx-8 mt-16 font-semibold text-white'>Tips</p>
      <TipsDeposit />
    </>
  );
}

function PricePane() {
  return (
    <>
      <h1 className='mb-10 flex items-center justify-between pr-10 text-lg font-bold'>
        <span className='ml-2'>Profit Calculator</span>
        <img src={CalculatorIcon} />
      </h1>

      <Exchange
        from={
          <ExchangeSide sideName='I invest' icon={CoinEthereum} value={"$1000"} />
        }
        to={<ExchangeSide sideName='I Get' icon={CoinUSDT} value={"$1444"} />}
        circle={
          <ExchangeCircle>
            <div className='box-center h-full w-full rounded-full bg-a-dark-300'>
              <img src={SwapIconV} />
            </div>
          </ExchangeCircle>
        }
      />

      <div className='mx-10 mt-16 xl:mt-72'>
        <BTCAlert />
      </div>
    </>
  );
}

export function Deposit1() {
  return (
    <div className="group/layout">
      <Sidebar />
      <Contents>
        <div className='p-8 xl:flex'>
          <div className='mx-4 flex-[2] p-6'>
            <DepositPane />
          </div>
          <div className='mx-4 mt-8 flex-[1] py-6 xl:mt-0'>
            <PricePane />
          </div>
        </div>
      </Contents>
    </div>
  );
}
