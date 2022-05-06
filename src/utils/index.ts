// 获取请求参数：地址栏没有# 或 #在参数之后
export function getUrlParams(paraName: string): string {
  const reg = new RegExp("(^|&)" + paraName + "=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return '';
}

// 获取请求参数： 地址栏中有#（#在参数之前）或者地址栏中没有#
export function getParams(paraName: string): string {
  const url = document.location.toString();
  const arrObj = url.split("?");

  if (arrObj.length > 1) {
    const arrPara = arrObj[1].split("&");
    let arr;

    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");

      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return "";
  } else {
    return "";
  }
}

/**
 * 保存token
 */
export function setToken(token: string) {
  if (!token) {
    sessionStorage.removeItem("token")
  } else {
    sessionStorage.setItem("token", token)
  }

}
/**
 * 获取token
 */
export function getToken() {
  return sessionStorage.getItem("token");
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  const userInfo = sessionStorage.getItem("userInfo");
  if (!userInfo) {
    return null;
  }
  return JSON.parse(userInfo);
}

/**
 * 保存用户信息
 */
export function setUserInfo(user: any) {
  if (!user) {
    sessionStorage.removeItem("userInfo")
  } else {
    sessionStorage.setItem("userInfo", JSON.stringify(user))
  }
}

/**
 * 保存用户将要访问的路由
 */
export function setPath(path: string) {
  localStorage.setItem('path', path);
}

/**
 * 获得用户将要访问的路由
 */
export function getPath(): any {
  return localStorage.getItem('path');
}