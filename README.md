# tweebaa app 项目

## 项目运行

1. 本项目基于 uniapp 开发[https://uniapp.dcloud.net.cn/quickstart.html#]
1. 找管理员要 tw-env.js 文件, 放到根目录
1. 若 tw-env.js 找不到则报错`[plugin:vite:import-analysis] Cannot find module '../tw-env.js' from '../main.js'`
1. 安装 sqlite

```
安装python
npm install node-gyp
npm install sqlite3 --runtime=electron --target=22.0.0 --dist-url=https://atom.io/download/electron --save
```

1. 使用 hbuidler 运行项目到 chrome 或者真机

运行前记得先在终端运行 npm install, npm run pages

## 各种文档

- API 文档: [https://doc.weixin.qq.com/doc/w3_AVoAQQaJAFk64JKaUHyR0SuNCKaUY?scode=AEQAMAfHAFoqEyhHksAVoAQQaJAFk]
- 语音国际化: [https://doc.weixin.qq.com/doc/w3_AVoAQQaJAFkLZh3nt81QXKnU2LBGC?scode=AEQAMAfHAFooLIJUq8AVoAQQaJAFk]

## 分支管理

- master: 线上版本分支
- develop: 开发合并分支
- dev\_[名字]: 个人开发分支

说明: 'dev\_'开头的分支均为个人分支, 一个人可以创建多个个人分支, 自行区别分支名, 开发自测完没有问题, 就可以合并到 develop 分支

## 图片规划

- 'static/icons': 小的图标, 多个页面都会使用到的, 统一 png 格式放一起, 方便寻找
- 'static/image': 放置每个页面需要单独使用的图片, 用文件路径命名
  - 比如页面是'/pages/chat/index', 则图片放在’static/image/chat.index/123.png‘

## 开发提示

1. 综合的组件放在‘pages/tools/components.vue’, 可以预览使用
2. 修改 env.js 里面的 DEVELOP_URL 可以在项目刷新的时候自动跳转到当前开发页面
3. vue3 js 中使用国际化提示
   uni.$t('xxxx')

## 组件

公用组件都放在 pages/common/components.vue 页面

## 文件目录

static: 图片资源
api: api 文件
App.vue: 入口(参见 uniapp)
components: 组件(参见 uniapp)
ecosystem.config.js 配置
generator: 国际化文件生成器
index.html: 入口(参见 uniapp)
js_sdk: js 的 sdk(参见 uniapp)
locale: 国际化文件(参见 uniapp)
main.js: 入口(参见 uniapp)
manifest.json: 配置(参见 uniapp)
nativeplugins: 插件(参见 uniapp)
node_modules
package.json
pages: 页面文件
pages.json: 页面配置(参见 uniapp)
res: 静态数据
store: vuex(参见 uniapp)
thorui_components: ui 组件库
tsconfig.json: 配置(参见 uniapp)
tw-env.js: 本地环境文件
uni_modules: uni 插件(参见 uniapp)
uni.scss: scss(参见 uniapp)
unpackage: 打包后的文件(参见 uniapp)
utils: 公用 js 函数集合

## vscode 插件推荐

### 必选插件

- Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- i18n Ally: <https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally>
- Vetur:<https://marketplace.visualstudio.com/items?itemName=octref.vetur>

### 可选插件

- Tabnine AI Autocomplete: <https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode>
