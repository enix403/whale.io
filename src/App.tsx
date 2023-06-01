/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

import { AffiliatePage } from './pages/Affiliate/Affiliate';
import { Deposit } from './pages/Deposit/Deposit';
import { Deposit1Page } from './pages/Deposit/Deposit1';
import { Deposit2 } from './pages/Deposit/Deposit2';
import { WithdrawPage } from './pages/Deposit/Withdraw';
import { LoginPage } from './pages/Login/Login';
import { Settings } from './pages/Settings/Settings';
import { TradeHistory } from './pages/TradeHistory/TradeHistory';

export function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <AffiliatePage /> */}
      {/* <TradeHistory /> */}
      {/* <Settings /> */}
      {/* <Deposit /> */}
      {/* <Deposit2 /> */}
      {/* <WithdrawPage /> */}
      <Deposit1Page />
    </>
  );
}
