import ChatIcon from "/Chat-Icon-nav.svg";
import ExchangeIcon from "/Exchange-Icon-nav.svg";
import MarketIcon from "/Market-Icon-nav.svg";
import NewsIcon from "/News-Icon-nav.svg";
import PriceIcon from "/Price-Icon-nav.svg";
import SettingsIcon from "/Settings-Icon-nav.svg";
import TransactionIcon from "/Transaction-Icon-nav.svg";
import WalletIcon from "/Wallet-Icon-nav.svg";

import { Button } from "./Button";
import Avatar from "/Avatar-Image.png";
import VerifiedCheck from "/verified-check.svg";
import WhaleLogo from "/whale-logo.png";

interface NavLinkProps {
  name: string;
  iconUrl: string;
}
function NavLink(props: NavLinkProps) {
  return (
    <div className='group mt-6 flex cursor-pointer first:mt-0'>
      <img src={props.iconUrl} className='mr-4 h-6 w-6' />
      <span className='text-a-white-300 transition-all group-hover:text-white'>
        {props.name}
      </span>
    </div>
  );
}

export function Navbar() {
  return (
    <div className='fixed left-0 top-0 flex min-h-full w-64 flex-col bg-a-dark-300'>

      <div className="relative bottom-2 box-center py-8 border-b-2 border-a-white-100/10">
        <img src={WhaleLogo} />
      </div>

      <div className='flex flex-col items-center px-5 my-5'>
        <img src={Avatar} />
        <p className="font-semibold mt-5">Erfan Amade</p>
        <p className="text-a-white-200 text-sm mt-2">
          verified
          <img className="inline ml-0.5" src={VerifiedCheck} />
        </p>
      </div>

      <div className='px-5'>
        {/* <button className='flex w-full rounded-2.5xl bg-a-green p-4 shadow-white hover:bg-a-green/80'>
          <p className='flex-1 self-center font-bold'>Dashboard</p>
        </button> */}
        <Button label="Dashboard" />
      </div>

      <div className='mt-10 px-9'>
        <NavLink iconUrl={ExchangeIcon} name='Exchange' />
        <NavLink iconUrl={PriceIcon} name='Live Prices' />
        <NavLink iconUrl={WalletIcon} name='Wallet' />
        <NavLink iconUrl={MarketIcon} name='NFT Market' />
        <NavLink iconUrl={TransactionIcon} name='Transaction' />
        <NavLink iconUrl={SettingsIcon} name='Settings' />
        <NavLink iconUrl={NewsIcon} name='News' />
      </div>

      <div className='flex-1'></div>
      <div className='px-9 mb-8'>
        <p className='text-sm text-a-white-200'>Insights</p>
        <NavLink iconUrl={ChatIcon} name='Inbox' />
      </div>
    </div>
  );
}
