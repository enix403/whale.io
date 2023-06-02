import classNames from "classnames";
import { Button } from "components/Button";
import { ButtonSwitch } from "components/ButtonSwitch";
import { TopBar } from "components/TopBar/TopBar";

import { useNavigate } from "react-router-dom";
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
  href?: string;
}
function SidebarLink(props: React.PropsWithChildren<SidebarLinkProps>) {
  const navigate = useNavigate();
  return (
    <div className='group mt-2 flex cursor-pointer first:mt-0' onClick={() => {
      props.href && navigate(props.href);
    }}>
      <img src={props.iconUrl} className='mr-4 h-6 w-6' />
      <span className='text-sm text-a-white-300 transition-all group-hover:text-white'>
        {props.name}
      </span>
      {props.children}
    </div>
  );
}

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />
      <div className='fixed left-0 top-0 z-20 flex h-full max-h-full w-52 flex-col overflow-y-scroll bg-a-dark-300 group-[.full]/layout:pt-24'>
        <div className='box-center relative bottom-2 border-b-2 border-a-white-100/10 py-4 group-[.full]/layout:mt-2 group-[.full]/layout:border-t-2'>
          <img className='h-10 w-28' src={WhaleLogo} />
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
              <div className='relative'>
                <img src={DashboardIcon} />
              </div>
            }
            label='Dashboard'
            onClick={() => {
              navigate("/dashboard");
            }}
          />
        </div>

        <div className='mt-6 px-6'>
          <SidebarLink iconUrl={ExchangeIcon} href="/affiliate" name='Affiliate' />
          <SidebarLink iconUrl={PriceIcon} href="/trade" name='Trade History' />
          <SidebarLink iconUrl={SettingsIcon} href="/settings" name='Settings' />
          <SidebarLink iconUrl={WalletIcon} href="/dep" name='Deposite' />
          <SidebarLink iconUrl={WalletIcon} href="/dep-1" name='Deposite 1' />
          <SidebarLink iconUrl={MarketIcon} href="/dep-2" name='Deposite 2'>
            <span className='box-center relative -top-3 left-1 h-5 w-10 self-center rounded-md bg-red-500 text-center text-sm'>
              New
            </span>
          </SidebarLink>
          <SidebarLink iconUrl={TransactionIcon} href="/withdraw" name='Withdraw' />
        </div>

        <div className='flex-1'></div>
        <div className='mb-8 mt-6 px-6'>
          <p className='relative text-sm text-a-white-200'>
            Insights
            <span className='box-center absolute left-24 top-0 h-5 w-5 self-center rounded-md bg-red-500 text-center text-sm'>
              8
            </span>
          </p>
          <SidebarLink iconUrl={ChatIcon} name='Inbox' />

          <div className='mt-4 inline-block rounded-2.5xl bg-a-dark-200 px-1 py-0.5'>
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
  const { className, children, ...rest } = props;
  return (
    <div {...rest} className={classNames("w-full h-full border-box  pb-8 pl-52 pt-24", className)}>
      <div className="w-full h-full max-h-full">
        {children}
      </div>
    </div>
  );
}
