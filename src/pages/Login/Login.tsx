import QrCpde from "./Qrcode.svg";
import Lock from "./lock.svg";
import vecBlocks from "./vector-blocks.png";
import RightArrow from "/btn-right-arrow.svg";
import whaleLogo from "/whale-logo.png";

import { Button } from "components/Button";
import { ButtonSwitch } from "components/ButtonSwitch";
import {
  AtRate,
  Check,
  OrgApple,
  OrgFacebook,
  OrgGoogle,
  Password,
  RefCode
} from "./icons";

function Navbar() {
  return (
    <div className='flex h-24 items-center bg-a-dark-300 px-28'>
      <img className='relative bottom-2' src={whaleLogo} />
      <img className='ml-10' src={vecBlocks} />
      <div className='ml-8'>
        <div className='mr-6 inline'>Buy Crypto</div>
        <div className='mr-6 inline'>Market</div>
        <div className='mr-6 inline'>NFT</div>
        <div className='mr-6 inline'>Promotion</div>
        <div className='mr-6 inline'>About</div>
        <div className='mr-6 inline'>Blog</div>
      </div>
      <div className='flex-1'></div>
      <div className='rounded-xl bg-a-dark-200 px-4 py-3'>English</div>
    </div>
  );
}

interface InputProps {
  placeholder: string;
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}
function Input(props: InputProps) {
  return (
    <div className='mb-6 flex h-16 rounded-2.5xl bg-a-dark-200'>
      <p className='box-center mx-4 self-stretch'>{props.leftIcon}</p>
      <div className='my-6 mr-5 border border-a-white-100/50'></div>
      <input
        className='h-full flex-1 bg-transparent'
        placeholder={props.placeholder}
        size={1}
        {...props.inputProps}
      />
      {props.rightIcon && (
        <>
          <p className='box-center mr-5 self-stretch'>{props.rightIcon}</p>
        </>
      )}
    </div>
  );
}

function ProviderLogin(props: React.PropsWithChildren) {
  return (
    <div className='mx-3 cursor-pointer rounded-2.5xl bg-a-dark-200 hover:bg-a-white-200/10'>
      {props.children}
    </div>
  );
}

function LoginPane() {
  return (
    <div className='h-full flex-[1] rounded-app bg-a-dark-300 px-16 py-12'>
      <h1 className='text-3xl font-bold'>Welcome Back</h1>
      <p className='mb-6 mt-2 w-60 text-a-white-200'>
        Please Enter your email and password
      </p>

      <div className='mx-2'>
        <div className='mb-10 inline-block rounded-2.5xl bg-a-dark-200 px-2 py-1'>
          <ButtonSwitch active='left' left='Login' right='SignUp' />
        </div>

        <Input
          rightIcon={Check}
          leftIcon={AtRate}
          placeholder='Email Address'
        />
        <Input
          leftIcon={Password}
          placeholder='Password'
          inputProps={{ type: "password" }}
        />
        <Input leftIcon={RefCode} placeholder='Referral Code (Optional)' />

        <Button
          label='Continue'
          rightElement={
            <div>
              <img src={RightArrow} />
            </div>
          }
        />
      </div>

      <div className='mt-10 flex items-center px-12'>
        <div className='flex-1 border border-a-white-100/20' />
        <span className='mx-2 whitespace-nowrap font-bold'>
          Or Continue with
        </span>
        <div className='flex-1 border border-a-white-100/20' />
      </div>

      <div className='mt-4 flex justify-center'>
        <ProviderLogin children={OrgFacebook} />
        <ProviderLogin children={OrgApple} />
        <ProviderLogin children={OrgGoogle} />
      </div>
    </div>
  );
}

function SecondPane() {
  return (
    <div className='mt-12 flex flex-[1.5] flex-col items-center justify-center lg:mt-0'>
      <img src={QrCpde} />
      <p className='mt-5 text-2xl font-bold'>Login With QR code</p>
      <p className='mt-1 text-sm font-medium'>
        Scan QR code with <span className='font-bold text-a-green'>app</span>
      </p>

      <div className='mt-8 flex items-center rounded-2.5xl bg-a-dark-300'>
        <div className='m-1 mr-3  rounded-2.5xl bg-a-green px-3 py-2'>
          <img src={Lock} />
        </div>
        <p className='mr-10 text-sm'>
          <span className='text-a-green'>https:</span>//www.cryptowhale.com
        </p>
      </div>
      <p className='mt-16 w-72 text-center text-a-white-200'>
        Whale.io, Trade anything anywhere with Whale.io!
      </p>
    </div>
  );
}

function LoginBox() {
  return (
    <div className='mx-auto mb-20 mt-20 w-4/5 items-stretch rounded-app bg-a-dark-900 px-4 py-6 lg:flex lg:h-[50rem] lg:w-[66rem]'>
      <LoginPane />
      <SecondPane />
    </div>
  );
}

export function LoginPage() {
  return (
    <>
      <Navbar />
      <LoginBox />
    </>
  );
}
