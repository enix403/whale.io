import classNames from "classnames";
import { Button } from "components/Button";
import { ButtonSwitch } from "components/ButtonSwitch";
import { TopBar } from "components/TopBar/TopBar";

import Avatar from "./Avatar-Image.png";
import ChatIcon from "./Chat-Icon-nav.svg";
import DarkIcon from "./Dark-Icon.svg";
import DashboardIcon from "./Dashboard-Icon.svg";
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
function SidebarLink(props: React.PropsWithChildren<SidebarLinkProps>) {
  return (
    <div className='group mt-4 flex cursor-pointer first:mt-0'>
      <img src={props.iconUrl} className='mr-4 h-6 w-6' />
      <span className='text-a-white-300 transition-all group-hover:text-white'>
        {props.name}
      </span>
      {props.children}
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <TopBar />
      <div className='fixed left-0 top-0 z-20 flex h-full max-h-full w-64 flex-col bg-a-dark-300 group-[.full]/layout:pt-24'>
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
          <Button
            leftElement={
              <div className='absolute'>
                <img src={DashboardIcon} />
              </div>
            }
            label='Dashboard'
          />
        </div>

        <div className='mt-6 px-9'>
          <SidebarLink iconUrl={ExchangeIcon} name='Exchange' />
          <SidebarLink iconUrl={PriceIcon} name='Live Prices' />
          <SidebarLink iconUrl={WalletIcon} name='Wallet' />
          <SidebarLink iconUrl={MarketIcon} name='NFT Market'>
            <span className='box-center relative -top-3 left-1 h-5 w-10 self-center rounded-md bg-red-500 text-center text-sm'>
              New
            </span>
          </SidebarLink>
          <SidebarLink iconUrl={TransactionIcon} name='Transaction' />
          <SidebarLink iconUrl={SettingsIcon} name='Settings' />
          <SidebarLink iconUrl={NewsIcon} name='News' />
        </div>

        <div className='flex-1'></div>
        <div className='mb-8 mt-4 px-9'>
          <p className='text-sm text-a-white-200 relative'>
            Insights
            <span className='box-center absolute top-0 left-24 h-5 w-5 self-center rounded-md bg-red-500 text-center text-sm'>
              8
            </span>
          </p>
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
