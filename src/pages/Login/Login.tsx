import { Button } from "components/Button";
import { ButtonSwitch } from "components/ButtonSwitch";
import { InputGroup } from "components/InputGroup";
import { LanguageSelect } from 'components/LanguageSelect';
import {
  AtRate,
  Check,
  OrgApple,
  OrgFacebook,
  OrgGoogle,
  Password,
  RefCode
} from "./icons";

import VecBlocks from "assets/vector-blocks.png";
import { useNavigate } from "react-router-dom";
import QrCpde from "./Qrcode.svg";
import Lock from "./lock.svg";
import RightArrow from "/btn-right-arrow.svg";
import whaleLogo from "/whale-logo.png";

function Navbar() {
  return (
    <div className='flex h-24 items-center bg-a-dark-300 px-28'>
      <img className='relative bottom-2' src={whaleLogo} />
      <img className='ml-10' src={VecBlocks} />
      <div className='ml-8'>
        <div className='mr-6 inline'>Buy Crypto</div>
        <div className='mr-6 inline'>Market</div>
        <div className='mr-12 inline relative'>
          NFT
          <span className='box-center absolute left-6 -top-4 h-5 w-10  self-center rounded-md bg-red-500 text-center text-sm'>
            New
          </span>
        </div>
        <div className='mr-6 inline'>Promotion</div>
        <div className='mr-6 inline'>About</div>
        <div className='mr-6 inline'>Blog</div>
      </div>
      <div className='flex-1'></div>
      <LanguageSelect />
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
  const navigate = useNavigate();


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

        <InputGroup
          containerClass='mb-6 bg-a-dark-200'
          rightElement={
            <>
              <p className='box-center mr-5 self-stretch'>{Check}</p>
            </>
          }
          leftIcon={AtRate}
          placeholder='Email Address'
        />
        <InputGroup
          containerClass='mb-6 bg-a-dark-200'
          leftIcon={Password}
          placeholder='Password'
          inputProps={{ type: "password" }}
        />
        <InputGroup
          containerClass='mb-6 bg-a-dark-200'
          leftIcon={RefCode}
          placeholder='Referral Code (Optional)'
        />

        <Button
          label='Continue'
          rightElement={
            <div>
              <img src={RightArrow} />
            </div>
          }
          onClick={() => {
            navigate("/dashboard");
          }}
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

export function Login() {
  return (
    <>
      <Navbar />
      <LoginBox />
    </>
  );
}
