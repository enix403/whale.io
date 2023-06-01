import { Button } from "components/Button";
import { ButtonSwitch } from "components/ButtonSwitch";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { Contents, Sidebar } from "components/Sidebar";
import React from "react";
import "./Settings.css";
import RightArrow from "/btn-right-arrow.svg";

interface ContactInputProps {
  label: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}
function ContactInput(props: ContactInputProps) {
  const { label, inputProps } = props;
  return (
    <div className='mb-6 items-center text-white/80 lg:flex'>
      <div className='mb-2 px-4 lg:mb-0 lg:flex-[1]'>
        <span className='text-sm font-semibold'>{label}:</span>
      </div>
      <div className='px-2 lg:flex-[3.5]'>
        <div className='h-12 rounded-4xl bg-a-dark-300'>
          <input
            className='mx-3 h-full w-full bg-transparent text-center'
            size={1}
            {...inputProps}
          />
        </div>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <>
      <p className='mb-12 text-center font-semibold text-a-green'>
        Contact Details
      </p>

      <div className='lg:flex'>
        <div className='lg:w-1/2'>
          <ContactInput
            inputProps={{ defaultValue: "Smith" }}
            label='Last Name'
          />
          <ContactInput
            inputProps={{ defaultValue: "Doe" }}
            label='First Name'
          />
          <ContactInput
            inputProps={{ defaultValue: "JOHN" }}
            label='Other Name'
          />
        </div>
        <div className='flex-1 lg:ml-8'>
          <ContactInput
            inputProps={{ defaultValue: "Jdoe12" }}
            label='Username'
          />
          <ContactInput inputProps={{ defaultValue: "USA" }} label='National' />
          <ContactInput
            inputProps={{ defaultValue: "Jds****@gmail.com" }}
            label='Email'
          />
        </div>
      </div>
    </>
  );
}

function Security() {
  return (
    <>
      <p className='mb-12 text-center font-semibold text-a-green'>Security</p>

      <div className='lg:flex'>
        <div className='lg:w-1/2'>
          <ContactInput
            label='Current Password'
            inputProps={{ type: "password", defaultValue: "old123" }}
          />
          <ContactInput
            label='New Password'
            inputProps={{ type: "password", defaultValue: "1234567" }}
          />
          <ContactInput
            label='Confirm Password'
            inputProps={{ type: "password", defaultValue: "1234567" }}
          />
        </div>
        <div className='flex-1 lg:ml-8'>
          <span className='mr-28 text-sm font-semibold'>Time Zone:</span>
          <div className='inline-block rounded-2xl border border-a-white-100/70'>
            <ButtonSwitch active='left' left='UTC' right='Local' />
          </div>
        </div>
      </div>
    </>
  );
}

function Wallet() {
  return (
    <>
      <p className='mb-12 mt-6 text-center font-semibold text-a-green'>
        Wallet
      </p>

      <div>
        <ContactInput
          label='Bitcoin/BTC'
          inputProps={{ placeholder: "Bitcoin Withdrawal address" }}
        />
        <ContactInput
          label='BEP20/Address'
          inputProps={{ placeholder: "Bep20 BNB,USDT,USDC Withdrawal address" }}
        />
        <ContactInput
          label='TRC20/USDT'
          inputProps={{ placeholder: "TRC20 USDT,USDC Withdrawal address" }}
        />
      </div>
    </>
  );
}

const PinCodeDigit = () => (
  <div className='pin-code mx-1'>
    <input
      className='h-full w-full bg-transparent text-center text-lg font-semibold'
      size={1}
    />
  </div>
);
export function Footer() {
  return (
    <div className='mt-16 flex-wrap items-center pr-2 lg:flex lg:px-20'>
      <span className='mr-4 text-sm font-semibold'>Security Pin:</span>
      <div className='inline-flex flex-shrink-0'>
        <PinCodeDigit />
        <PinCodeDigit />
        <PinCodeDigit />
        <PinCodeDigit />
      </div>
      <div className='flex-grow' />
      <div className='mt-5 w-52 flex-shrink-0 lg:mt-0'>
        <Button
          label='Save Changes'
          className='py-3'
          rightElement={
            <div>
              <img src={RightArrow} />
            </div>
          }
        />
      </div>
    </div>
  );
}

export function Settings() {
  return (
    <>
      <Sidebar />
      <Contents>
        <div className='p-8'>
          <div className='ml-6'>
            <QuestionMarkHeader label='Account Settings' />
          </div>

          <ContactDetails />
          <Security />
          <Wallet />

          <Footer />
        </div>
      </Contents>
    </>
  );
}
