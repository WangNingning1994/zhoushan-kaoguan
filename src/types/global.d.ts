declare global {
  interface Window {
    isAndroid?: boolean;
    isiOS?: boolean;
    isWinphone?: boolean;
    isAliPay?: boolean;
    isWechat?: boolean;
  }
}
export {}