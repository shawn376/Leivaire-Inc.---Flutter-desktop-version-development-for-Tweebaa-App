<template>
  <view class="add-personal-space">
    <view class="box"></view>
    <!-- 导航栏 -->
    <view class="box-bg">
      <uni-nav-bar :height="navHeight" background-color="#fff">
        <block v-slot:left>
          <view @click="backHomepage">
            <uni-icons type="back" size="28" color="#1F2228"></uni-icons>
          </view>
        </block>
        <view class="banner-text">添加到“我的推主空间”</view>
        <block v-slot:right>
          <view class="finish-btn"> 完成 </view>
        </block>
      </uni-nav-bar>
    </view>
    <!-- DAO-NFT -->
    <view>
      <view class="routine-one">
        <view class="routine-one-left">
          <view class="corner-mark">DAO NFT</view>
          <!-- <image :src="oss('/product-detail/taskImg.png')" mode="aspectFill"></image> -->
        </view>
        <view class="routine-one-right">
          <view class="right-one">
            <view class="right-one-main">“生态+” 主体</view>
            <view class="right-one-content">
              <view class="content-text">这是我的书法NFT</view>
              <view class="content-money">
                <view>总估值</view>
                <image src="@/static/images/product-detail/moneyB.png"></image>
                <text>980</text>
              </view>
            </view>
          </view>
          <view class="right-three"> 塑爱旅行爱发明擅长设计的备注最多可以显示，最多显示2行最多显示2行最多显示2行 </view>
          <!-- 有团购时 -->
          <!-- <view class="have-discount">
              <view class="right-four">
                <view>售价</view>
                <image src="@/static/images/product-detail/moneyO.png"></image>
                <text>980.00</text>
              </view>
              <view class="right-four">
                <view>推广者最高收益</view>
                <image src="@/static/images/product-detail/moneyO.png"></image>
                <text>150.00</text>
              </view>
              <view class="right-four">
                <view>分享者最高收益</view>
                <image src="@/static/images/product-detail/moneyO.png"></image>
                <text>150.00</text>
              </view>
            </view> -->
          <!-- 没团购时 -->
          <view class="no-discount">
            <view class="discount-top">推广者组织团购得特殊激励</view>
            <view class="discount-bottom">
              <view class="discount-money">
                <view class="money-type">可争取的最低零售价</view>
                <view class="money-num">
                  <image src="@/static/images/product-detail/moneyO.png"></image>
                  980.00
                </view>
              </view>
              <view class="discount-money">
                <view class="money-type">最高总收益</view>
                <view class="money-num">
                  <image src="@/static/images/product-detail/moneyO.png"></image>
                  980.00
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 轮播图 -->
    <view class="swiper-img">
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item>
          <view class="swiper-item">
            <image src="@/static/images/add-personal-space/banner1.png" mode="aspectFill"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="@/static/images/add-personal-space/banner2.png" mode="aspectFill"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="@/static/images/add-personal-space/banner3.png" mode="aspectFill"></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 个性化定制 -->
    <view class="individuation-content">
      <view class="individuation-title">个性化定制,秀秀您自己</view>
      <view class="individuation-text">
        Tweebaa推易吧赋能您用创意性文字、图片及音视频，个性化展示独特的您及您喜欢的DAO
        NFT。您的价值观/理念、宝贵经验/建议、个人特色/斜杠技能、魅力/影响力 + 推易吧产品仓库产品 = 纳入您个人品牌的DAO
        NFT。一次性努力，持续性“躺赚”收入，不仅成就您的零成本盈利之旅，还给您空间增光彩，把古板的DAO
        NFT推广募资变得有魔力有趣味，其主体“生态+”的使命、愿景与价值观所蕴含的价值触点将吸引全球契合者在灵魂深处产生共情，愿意与您连接在您空间长时间驻足浏览，带给您更多粉丝、人气、TiV奖励及空间其它产品的关注度与销量。喜欢您就愿意支持您，不需主动推销却产生更大销量，售物于无形中
      </view>
      <view class="individuation-write">
        <image src="@/static/images/add-personal-space/icon1.png"></image>
        {{ $t('chat.group-detail.writesomething') }}
      </view>
      <view>富文本</view>
    </view>
    <!-- 暂时会改动的样式 -->
    <view></view>
    <!-- 组织团购的方案 -->
    <view class="organize-group-purchase">
      <view class="group-title">选择一个愿意挑战的组织团购选项</view>
      <view>
        <view class="group-star-level">
          <view class="group-star-level-banner">批量购买/组织团购方案</view>
          <view class="star-num">
            星级指数一
            <uni-icons type="star-filled" size="16" color="#FFC75B"></uni-icons>
          </view>
          <view class="star-level-condition">
            <view class="condition-top">
              <text>星级越高，最低量要求越高</text>
              <text>5件</text>
            </view>
            <view class="condition-bottom">价格更优惠，推主收益也更高</view>
          </view>
        </view>
        <view class="preferential-price">
          团购优惠售价 1700.00T豆
          <view class="price-transition">
            <view>≈</view>
            69.00
            <view class="units">CNY</view>
          </view>
        </view>
        <view class="role-earnings">
          <view class="role-title">
            <view>销售贡献者—DAO NFT推广者</view>
            <view class="title-b">募资贡献者—DAO NFT推广者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
          <view class="role-title">
            <view>销售贡献者—DAO NFT分享者</view>
            <view class="title-b">募资贡献者—DAO NFT分享者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="viewing-all-roles"> 查看所有角色收益 </view>
        <view class="wallet-time">
          <image src="@/static/images/product-detail/clock.png"></image>
          组团成功后48h内转入买方钱包
        </view>
        <view class="added-bonus">
          <view>
            <image src="@/static/images/add-personal-space/icon2.png"></image>
          </view>
          <view class="added-bonus-text">
            <text class="text-one">一次性购买“成团最低销量”的额外奖励：</text>
            <text class="text-two">赠送1个DAO NFT</text>
          </view>
        </view>
        <view class="selling-switch">
          <view class="switch-title"> 启动此团购 </view>
          <view class="switch-btn">
            <tui-switch @change="change" color="#1CC4C7" borderColor="#57E4E7"></tui-switch>
          </view>
        </view>
      </view>
      <view>
        <view class="group-star-level">
          <view class="group-star-level-banner">批量购买/组织团购方案</view>
          <view class="star-num">
            星级指数二
            <uni-icons type="star-filled" size="16" color="#FFC75B"></uni-icons>
          </view>
          <view class="star-level-condition">
            <view class="condition-top">
              <text>星级越高，最低量要求越高</text>
              <text>5件</text>
            </view>
            <view class="condition-bottom">价格更优惠，推主收益也更高</view>
          </view>
        </view>
        <view class="preferential-price">
          团购优惠售价 1700.00T豆
          <view class="price-transition">
            <view>≈</view>
            69.00
            <view class="units">CNY</view>
          </view>
        </view>
        <view class="role-earnings">
          <view class="role-title">
            <view>销售贡献者—DAO NFT推广者</view>
            <view class="title-b">募资贡献者—DAO NFT推广者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
          <view class="role-title">
            <view>销售贡献者—DAO NFT分享者</view>
            <view class="title-b">募资贡献者—DAO NFT分享者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="viewing-all-roles"> 查看所有角色收益 </view>
        <view class="wallet-time">
          <image src="@/static/images/product-detail/clock.png"></image>
          组团成功后48h内转入买方钱包
        </view>
        <view class="added-bonus">
          <view>
            <image src="@/static/images/add-personal-space/icon2.png"></image>
          </view>
          <view class="added-bonus-text">
            <text class="text-one">一次性购买“成团最低销量”的额外奖励：</text>
            <text class="text-two">赠送1个DAO NFT</text>
          </view>
        </view>
        <view class="selling-switch">
          <view class="switch-title"> 启动此团购 </view>
          <view class="switch-btn">
            <tui-switch @change="change" color="#1CC4C7" borderColor="#57E4E7"></tui-switch>
          </view>
        </view>
      </view>
      <view>
        <view class="group-star-level">
          <view class="group-star-level-banner">批量购买/组织团购方案</view>
          <view class="star-num">
            星级指数三
            <uni-icons type="star-filled" size="16" color="#FFC75B"></uni-icons>
          </view>
          <view class="star-level-condition">
            <view class="condition-top">
              <text>星级越高，最低量要求越高</text>
              <text>5件</text>
            </view>
            <view class="condition-bottom">价格更优惠，推主收益也更高</view>
          </view>
        </view>
        <view class="preferential-price">
          团购优惠售价 1700.00T豆
          <view class="price-transition">
            <view>≈</view>
            69.00
            <view class="units">CNY</view>
          </view>
        </view>
        <view class="role-earnings">
          <view class="role-title">
            <view>销售贡献者—DAO NFT推广者</view>
            <view class="title-b">募资贡献者—DAO NFT推广者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
          <view class="role-title">
            <view>销售贡献者—DAO NFT分享者</view>
            <view class="title-b">募资贡献者—DAO NFT分享者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="viewing-all-roles"> 查看所有角色收益 </view>
        <view class="wallet-time">
          <image src="@/static/images/product-detail/clock.png"></image>
          组团成功后48h内转入买方钱包
        </view>
        <view class="added-bonus">
          <view>
            <image src="@/static/images/add-personal-space/icon2.png"></image>
          </view>
          <view class="added-bonus-text">
            <text class="text-one">一次性购买“成团最低销量”的额外奖励：</text>
            <text class="text-two">赠送1个DAO NFT</text>
          </view>
        </view>
        <view class="selling-switch">
          <view class="switch-title"> 启动此团购 </view>
          <view class="switch-btn">
            <tui-switch @change="change" color="#1CC4C7" borderColor="#57E4E7"></tui-switch>
          </view>
        </view>
      </view>
      <view>
        <view class="group-star-level">
          <view class="group-star-level-banner">批量购买/组织团购方案</view>
          <view class="star-num">
            星级指数四
            <uni-icons type="star-filled" size="16" color="#FFC75B"></uni-icons>
          </view>
          <view class="star-level-condition">
            <view class="condition-top">
              <text>星级越高，最低量要求越高</text>
              <text>5件</text>
            </view>
            <view class="condition-bottom">价格更优惠，推主收益也更高</view>
          </view>
        </view>
        <view class="preferential-price">
          团购优惠售价 1700.00T豆
          <view class="price-transition">
            <view>≈</view>
            69.00
            <view class="units">CNY</view>
          </view>
        </view>
        <view class="role-earnings">
          <view class="role-title">
            <view>销售贡献者—DAO NFT推广者</view>
            <view class="title-b">募资贡献者—DAO NFT推广者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
          <view class="role-title">
            <view>销售贡献者—DAO NFT分享者</view>
            <view class="title-b">募资贡献者—DAO NFT分享者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="viewing-all-roles"> 查看所有角色收益 </view>
        <view class="wallet-time">
          <image src="@/static/images/product-detail/clock.png"></image>
          组团成功后48h内转入买方钱包
        </view>
        <view class="added-bonus">
          <view>
            <image src="@/static/images/add-personal-space/icon2.png"></image>
          </view>
          <view class="added-bonus-text">
            <text class="text-one">一次性购买“成团最低销量”的额外奖励：</text>
            <text class="text-two">赠送1个DAO NFT</text>
          </view>
        </view>
        <view class="selling-switch">
          <view class="switch-title"> 启动此团购 </view>
          <view class="switch-btn">
            <tui-switch @change="change" color="#1CC4C7" borderColor="#57E4E7"></tui-switch>
          </view>
        </view>
      </view>
      <view>
        <view class="group-star-level">
          <view class="group-star-level-banner">批量购买/组织团购方案</view>
          <view class="star-num">
            星级指数五
            <uni-icons type="star-filled" size="16" color="#FFC75B"></uni-icons>
          </view>
          <view class="star-level-condition">
            <view class="condition-top">
              <text>星级越高，最低量要求越高</text>
              <text>5件</text>
            </view>
            <view class="condition-bottom">价格更优惠，推主收益也更高</view>
          </view>
        </view>
        <view class="preferential-price">
          团购优惠售价 1700.00T豆
          <view class="price-transition">
            <view>≈</view>
            69.00
            <view class="units">CNY</view>
          </view>
        </view>
        <view class="role-earnings">
          <view class="role-title">
            <view>销售贡献者—DAO NFT推广者</view>
            <view class="title-b">募资贡献者—DAO NFT推广者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
          <view class="role-title">
            <view>销售贡献者—DAO NFT分享者</view>
            <view class="title-b">募资贡献者—DAO NFT分享者</view>
          </view>
          <view class="role-content">
            <view class="get-earnings">
              <view class="get-text">您可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
            <view class="highest-earnings">
              <view class="get-text">最高可获收益</view>
              <view class="get-num">
                <view class="num-left">
                  <image src="@/static/images/product-detail/moneyG.png"></image>
                  69.00
                </view>
                <view class="price-transition">
                  <view>≈</view>
                  69.00
                  <view class="units">CNY</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="viewing-all-roles"> 查看所有角色收益 </view>
        <view class="wallet-time">
          <image src="@/static/images/product-detail/clock.png"></image>
          组团成功后48h内转入买方钱包
        </view>
        <view class="added-bonus">
          <view>
            <image src="@/static/images/add-personal-space/icon2.png"></image>
          </view>
          <view class="added-bonus-text">
            <text class="text-one">一次性购买“成团最低销量”的额外奖励：</text>
            <text class="text-two">赠送1个DAO NFT</text>
          </view>
        </view>
        <view class="selling-switch">
          <view class="switch-title"> 启动此团购 </view>
          <view class="switch-btn">
            <tui-switch @change="change" color="#1CC4C7" borderColor="#57E4E7"></tui-switch>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部 -->
    <view class="buy-product-tool">
      <view class="entrepot-tool">
        <view class="entrepot-icon">
          <image src="@/static/images/product-detail/dialog.png"></image>
          <text>联系发行者</text>
        </view>
        <!-- <view class="entrepot-text">组织团购</view> -->
        <view class="entrepot-btn">
          <view>批量购买</view>
          <view>组织团购</view>
        </view>
      </view>
    </view>
    <view class="fixation"></view>
  </view>
