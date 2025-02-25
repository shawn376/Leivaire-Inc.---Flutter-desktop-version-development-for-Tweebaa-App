const env = 'DEVELOPMENT'
// const env = 'PRODUCTION'
// const platform = 'DEV' // PC, H5, DEV
// let apiUrl = 'https://dev.tweebaa.cn/dev'

// const apiUrl = 'https://www.tweezone.com/api/dev'
const apiUrl = 'https://dev.tweebaa.cn/dev'

const SERVER_LIST = {
  PRODUCTION: apiUrl,
  DEVELOPMENT: apiUrl,
  //H5: 'http://tapp.tweebaa.cn/#',
  H5: {
    PRODUCTION: 'https://live.tweebaa.com',
    DEVELOPMENT: 'https://live.tweebaa.com',
  },
}
// export const platform = 'PC'
// export default platform

export const PLATFORM = 'DEV' // PC, H5, DEV
export const H5_SERVER = SERVER_LIST.H5[env]
export const H5_URL = H5_SERVER + '/index.html#'

export const ENV = env
export const BASE_URL = SERVER_LIST[env]
export const DEVELOP_TIME = 2000
export const SDKAPPID = 1600056614
// change to 1600056614 ? 1600008444 ? 1400687473




// export const DEVELOP_URL = 'pages/user/retrieve-password'
// /pages/user/retrieve-password
// retrieve-password
// export const DEVELOP_URL = 'pages/user/new-login'


// 1646075052334211072
// export const DEVELOP_URL = 'pages/chat/meeting-center/create-meeting'
// export const DEVELOP_URL = 'pages/chat/vote/create-vote'

// 1646075052334211072
// export const DEVELOP_URL = 'pages/chat/multigroup/multigroup-details?linkageId=1682739444089872384' //多群联动详情
// export const DEVELOP_URL = 'pages/chat/meeting/meeing-details?linkageId=1692739585177780224' //语音/视频会议详情




// 成员
// export const DEVELOP_URL = `/pages/common/choose-user/index?siteId=tweebaa.interaction.transfer&targetId=1687256551435517952&targetType=groupMember&actionType=choose&actionAfter=forward&itemType=user&oneChoose=true`

// 关注
// export const DEVELOP_URL = `/pages/common/choose-user/index?siteId=tweebaa.interaction.transfer&targetId=1687256551435517952&targetType=followGroupMember&actionType=choose&actionAfter=forward&itemType=user&oneChoose=true`


// export const DEVELOP_URL = 'pages/chat/meeting/share?linkageId=1646404611344621568' //多群联动详情分享
//


// export const DEVELOP_URL = 'pages/user/phone-list'
// export const DEVELOP_URL = 'pages/chat/group/index'

// export const DEVELOP_URL = 'pages/common/choose-user/index?siteId=tweebaa.ecoplus&targetType=sendCard&actionType=choose&itemType=ecoplus'

// export const DEVELOP_URL ='pages/common/choose-user/index?siteId=tweebaa.im.groupLink&targetId=&targetType=master&actionType=edit&itemType=user'
// export const DEVELOP_URL ='pages/common/choose-user/index?siteId=tweebaa.im.group&targetType=sendCard&actionType=choose&itemType=group'
// export const DEVELOP_URL ='pages/common/choose-user/index?siteId=tweebaa.im.group&targetType=groupCard&actionType=choose&itemType=group&oneChoose=true'  //单选群卡片



// export const DEVELOP_URL = 'pages/user/cs'
// export const DEVELOP_URL = 'pages/chat/forward?type=forward'
// export const DEVELOP_URL = 'pages/chat/forward?type=pick&type1=speak&linkageId=1627844644597567488&state=edit'

// export const DEVELOP_URL = ''


// export const DEVELOP_URL = 'pages/chat/face-to-face'
// export const DEVELOP_URL = 'pages/discovery/ecosystem/ecoplus-list'

// export const DEVELOP_URL = 'pages/chat/chat-settings?userId=1557639133248303105'
// export const DEVELOP_URL = 'pages/chat/group-settings?id=1689614297011015680'  //群设置
//
// export const DEVELOP_URL = 'pages/chat/multigroup/group-authorization?groupId=1557674384242737152'
// 1557674384242737152
// 1558025956483112960

// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-history'

// export const DEVELOP_URL = 'pages/chat/multigroup/give-permision?groupId=1558025956483112960'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-operation?type=speak&state=establish'     //type:host   state:establish  edit
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-operation?type=tourist&state=edit&id=1627844644597567488&roles=OWNER'     //type:host   state:establish  edit
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-group-list?type=group&state=edit&roles=MEMBER&id=1627844644597567488&masterGroupId=1557674384242737152'     //type:host   state:establish  edit
// 转账还差多人选择
// export const DEVELOP_URL = 'pages/chat/group-member/group-member?type=pay&id=1557674384242737152'
// export const DEVELOP_URL = 'pages/chat/group-member/group-member?id=1687256551435517952'
// export const DEVELOP_URL = 'pages/common/components'

