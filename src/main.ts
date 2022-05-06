import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Utils from './utils';
import detectUA from './utils/ua';

detectUA();

router.beforeEach((to, from) => {
  if (Utils.getUserInfo()) {
    return true;
  } else {
    const accessToken = Utils.getToken();
    if (accessToken) {
      getUserInfoByAccessToken(accessToken);
    } else {
      let zlbToken = '';
      if (window.isAliPay) {
        zlbToken = Utils.getUrlParams('token');
      } else {
        zlbToken = Utils.getParams('token');
      }
      if (zlbToken) {
        getAccessToken(zlbToken);
      } else {
        const { path } = to;
        Utils.setPath(path);

        let url = '';
        if (window.isAliPay) {
          url = 'https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&scope=1&servicecode=zswsbmfw&goto=' + encodeURIComponent(window.location.href);
        } else {
          url = 'https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=zswsbmfw&goto=' + encodeURIComponent(window.location.href);
        }
        window.location.replace(url);
      }
    }
  }
})

async function getAccessToken(zlbToken: string) {
  const params = {
    client_id: process.env.VUE_APP_CLIENT_ID,
    client_secret: process.env.VUE_APP_CLIENT_SECRET,
    grant_type: "password",
    username: zlbToken + '~token',
    yssyss: zlbToken + '~token',
    password: zlbToken + '~token',
  }
  const res:any = await axios.post(process.env.VUE_APP_AUTH, null, { params, },);
  const { data: { access_token } } = res;
  if (access_token) {
    Utils.setToken(access_token);
    getUserInfoByAccessToken(access_token);
  }
}

async function getUserInfoByAccessToken(accessToken: string) {
  const res: any = await axios.post(process.env.VUE_APP_USER, null, {
    params: {
      access_token: accessToken
    }
  });
  const { data } = res;
  if (data.success) {
    if (data.body.name) {
      const obj = data.body;
      // 设置用户信息
      Utils.setUserInfo(obj);
    }
    if (data.body.authlevel >= 2) {
      const path = Utils.getPath();
      if (path) {
        return { path }
      }
    } else {
      // TODO: 提示用户完成实名认证
    }
  }
}

createApp(App).use(store).use(router).mount('#app')
