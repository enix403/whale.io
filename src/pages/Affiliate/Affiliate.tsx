import { Contents, Sidebar } from "components/Sidebar";

import CopyIcon from "assets/CopyIcon.svg";
import HandShake from "assets/HandShake.svg";
import { Button } from "components/Button";
import "./Affiliate.css";
import Sectionbanner from "./Sectionbanner.png";

import { QuestionMarkHeader } from "components/QuestionMarkHeader";

function AffiliateStats() {
  return (
    <>
      <p className='ml-5 font-medium text-a-dgreen/50'>Deposite Bonus</p>
      <div className='box-center rounded-3xl border border-a-white-100/60 py-2 font-semibold text-a-white-300'>
        $100
      </div>
      <p className='ml-5 mt-5 font-medium text-a-green/80 '>
        Affiliate Members
      </p>

      <p className='ml-5 mt-2 font-medium text-a-dgreen/50'>
        Active/<span className='text-a-white-200'>All</span>
      </p>

      <div className='box-center mt-1 rounded-3xl border border-a-white-100/60 py-2 font-semibold text-a-white-300'>
        <span className='text-a-dgreen/50'>100</span>/1k
      </div>

      <p className='ml-5 mt-2 font-medium text-a-green/80 '>
        Affiliate Earnings
      </p>

      <p className='ml-5 mt-5 font-medium text-a-dgreen/50'>
        Individual Ref.Earned
      </p>

      <div className='box-center mt-1 rounded-3xl border border-a-white-100/60 py-2 font-semibold text-a-white-300'>
        $100k
      </div>

      <p className='ml-5 mt-1 font-medium text-a-dgreen/50'>
        Community Ref.Earned
      </p>

      <div className='box-center mt-8 rounded-3xl border border-a-white-100/60 py-2 font-semibold text-a-white-300'>
        $100k
      </div>
    </>
  );
}

interface LinkInputProps {
  label: string;
  defaultValue?: string | number;
}
function LinkInput(props: LinkInputProps) {
  return (
    <>
      <p className='mb-1 ml-5 text-a-white-200/70'>{props.label}</p>

      <div className='flex h-10 w-full rounded-4xl bg-a-dark-300'>
        <input
          className='mx-5 flex-1 bg-transparent font-semibold'
          defaultValue={props.defaultValue}
          size={1}
        />
        <button className='box-center mx-1 my-1 rounded-2.5xl bg-a-green px-5 hover:bg-a-green/80'>
          <p className='self-center font-bold'>Copy</p>
          <img src={CopyIcon} />
        </button>
      </div>
    </>
  );
}

function Community() {
  return (
    <div className='px-8'>
      <div>
        <LinkInput
          label='Referral Link'
          defaultValue='https://you.com/John%doe'
        />
      </div>
      <div className='mt-10'>
        <LinkInput label='Community Link' />
      </div>

      <div className='mt-6 w-48'>
        <Button label='Create Community' className='sm:py-3' />
      </div>

      <p className='mb-5 ml-5 mt-10 font-medium text-a-green/80'>
        Affiliate Mechanism
      </p>
      <ul className='circle-bullet ml-3 text-a-dgreen/50 [&>li]:mb-1'>
        <li>Individual: 5-3-1%</li>
        <li>Community: 3% Cashback</li>
        <li>2.5%/community pool</li>
        <li>0.5%/Leaders</li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div className='xl:flex'>
      <div className='flex-1'>
        <AffiliateStats />
      </div>
      <div className='mt-10 flex-[2.5] xl:mt-0'>
        <Community />
      </div>
    </div>
  );
}

function DashboardAlert() {
  return (
    <div className='mt-16 w-full rounded-4xl bg-a-dark-300 px-12 py-10'>
      <ul className='circle-bullet text-a-white-200/80 [&>li]:mb-6'>
        <li>
          If you have deposited please pay attention to the text messagesm site
          letters and emails we send to you.
        </li>
        <li>Coins will be deposited after 1 network confirmations.</li>
        <li>
          Until 2 confrimations are mafe.an equivalent amount of your assets
          will be temporarily unavailable for witdrawals.
        </li>
        <li>
          You could check the blockchain records and deposit status at{" "}
          <a href='#' className='text-a-green'>
            Deposit Records.
          </a>
        </li>
      </ul>
    </div>
  );
}

function Banner() {
  return (
    <div className='rounded-4xl border border-[#648D2D] p-8 pb-24'>
      <img src={HandShake} className='mb-8' />
      <img src={Sectionbanner} />
    </div>
  );
}

export function Affiliate() {
  return (
    <div className="group/layout">
      <Sidebar />
      <Contents>
        <div className='px-1 py-20'>
          <div className='xl:flex'>
            <div className='flex-1 xl:px-12'>
              <div className='mb-10'>
                <QuestionMarkHeader label='Affiliate and Bonus Dashboard' />
              </div>
              <Dashboard />
              <DashboardAlert />
            </div>
            <div className='h-full w-72 mr-6 pt-20'>
              <Banner />
            </div>
          </div>
        </div>
      </Contents>
    </div>
  );
}