// 1624656066543521792
// 1557674384242737152 z
// 1558025956483112960 q

// 1627844644597567488
// export const DEVELOP_URL = 'pages/chat/group-settings?id=1558025956483112960'
// export const DEVELOP_URL = 'pages/blog/calligraphy/create-new-blog'
// export const DEVELOP_URL = 'pages/chat/chat-message/components/message-elements/message-operate'
// export const DEVELOP_URL = 'pages/chat/multigroup/apply-join'
// export const DEVELOP_URL = 'pages/blog/make-qrcode'





//

// export const DEVELOP_URL = 'pages/common/choose-user/index?siteId=tweebaa.im.groupLink&targetId=1664467972103782400&targetType=visitor&actionType=edit&actionAfter=forward&itemType=user'
// export const DEVELOP_URL = 'pages/common/choose-user/index?siteId=&targetId=&targetType=redPacket&actionType=choose&itemType=all&oneChoose=true'

// export const DEVELOP_URL = 'pages/chat/group-settings?id=1687256551435517952'
// export const DEVELOP_URL = 'pages/chat/group-settings?id=1558025956483112960'
//

// export const DEVELOP_URL = 'pages/user/register-success?loginWay=login&loginSuccessful=false'

// export const DEVELOP_URL = 'pages/user/my-wallet/index'
//
// export const DEVELOP_URL = 'pages/product/value-body?userId=729646914550628352'

// export const DEVELOP_URL = 'pages/user/index'
//
// export const DEVELOP_URL = 'pages/user/bindingSettings'
// export const DEVELOP_URL = 'pages/common/jump?url=https://www.figma.com/'
// export const DEVELOP_URL = 'pages/chat/home/index'
// export const DEVELOP_URL = 'pages/blog/calligraphy/save-share?blogId=1693452193535008768'
// export const DEVELOP_URL = 'pages/blog/index'
// export const DEVELOP_URL = 'pages/chat/chat-personal-details/remark-history?id=1687607798327873536'
// export const DEVELOP_URL = 'pages/user/function-introduction?type=solitaire'
// export const DEVELOP_URL = 'pages/user/bindingSettings'

// export const DEVELOP_URL = '/pages/common/card-css'

// export const DEVELOP_URL = 'pages/chat/multigroup/created-linkage?type=underway'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-center' //联动中心
// export const DEVELOP_URL = 'pages/share?type=login' //
// http://localhost:8888/#/pages/share?sn=1683829516402831360
// export const DEVELOP_URL = 'pages/nft/my-nft/index'
// export const DEVELOP_URL = 'pages/nft/my-nft/history'
// export const DEVELOP_URL = 'pages/chat/meeting-center/index?key=2'  //通讯录
// export const DEVELOP_URL = 'pages/product/create-product/index?type=Publisher'
// export const DEVELOP_URL = 'pages/chat/home/working-group?item={"tagId":"1655449030551105536","tagName":"rf2qre2","groupSize":1}'







// export const DEVELOP_000URL = 'pages/chat/home/family-members??type=contact&item={"id":"1664962702570868736","ownerId":"1558021748837003264","type":"CUSTOMIZED","title":"111","itemCount":0,"leafCount":null,"children":null}'
// export const DEVELOP_URL = `/pages/common/choose-user/index?siteId=tweebaa.ecoplus&targetType=card&actionType=choose&itemType=all`
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-red-introduce?id=1558025485391470592&siteId=tweebaa.im.group&type=transfer'
// export const DEVELOP_URL = 'pages/chat/solitaire/solitaire?groupId=1558025485391470592&id=1648726601640423424&senderId=1558021748837003264'
// export const DEVELOP_URL = 'pages/chat/collect-label?messageId=1648927922268057600'

// export const DEVELOP_URL = 'pages/chat/like-detail'

// 1626135130231963648
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-operation?type=speech&state=edit&id=1627844644597567488&roles=OWNER' //多群联动详情
// export const DEVELOP_URL = 'pages/chat/multigroup/share?linkageId=1626135130231963648' //多群联动详情分享
// // export const DEVELOP_URL = 'pages/chat/multigroup/give-permision?groupId=1558025956483112960'
// export const DEVELOP_URL = 'pages/chat/multigroup/group-authorization'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-tourist-list?id=1627844644597567488'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-tourist-details?id=1627844644597567488'
// export const DEVELOP_URL = 'pages/chat/multigroup/give-permision?groupId=1623162875579432960&type=have'

// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-cover'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-value'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-characteristic'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkage-time'
// export const DEVELOP_URL = 'pages/chat/multigroup/linkag e-theme'
// export const DEVELOP_URL = 'pages/chat/multigroup/created-linkage?type=soon'

// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/modify-display-diagram'

// export const DEVELOP_URL = 'pages/chat/group-detail?id=1557674384242737152'
// export const DEVELOP_URL = 'pages/pc-chat/call/index?meetingId=1611655366888902656&roomId=319801000'

// export const DEVELOP_URL = 'pages/pc-chat/index'
//
// export const DEVELOP_URL = 'pages/pc-chat/room/index?meetingId=1603422326383333376&roomId=863801000'
//
// export const DEVELOP_URL = 'pages/chat/meeting-record?meetingId=1603281275865759744&roomId=853801000'

export const DEVELOP_URL = 'pages/user/index'

// export const DEVELOP_URL = 'pages/user/login'
// export const DEVELOP_URL = 'pages/user/user-agreement'
// export const DEVELOP_URL = 'pages/chat/solitaire/solitaire?goupId=1558025485391470592&id=1648882775782240256&senderId=1558021748837003264'
// export const DEVELOP_URL = 'pages/chat/solitaire/index?groupId=1655449600326332416'  //接龙
//
// export const DEVELOP_URL = 'pages/chat/solitaire/solitaire?groupId=1557674384242737152&id=1641704386084446208&senderId=729646914550628352'


// export const DEVELOP_URL = 'pages/chat/modify-group-introduction'


// export const DEVELOP_URL = 'pages/action/call-action/call-details?preview=false&type=dayGood' //行动召唤详情
// 1626135130231963648
// export const DEVELOP_URL = 'pages/discovery/ecosystem/selected-content1?ecoPlusId=1693457555013214208'     //精选列表
// export const DEVELOP_URL = 'pages/user/setup-center/index'     //设置中心
// export const DEVELOP_URL = 'pages/user/setup-center/personal-manager/index'     //个人价值体空间管理

// export const DEVELOP_URL = 'pages/user/setup-center/edi-profile/index'     //个人资料


// export const DEVELOP_URL = 'pages/blog/reward/share-rewards?quantity=single&siteId=tweebaa.blog.blog&id=1594218422789722112'
// export const DEVELOP_URL = 'pages/blog/reward/share-rewards?quantity=single
// &siteId=tweebaa.ecoplus&id="1594218422789722112 ,1591727909100507136"
//分享打赏single many

// export const DEVELOP_URL = 'pages/chat/chat-search?groupId=1557674384242737152'

// export const DEVELOP_URL = '/pages/blog/calligraphy/save-share?groupId=1568130328411959296'
// export const DEVELOP_URL = '/pages/product/product-detail'

// export const DEVELOP_URL = 'pages/pc-chat/index'
// export const DEVELOP_URL = 'pages/chat/index'
// export const DEVELOP_URL = 'pages/product/adv-entity-product/index?type=haveChannels&productClass=entity'
// export const DEVELOP_URL = 'pages/blog/index'
// export const DEVELOP_URL = 'pages/common/cs'


// export const DEVELOP_URL = 'pages/common/components'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-red-wrap?targetId=1666273061013438464&type=resend'//编辑重发





// export const DEVELOP_URL = 'pages/product/value-body?userId=1558021748837003264'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-transfer?id=1557290886948401152'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-transfer1?id=1557290886948401152&siteId=tweebaa.user'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-transfer1?targetId=1660841833196052480&type=resend'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-red-wrap?id=1557674384242737152&siteId=tweebaa.im.group'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-red-wrap?id=1557674384242737152&siteId=tweebaa.user'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-red-wrap?targetId=1660472511483232256&type=edit'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/create-red-introduce'
// export const DEVELOP_URL = 'pages/chat/contacts/add-contact'
// export const DEVELOP_URL = 'pages/chat/contacts/add-thirdParty'

// export const DEVELOP_URL = 'pages/chat/transfer-accounts/preview-transfer'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/transfer-accounts?id=1557290886948401152'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/transfer-succeeded'
// export const DEVELOP_URL = 'pages/chat/transfer-accounts/payment-successful?back=1&type=redEnvelope'
// export const DEVELOP_URL = 'pages/chat/snatch-bag'
// export const DEVELOP_URL = 'pages/chat/red-packet-record'
// export const DEVELOP_URL = 'pages/chat/index?id=1558025485391470592'
// export const DEVELOP_URL = 'pages/user/login'
// export const DEVELOP_URL = 'pages/chat/group-member-handle/group-member-handle?id=1569198659386671104&type=add'
// export const DEVELOP_URL = 'pages/chat/group-member-handle1/group-member-handle?id=1569198659386671104&type=add'
// 1572136497946218496
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/ecological-plus-setting?id=1689682182261678080'
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/managing-partner?id=1572465323666501632'
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/edit-update'
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/selected-type?siteId=tweebaa.product'
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/preview-view'
// export const DEVELOP_URL = 'pages/discovery/task-situation/task-situation'  //任务
// export const DEVELOP_URL = 'pages/discovery/taskSituation/task-details'
// export const DEVELOP_URL = 'pages/discovery/member-partner/add-members'
// export const DEVELOP_URL = 'pages/discovery/follow-fans/follow-fans?type=follow'
// export const DEVELOP_URL = 'pages/discovery/follow-fans/test'

