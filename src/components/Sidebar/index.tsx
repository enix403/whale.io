import classNames from "classnames";
import { Button } from "components/Button";
import { TopBar } from "components/TopBar/TopBar";

import { ButtonSwitch } from "components/ButtonSwitch";
import Avatar from "./Avatar-Image.png";
import ChatIcon from "./Chat-Icon-nav.svg";
import DarkIcon from "./Dark-Icon.svg";
import ExchangeIcon from "./Exchange-Icon-nav.svg";
import LightIcon from "./Light-Icon.svg";
import MarketIcon from "./Market-Icon-nav.svg";
import NewsIcon from "./News-Icon-nav.svg";
import PriceIcon from "./Price-Icon-nav.svg";
import SettingsIcon from "./Settings-Icon-nav.svg";
import TransactionIcon from "./Transaction-Icon-nav.svg";
import WalletIcon from "./Wallet-Icon-nav.svg";
import VerifiedCheck from "./verified-check.svg";
import WhaleLogo from "/whale-logo.png";

interface SidebarLinkProps {
  name: string;
  iconUrl: string;
}
function SidebarLink(props: SidebarLinkProps) {
  return (
    <div className='group mt-4 flex cursor-pointer first:mt-0'>
      <img src={props.iconUrl} className='mr-4 h-6 w-6' />
      <span className='text-a-white-300 transition-all group-hover:text-white'>
        {props.name}
      </span>
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <TopBar />
      <div className='fixed left-0 top-0 z-20 flex max-h-full w-64 flex-col bg-a-dark-300 group-[.full]/layout:pt-24'>
        <div className='box-center relative bottom-2 border-b-2 border-a-white-100/10 py-8 group-[.full]/layout:mt-2 group-[.full]/layout:border-t-2'>
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

        <div className='mt-6 px-9'>
          <SidebarLink iconUrl={ExchangeIcon} name='Exchange' />
          <SidebarLink iconUrl={PriceIcon} name='Live Prices' />
          <SidebarLink iconUrl={WalletIcon} name='Wallet' />
          <SidebarLink iconUrl={MarketIcon} name='NFT Market' />
          <SidebarLink iconUrl={TransactionIcon} name='Transaction' />
          <SidebarLink iconUrl={SettingsIcon} name='Settings' />
          <SidebarLink iconUrl={NewsIcon} name='News' />
        </div>

        <div className='flex-1'></div>
        <div className='mb-8 mt-4 px-9'>
          <p className='text-sm text-a-white-200'>Insights</p>
          <SidebarLink iconUrl={ChatIcon} name='Inbox' />

          <div className='mb-10 mt-2 inline-block rounded-2.5xl bg-a-dark-200 px-1 py-0.5'>
            <ButtonSwitch
              active='right'
              left={
                <>
                  <img src={LightIcon} />
                  <span className='ml-2'>Light</span>
                </>
              }
              right={
                <>
                  <img src={DarkIcon} />
                  <span className='ml-2'>Dark</span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Contents(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames("w-full pb-8 pl-64 pt-24", className)}
    />
  );
}
