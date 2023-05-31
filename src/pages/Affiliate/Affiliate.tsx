import { Navbar } from "components/Navbar";

import "./Affiliate.css";
import HandShake from "./HandShake.svg";
import Sectionbanner from "./Sectionbanner.png";

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

function Dashboard() {
  return (
    <div className='lg:flex'>
      <div className='flex-1'>
        <AffiliateStats />
      </div>
      <div className='flex-[3]'></div>
    </div>
  );
}

function DashboardAlert() {
  return (
    <div className='mt-16 w-full rounded-4xl bg-a-dark-300 px-12 py-10'>
      <ul className='circle-bullet text-a-white-200/80 [&>li]:mb-6 [&>li]:pl-2 last:[&>li]:mb-0'>
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
          You could check the blockchain records and deposit status at Deposit
          Records.
        </li>
      </ul>
    </div>
  );
}

function Banner() {
  return (
    <div className="border p-8 pb-24 border-[#648D2D] rounded-4xl">
      <img src={HandShake} className="mb-8" />
      <img src={Sectionbanner} />
    </div>
  );
}

export function AffiliatePage() {
  return (
    <>
      <Navbar />
      <div className='w-full pl-64'>
        <div className='px-12 py-20'>
          <div className='lg:flex'>
            <div className='flex-1 lg:px-12'>
              <p className='mb-10 font-semibold'>
                Affiliate and Bonus Dashboard
              </p>
              <Dashboard />
              <DashboardAlert />
            </div>
            <div className='w-96 pt-20 h-full'>
              <Banner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
