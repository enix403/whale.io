import { Button } from "components/Button";
import { ButtonSwitch } from "components/ButtonSwitch";
import { QuestionMarkHeader } from "components/QuestionMarkHeader";
import { SecurityPinDots } from "components/SecurityPinDots";
import { Contents, Sidebar } from "components/Sidebar";
import React from "react";

import QrCodeScan from "./QR-Code-Scan.png";
import USA from "./USA.png";
import RightArrow from "/btn-right-arrow.svg";

import "./Settings.css";

interface ContactInputProps {
  label: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  leftElement?: React.ReactNode;
}
function ContactInput(props: ContactInputProps) {
  const { label, inputProps } = props;
  return (
    <div className='mb-6 items-center text-white/80 lg:flex'>
      <div className='mb-2 px-4 lg:mb-0 lg:flex-[1]'>
        <span className='text-sm font-semibold'>{label}:</span>
      </div>
      <div className='px-2 lg:flex-[3.5]'>
        <div className='relative h-12 rounded-4xl bg-a-dark-300'>
          {props.leftElement}
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
          <ContactInput
            inputProps={{ defaultValue: "USA" }}
            leftElement={
              <>
                <img
                  className='absolute left-5 top-[50%] -translate-y-1/2'
                  src={USA}
                />
              </>
            }
            label='National'
          />
          <ContactInput
            inputProps={{ defaultValue: "Jds****@gmail.com" }}
            label='Email'
          />
        </div>
      </div>
    </>
  );
}

const Switch = () => (
  <label className='relative top-1 inline-flex cursor-pointer items-center'>
    <input type='checkbox' value='' className='peer sr-only' />
    <div className="peer h-6 w-11 rounded-full bg-red-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-red-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-200 dark:border-red-600 dark:bg-red-700 dark:peer-focus:ring-gray-200"></div>
  </label>
);

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

          <div className='flex justify-between'>
            <div className='mt-8'>
              <p className='font-semibold text-a-white-200/80'>2FA Auth:</p>
              <p className='mb-3'>
                <span className='mr-2'>Email 2FA:</span>
                <Switch />
              </p>
              <p className='mb-3'>
                <span className='mr-2'>Google 2FA:</span>
                <Switch />
              </p>
            </div>
            <img className='mr-10' src={QrCodeScan} />
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

export function Footer() {
  return (
    <div className='mt-16 flex-wrap items-center pr-2 lg:flex lg:px-20'>
      <span className='mr-4 text-sm font-semibold'>Security Pin:</span>
      <SecurityPinDots dotsCount={4} className='flex-shrink-0' />
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
    <div className='group/layout'>
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
    </div>
  );
}
