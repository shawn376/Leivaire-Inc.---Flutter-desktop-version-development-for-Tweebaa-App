<script>
import { PLATFORM } from '@/tw-env.js'
import { getMomentTags, setSystem, updateSystem, getKeyboardHeight, homeUrl, closeSplashscreen } from './utils/tweebaa'
// import { checkLogin, goToGroupLink, checkMeetingIncoming } from '@/utils/tencent-im.js'
import apiUtils from '@/api/utils.js'
import store from '@/store/index'
import Mqtt from '@/utils/mqtt/index'
import Push from '@/utils/push.js'
import { CacheManager } from '@/utils/CacheManage'
// import { initPushPolling } from '@/utils/push.js'
import { im } from '@/utils/im'
import OfflineAction from '@/utils/offlineAction'
import request from '@/utils/request'
import { PopupMessage } from '@/utils/PopupMessage'
import ratesClass from '@/utils/ratesUtil'
import { developHelper } from './utils/developHelper'
// import * as sentry from "sentry-uniapp";
// sentry.init({
//             // __DSN__ 参考格式: https://8137b89b2d1c4e349da3a38dca80c5fe@sentry.io/1
//             dsn: 'https://9c24bb1922003404f9d088fce2d86fda@o495236.ingest.us.sentry.io/4508138811293696',

