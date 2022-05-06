declare const window: Window;

export default function detectUA() {
  const u = navigator.userAgent.toLowerCase();
  if (u.indexOf('android') > -1 || u.indexOf('linux') > -1) {
    window.isAndroid = true;
  } else if (u.indexOf('iphone') > -1) {
    window.isiOS = true;
  } else if (u.indexOf('windows phone') > -1) {
    window.isWinphone = true;
  }
  if (u.indexOf('alipayclient') > -1) {
    window.isAliPay = true;
  }
  if (u.indexOf('micromessenger') > -1) {
    window.isWechat = true;
  }
}
