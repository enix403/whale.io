import React from "react";

import "./exchange.css";

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

export interface ExchangeSideProps {
  sideName: string;
  icon?: string;
  label?: React.ReactNode;
  value: React.ReactNode;
}
export const ExchangeSide = (props: ExchangeSideProps) => (
  <div className='rounded-2.5xl bg-a-dark-300 px-6 py-5'>
    <p className='flex justify-between text-sm'>
      <span className='text-a-white-200/80'>{props.sideName}</span>
    </p>

    <div className='mt-3 flex items-center justify-between'>
      <div className='flex cursor-pointer items-center'>
        {props.icon && <img src={props.icon} />}
        <span className='box-center ml-2 font-semibold'>{props.label}</span>
      </div>
      <p className='text-xl font-bold'>{props.value}</p>
    </div>
  </div>
);

/*
  <ExchangeSide
    sideName='I have'
    icon={CoinBTC}
    label={
      <>
        BTC
        <SelectDownArrow />
      </>
    }
    value={0.01}
  />
*/

export const ExchangeCircle = ({ children }: React.PropsWithChildren) => (
  <div className='xchg-circle aspect-square w-20 rounded-full bg-a-dark-100 p-4'>
    {children}
  </div>
);

export interface ExchangeProps {
  from: React.ReactNode;
  to: React.ReactNode;
  circle?: React.ReactNode;
}
export const Exchange = (props: ExchangeProps) => {
  return (
    <div className='relative'>
      {props.from}
      <div className='h-5 bg-transparent'>&nbsp;</div>
      {props.to}
      {props.circle}
    </div>
  );
};