// export const DEVELOP_URL = '/pages/product/identity-selection/identity-selection'
// export const DEVELOP_URL = '/pages/product/identity-selection?type=product'
// export const DEVELOP_URL = '/,'
// export const DEVELOP_URL = '/pages/blog/reward/reward?obj={"siteId":"tweebaa.blog.blog","Id":"1660538959207559168","userId":"1557639133248303105"}'
// export const DEVELOP_URL = '/pages/blog/blog-details?id=1569198659386671104&mode=default'
// export const DEVELOP_URL = '/pages/blog/reward/change-password'
// export const DEVELOP_URL = '/pages/blog/reward/password-settings'
// export const DEVELOP_URL = 'pages/user/index'
// export const DEVELOP_URL = '/pages/blog/reward/fast-payment'
// export const DEVELOP_URL = '/pages/blog/reward/payment-details'
// export const DEVELOP_URL = '/pages/chat/create-group-introduce'
// export const DEVELOP_URL = '/pages/chat/group-leader-map'
// export const DEVELOP_URL = '/pages/chat/group-detail?id=                                             '
// export const DEVELOP_URL = '/pages/chat/group-detail?id=1558025485391470592'
// export const DEVELOP_URL = '/pages/chat/solitaire'
// export const DEVELOP_URL = 'pages/chat/multi-call/index.nvue'
// export const DEVELOP_URL = 'pages/user/map'
// export const DEVELOP_URL = 'components/tw/tw-amap/tw-amap'
// export const DEVELOP_URL = 'pages/discovery/ecosystem/selected-content1'
// export const DEVELOP_URL = 'pages/discovery/ecosystem/selected-records'
// export const DEVELOP_URL = 'pages/discovery/ecosystem/selected-details?ecoPlusId=1693457555013214208&siteId=tweebaa.blog.blog&targetId=1693422747381833728&type=first'
// export const DEVELOP_URL = 'pages/discovery/ecosystem/selected-content'
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/partnerSetting/administrator-partner.vue'
// export const DEVELOP_URL = 'pages/discovery/ecological-plus-setting/socialSetting/social-setting'

// export const DEVELOP_URL = '/pages/chat/multi-call/index?id=1573587592484667392&roomId=293601000'
// export const DEVELOP_URL = '/pages/chat/meeting/index?id=1575027845393276928&roomId=784601000'

// export const DEVELOP_URL = 'pages/discovery/purchase-application'

//
// export const DEVELOP_URL = 'pages/chat/meeting-coming'
// export const DEVELOP_URL = '/pages/chat/meeting/index?meetingId=1578754038256807936&roomId=437601000'
// export const DEVELOP_URL = 'pages/chat/chat-settings?userId=731210207304089600'
// export const DEVELOP_URL = 'pages/common/report'
// export const DEVELOP_URL = 'pages/common/cs'
// export const DEVELOP_URL = 'pages/common/remarks'
// export const DEVELOP_URL = 'pages/blog/blog-tags'

// export const DEVELOP_URL = '/pages/product/set-coupon'

// export const DEVELOP_URL = 'pages/chat/call-coming?inviterId=729646914550628352'  //1558021748837003264  1557290886948401152  729646914550628352
// export const DEVELOP_URL = 'pages/chat/call/index1?meetingId=1578754038256807936&roomId=437601000'

// export const DEVELOP_URL = '/pages/common/set-map?latitude=39.894636&longitude=116.383998'

// export const DEVELOP_URL = 'pages/chat/chat-background/historical-background'
// export const DEVELOP_URL = '/pages/chat/select-card?type=card'
// export const DEVELOP_URL = '/pages/chat/red-envelopes?id=1557674384242737152&type=ordinary&siteId=tweebaa.im.group'
// export const DEVELOP_URL = 'pages/product/value-body?userId=747468685806927872'
// export const DEVELOP_URL = '/pages/discovery/ecosystem/selected-type?id=1572465323666501632&siteId=tweebaa.ecoplus'
// pages/chat/chat-message/components/message-elements/message-merge.vue