//             // extraOptions 主要是解决平台差异问题的，见下方说明
//             // 非 APP 平台，可以不用
//             extraOptions: { onmemorywarning: false, onerror: false }
// });
export default {
  onLaunch: async function () {
    uni.onPushMessage(res => {
      console.log('收到推送消息：', JSON.stringify(res)) //监听推送消息
      switch (res.type) {
        case 'click':
          const payload = res.data.payload
          switch (payload.messageType) {
            case 'chat-message':
              im().goChatFromPush(payload)
              break
            case 'LIKE':
              uni.navigateTo({ url: '/pages/user/message/index' })
              break
            case 'COMMENT':
              uni.navigateTo({ url: '/pages/user/message/index' })
              break
            case 'REPLY':
              uni.navigateTo({ url: '/pages/user/message/index' })
              break
            case 'FAVORITE':
              uni.navigateTo({ url: '/pages/user/message/index' })
              break
            case 'GIFT':
              uni.navigateTo({ url: '/pages/user/message/index' })
              break
            case 'CALL_PHONE':
              im().goAppCall(payload)
              break
            // 群主动态
            // case 'GROUP_OWNER_ACTIONS':
            //   console.log('%c [  ]-48', 'font-size:13px; background:pink; color:#bf2c9f;', res)
            //   store.commit('businessStore/setGroupOwnerAction', {
            //     blog: [],
            //   })
            // break
          }
          break
      }
    })
    closeSplashscreen(300)
    OfflineAction.getInstance().sendOfflineActions()
    // #ifdef APP-PLUS
    Push.getInstance().initPush()
    CacheManager.getInstance().restoreCache()
    // #endif
    uni.$on('restoreCache', function () {
      CacheManager.getInstance().restoreCache(null, true)
    })
    uni.removeStorageSync('currentMeeting')
    uni.removeStorageSync('currentCall')
    uni.removeStorageSync('inMeetingOrCalling')

    store.commit('timStore/handleFabModule', {
      open: false,
    })

    /*    if (Offline.state === 'up'){
      store.commit('timStore/setIsOnline', true);
    }else {
      store.commit('timStore/setIsOnline', false);
    }
    Offline.on('up', () => {
      store.commit('timStore/setIsOnline', true);
    });
    Offline.on('down', () => {
      store.commit('timStore/setIsOnline', false);
    });*/

    //获取各种 分类 代码 code
    getMomentTags()

    // 是否开启了每次打开app必须播放启动动画
    uni.setStorageSync('playBootVideo-num', 0)

    // 首次缓存版本号

    this.getPrivacyVersion()

    //  系统信息
    let num = uni.getStorageSync('SYSTEM-clear')
    if (!num) {
      uni.removeStorageSync('SYSTEM')
      uni.setStorageSync('SYSTEM-clear', '111')
    }
    setSystem()
    //  语言切换
    uni.onLocaleChange(e => {
      if (!e.locale) {
        return
      }

      updateSystem('language', e.locale)
      let sys = uni.getSystemInfoSync()
      if (/ios|iphone|ipad/gi.test(sys.system) == 'IOS') {
        setTimeout(() => {
          // #ifdef APP-PLUS
          plus.runtime.restart()
          // #endif
        }, 300)
      } else {
        // #ifdef H5
        location.reload()
        // #endif
      }
    })
    let deviceId = uni.getStorageSync('deviceId')
    const token = uni.getStorageSync('accessToken')
    // mqtt登录
    Mqtt.getInstance().initMqtt()

    //  会议
    if (PLATFORM == 'PC' && window?.electronAPI) {
      window.electronAPI.meetingShow((event, url) => {
        if (url.indexOf('pages') != -1) {
          uni.navigateTo({ url })
        }
      })
      window.electronAPI.meetingClearLocal(event => {
        uni.removeStorageSync('inMeetingOrCalling')
      })
    }

    //获取国家code  CN
    this.getLocationByIp()
    // 轮询初始化
    // initPushPolling()
    //获取键盘高度
    getKeyboardHeight()
  },
  onShow: async function () {
    closeSplashscreen(300)

    const globalData = getApp().globalData || {}
    globalData.isAppShow = true
    //   checkLogin()

    // #ifdef APP-PLUS
    let args = plus.runtime.arguments
    if (!args) {
      return
    }
    let shareUrl
    if (args.match(/^tweebaa:\/\/pages\/share\?url=/)) {
      shareUrl = await parseShareUrl(args.replace('tweebaa://pages/share?url=', '')).path
    }
    // 关闭启动界面
    closeSplashscreen(300)
    // let hasMeeting = await checkMeetingIncoming()
    // if (hasMeeting) {
    //   return
    // }
    if (!!args.match(/tweebaa:\/\/pages\//) && !args.match(/^tweebaa:\/\/pages\/share/)) {
      uni.navigateTo({ url: args.replace('tweebaa:/', '') })
    } else if (!!args.match(/tweebaa:\/\/groupLink\//)) {
      // goToGroupLink(args.replace('tweebaa://groupLink/', ''))
    } else if (args == 'tweebaa://pages/share?type=login' || args == 'tweebaa://pages/share?type=create') {
      console.log('关闭动画1')

      uni.setStorageSync('playVideo', true)
      uni.navigateTo({ url: args.replace('tweebaa:/', '') })
    } else if (shareUrl) {
      console.log('关闭动画2')

      uni.navigateTo({ url: shareUrl })
    }
    // 获取地理位置
    // #endif
    // console.log('App Show')
  },
  //监听页面隐藏
  onHide: function () {
    // console.log('App Hide')
    const globalData = getApp().globalData || {}
    globalData.isAppShow = false
    // #ifdef APP-PLUS
    plus.runtime.arguments = ''
    // #endif

    // 修改剪切板内容
    if (uni.getClipboardData) {
      uni.getClipboardData({
        success: function (res) {
          const data = res.data
          // 如果是富文本消息
          if (data.startsWith('<p>') && uni.setClipboardData) {
            // 清除剪切板
            uni.setClipboardData({
              data: '',
              success: function () {
                uni.hideToast()
              },
            })
          }
        },
      })
    }
  },
  onExit() {
    console.log('App Exit')
  },
  onError: function (e) {
    developHelper.handlerError(e)
  },
  //页面不存在监听函数
  onPageNotFound: function () {
    uni.switchTab({ url: homeUrl() })
  },
  globalData: {
    t: '',
    w: '',
    e: '',
    addMessageTimer: {},
    addMessageWaiting: true,
    addMessageList: [],
    $TrtcCloud: null,
    isAppShow: false,
    ringtoneInfo: {
      call: null,
      meeting: null,
      audio: true,
    },
  },
  methods: {
    //获取国家code  CN
    async getLocationByIp() {
      //if (uni.getStorageSync('userChooseCountry')) return
      let res = await apiUtils.getCountryByIp()
      if (res.data?.code) {
        // uni.setStorageSync('userChooseCountry', res.data.code)
        ratesClass.countryChange(res.data.code)
        uni.setStorageSync('currentCountryCode', res.data.code.toLowerCase())
      } else {
        ratesClass.countryChange('cn')
        uni.setStorageSync('currentCountryCode', 'cn')
      }
    },

    async getPrivacyVersion() {
      let res = await request({
        url: '/admin-service/v1/admin/settings/privacy_version',
        method: 'get',
        noLogin: true,
      })
      uni.setStorageSync('privacyVersion', res.data)
    },
  },
}
</script>

<style lang="scss">
@import '@/static/css/style.css';
@import '@/static/iconfont/iconfont.css';

/* #ifndef APP-PLUS-NVUE */
view,
input,
input::placeholder {
  font-family: 'PingFang SC';
}

/* #endif */

.cl_blue {
  color: #0187fa;
}

.cl_red {
  color: #fe0808;
}

::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
</style>