</template>

<script>
import { oss } from '@/utils/tweebaa'
import { OSS_CDN } from '@/res/constants'

export default {
  mixins: [oss],
  data() {
    return {
      background: ['color1', 'color2', 'color3'],
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 500,
    }
  },
  methods: {
    backHomepage() {
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style scoped>
/deep/ .uni-navbar__header-container {
  justify-content: center;
  align-items: center;
}
/deep/.uni-switch-input {
  /* border: 4rpx solid #57e4e7; */
}
/deep/.uni-switch-input-checked {
  background: #1cc4c7;
  opacity: 0.65;
  /* border: 4rpx solid #57e4e7; */
  box-shadow: 0 4rpx 8rpx 4rpx rgba(0, 163, 166, 0.2), inset 0 6rpx 4rpx #00adb0;
  /* border-radius: 50px; */
}
/deep/.uni-switch-input::before {
  content: '';
  width: 52rpx;
  height: 52rpx;
  background: #c4cfeb;
  opacity: 0.65;
  border: 2px solid #eff3fc;
  box-shadow: 0px 6px 12px 2px rgba(208, 214, 229, 0.5);
  border-radius: 50px;
}
</style>

<style lang="scss" scoped>
@import '@/utils/tweebaa.scss';
.box {
  height: 160rpx;
}
.box-bg {
  background: #ffffff;
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70rpx;
  .banner-text {
    font-size: 32rpx;
    font-weight: 400;
  }
  .finish-btn {
    background: #0187fa;
    border-radius: 40rpx;
    width: 120rpx;
    height: 68rpx;
    text-align: center;
    line-height: 68rpx;
    color: #ffffff;
    font-size: 28rpx;
  }
}
.swiper-img {
  height: 130px;
}
.swiper-item {
  padding: 30rpx;
  image {
    border-radius: 12px;
    width: 100%;
    height: 200rpx;
  }
}
.routine-one {
  display: flex;
  padding: 30rpx 30rpx 0 30rpx;
  .routine-one-left {
    margin-right: 30rpx;
    position: relative;
    image {
      border-radius: 24rpx;
      width: 120px;
      height: 170px;
    }
    .corner-mark {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: linear-gradient(89.65deg, #17a2de 3.18%, #71edc8 99.72%);
      opacity: 0.88;
      font-size: 11px;
      color: #ffffff;
      padding: 10rpx;
      border-radius: 24rpx 0 24rpx 0;
    }
  }
  .routine-one-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right-one {
      display: flex;
      background: #f4f7fd;
      border-radius: 5px;
      .right-one-main {
        padding: 22rppx 6rpx;
        background: #e4efff;
        border-radius: 5px;
        width: 39px;
        height: 49px;
        color: #0187fa;
        font-size: 10px;
        margin-right: 16rpx;
      }
      .right-one-content {
        padding: 10rpx 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content-text {
          color: #1f2228;
          font-size: 14px;
        }
        .content-money {
          display: flex;
          align-items: center;
          view {
            font-size: 24rpx;
            color: #4b4b4c;
          }
          image {
            margin: 0 10rpx;
            width: 24rpx;
            height: 24rpx;
          }
          text {
            font-weight: 600;
            font-size: 13px;
            color: #4b4b4c;
          }
        }
      }
    }
    .right-two {
      margin-top: 10rpx;
      padding: 6rpx 0 6rpx 14rpx;
      font-size: 12px;
      color: #747480;
      background: #f4f7fd;
      border-radius: 5px;
    }
    .right-three {
      margin: 18rpx 0;
      font-size: 12px;
      line-height: 17px;
      color: #747480;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical; /*设置对齐模式*/
      -webkit-line-clamp: 2; /*设置多行的行数，示例为2行*/
    }
    .no-discount {
      background: oss('/product-detail/productBg.png') no-repeat;
      background-size: 100% 100%;
      .discount-top {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #e44575;
        font-size: 26rpx;
        height: 48rpx;
      }
      .discount-bottom {
        display: flex;
        justify-content: space-around;
        .discount-money {
          // flex: 1;
          .money-type {
            color: #4b4b4c;
            font-size: 20rpx;
            margin: 10rpx 0;
          }
          .money-num {
            font-weight: 600;
            font-size: 28rpx;
            color: #ef4c25;
            image {
              width: 26rpx;
              height: 26rpx;
              margin-right: 3rpx;
            }
          }
        }
      }
    }
  }
}
.individuation-content {
  margin: 0 30rpx;
  .individuation-title {
    padding: 0 14px;
    width: 200px;
    margin-bottom: 16rpx;
    background: url('@/static/images/add-personal-space/bg1.png') no-repeat;
    background-size: 100% 100%;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    font-family: 'yixinkaijiahei';
  }
  .individuation-text {
    font-size: 14px;
    line-height: 22px;
    text-align: justify;
    color: #4b4b4c;
  }
  .individuation-write {
    margin: 34rpx 0;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #1f2228;
    image {
      width: 44rpx;
      height: 44rpx;
      margin-right: 10rpx;
    }
  }
}
.organize-group-purchase {
  margin: 0 30rpx;
  .group-title {
    font-weight: 500;
    font-size: 14px;
    color: #4f4f50;
    margin-bottom: 22px;
  }
  .group-star-level {
    background: #4b4b4c;
    border-radius: 12px;
    padding: 24px 16px 15px 16px;
    margin-bottom: 20px;
    position: relative;
    .group-star-level-banner {
      position: absolute;
      top: -7px;
      left: 0;
      color: #ffffff;
      // box-shadow: 0px 1px 1px #dd7f7d;
      background: url('@/static/images/add-personal-space/bg2.png') no-repeat;
      background-size: 100% 100%;
      font-weight: 400;
      font-size: 13px;
      width: 184px;
      padding: 8rpx 0 8rpx 25rpx;
    }
    .star-num {
      font-weight: 500;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 20rpx;
    }
    .star-level-condition {
      background: #2c2c2d;
      border-radius: 12px;
      padding: 9px 13px;
      .condition-top {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #ffc75b;
        margin-bottom: 10rpx;
      }
      .condition-bottom {
        font-size: 12px;
        color: #fee5b5;
      }
    }
  }
  .preferential-price {
    font-size: 14px;
    color: #1f2228;
    display: flex;
    align-items: center;
    padding-bottom: 30rpx;
  }
  .role-earnings {
    border-top: 0.5px solid #f0e3e0;
    .role-title {
      font-size: 28rpx;
      color: #1f2228;
      margin: 20rpx 0 30rpx 0;
      .title-b {
        font-weight: 600;
      }
    }
    .role-content {
      display: flex;
      .get-earnings {
        // margin-right: 50rpx;
        flex: 1;
        .get-text {
          font-weight: 600;
          font-size: 28rpx;
          color: #b0624f;
          margin-bottom: 10rpx;
        }
        .get-num {
          display: flex;
          align-items: center;
          .num-left {
            color: #b0624f;
            font-weight: 600;
            font-size: 30rpx;
            image {
              width: 26rpx;
              height: 26rpx;
            }
          }
        }
      }
      .highest-earnings {
        flex: 1;
        border-left: 0.5px solid #cb9c91;
        padding-left: 30rpx;
        .get-text {
          font-weight: 600;
          font-size: 28rpx;
          color: #b0624f;
          margin-bottom: 10rpx;
        }
        .get-num {
          display: flex;
          align-items: center;
          .num-left {
            color: #b0624f;
            font-weight: 600;
            font-size: 30rpx;
            image {
              width: 26rpx;
              height: 26rpx;
            }
          }
        }
      }
    }
  }
  .viewing-all-roles {
    margin: 30rpx 0;
    font-size: 24rpx;
    color: #0187fa;
    text-align: center;
  }
  .wallet-time {
    // margin: 0 30rpx;
    padding: 0 16rpx;
    background: #f0d5d2;
    border-radius: 30px;
    height: 58rpx;
    display: flex;
    align-items: center;
    font-size: 24rpx;
    color: #b85738;
    image {
      padding-right: 10rpx;
      width: 28rpx;
      height: 28rpx;
    }
  }
  .added-bonus {
    background: linear-gradient(87.37deg, #dbe1ff 2.35%, #f7e0ff 49.83%, #e0eeff 95.08%);
    backdrop-filter: blur(3px);
    border-radius: 12px;
    display: flex;
    padding: 10rpx;
    margin: 20rpx 0 30rpx 0;
    image {
      width: 48px;
      height: 48px;
      margin-right: 20rpx;
    }
    .added-bonus-text {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .text-one {
        font-weight: 500;
        font-size: 13px;
        color: #0187fa;
      }
      .text-two {
        font-size: 13px;
        color: #1f2228;
      }
    }
  }
  .selling-switch {
    background: #f4f7fd;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx 44rpx;
    margin-bottom: 64rpx;
    .switch-title {
      display: flex;
      align-items: center;
      font-size: 26rpx;
      color: #4b4b4c;
    }
  }
}
.price-transition {
  padding-left: 10rpx;
  display: flex;
  color: #b85738;
  font-size: 12px;
}
.buy-product-tool {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  background: #fff;
  padding: 0 30rpx 30rpx 30rpx;
  .entrepot-tool {
    padding: 20rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .entrepot-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 20rpx;
      text {
        margin-top: 10rpx;
        color: #1f2228;
        font-size: 13px;
      }
      image {
        width: 36rpx;
        height: 36rpx;
      }
    }
    .entrepot-text {
      margin-left: 30rpx;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(269.34deg, #f37255 0.56%, #f14a54 99.41%);
      border-radius: 50px;
      color: #ffffff;
      font-size: 16px;
      height: 88rpx;
      // padding: 0 22rpx;
    }
    .entrepot-btn {
      flex: 1;
      display: flex;
      justify-content: space-between;
      view {
        flex: 1;
        margin-left: 30rpx;
        height: 88rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #ffffff;
        background: linear-gradient(269.34deg, #f37255 0.56%, #f14a54 99.41%);
        border-radius: 50px;
      }
    }
  }
}
.fixation {
  height: 120rpx;
}
</style>
