import React from "react";

import "./exchange.css";


export interface ExchangeSideProps {
  sideName: string;
  meta?: string|number;
  icon?: string;
  label?: React.ReactNode;
  value: React.ReactNode;
}
export const ExchangeSide = (props: ExchangeSideProps) => (
  <div className='rounded-2.5xl bg-a-dark-300 px-6 py-5'>
    <p className='flex justify-between text-sm'>
      <span className='text-a-white-200/80'>{props.sideName}</span>
      <span className='text-white'>{props.meta}</span>
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
