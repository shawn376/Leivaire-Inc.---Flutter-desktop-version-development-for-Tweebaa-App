import App from './App'
import { SDKAPPID } from '@/tw-env.js'
import { TUICore } from './utils/TUIKit'
import store from './store'
import Vuex from 'vuex'
import { createSSRApp } from 'vue'
import { getSystem, updateSystem } from '@/utils/tweebaa'
import { LocalManager } from "@/locale"
// #ifdef H5
// --
// trtc need
import TRTC from 'trtc-js-sdk'
import mitt from 'mitt'
// --
// #endif

// #ifdef H5
// electron tuiroom
const bus = mitt()
TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG)
// #endif
uni.$TUIKit = TUICore.init({
  SDKAppID: SDKAPPID,
})
const stayTuned = () => {
  uni.showToast({
    title: uni.$t('common.stayTuned'),
    icon: 'none',
  })
}
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$Staytuned = stayTuned
  app.use(store)
  app.use(LocalManager.getInstance().getI18n())

  // #ifdef H5
  app.provide('$bus', bus)
  app.config.globalProperties.$bus = bus
  // #endif

  return {
    app,
    Vuex,
  }
}
