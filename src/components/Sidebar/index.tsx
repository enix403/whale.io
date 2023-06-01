import ChatIcon from "./Chat-Icon-nav.svg";
import ExchangeIcon from "./Exchange-Icon-nav.svg";
import MarketIcon from "./Market-Icon-nav.svg";
import NewsIcon from "./News-Icon-nav.svg";
import PriceIcon from "./Price-Icon-nav.svg";
import SettingsIcon from "./Settings-Icon-nav.svg";
import TransactionIcon from "./Transaction-Icon-nav.svg";
import WalletIcon from "./Wallet-Icon-nav.svg";

import classNames from "classnames";
import { Button } from "components/Button";
import Avatar from "./Avatar-Image.png";
import VerifiedCheck from "./verified-check.svg";
import WhaleLogo from "/whale-logo.png";

interface SidebarLinkProps {
  name: string;
  iconUrl: string;
}
function SidebarLink(props: SidebarLinkProps) {
  return (
    <div className='group mt-6 flex cursor-pointer first:mt-0'>
      <img src={props.iconUrl} className='mr-4 h-6 w-6' />
      <span className='text-a-white-300 transition-all group-hover:text-white'>
        {props.name}
      </span>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className='fixed left-0 top-0 flex min-h-full w-64 flex-col bg-a-dark-300'>
      <div className='box-center relative bottom-2 border-b-2 border-a-white-100/10 py-8'>
        <img src={WhaleLogo} />
      </div>

      <div className='my-5 flex flex-col items-center px-5'>
        <img src={Avatar} />
        <p className='mt-5 font-semibold'>Erfan Amade</p>
        <p className='mt-2 text-sm text-a-white-200'>
          verified
          <img className='ml-0.5 inline' src={VerifiedCheck} />
        </p>
      </div>

      <div className='px-5'>
        {/* <button className='flex w-full rounded-2.5xl bg-a-green p-4 shadow-white hover:bg-a-green/80'>
          <p className='flex-1 self-center font-bold'>Dashboard</p>
        </button> */}
        <Button label='Dashboard' />
      </div>

      <div className='mt-10 px-9'>
        <SidebarLink iconUrl={ExchangeIcon} name='Exchange' />
        <SidebarLink iconUrl={PriceIcon} name='Live Prices' />
        <SidebarLink iconUrl={WalletIcon} name='Wallet' />
        <SidebarLink iconUrl={MarketIcon} name='NFT Market' />
        <SidebarLink iconUrl={TransactionIcon} name='Transaction' />
        <SidebarLink iconUrl={SettingsIcon} name='Settings' />
        <SidebarLink iconUrl={NewsIcon} name='News' />
      </div>

      <div className='flex-1'></div>
      <div className='mb-8 px-9'>
        <p className='text-sm text-a-white-200'>Insights</p>
        <SidebarLink iconUrl={ChatIcon} name='Inbox' />
      </div>
    </div>
  );
}

export function Contents(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div {...rest} className={classNames("pl-64 pb-8 w-full", className)} />;
}