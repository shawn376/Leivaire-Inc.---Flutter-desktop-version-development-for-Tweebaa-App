# tweebaa app project

## project run

1. This project is developed based on uniapp [https://uniapp.dcloud.net.cn/quickstart.html#]
1. Find the tw-env.js file from the administrator and put it in the root directory
1. If tw-env.js cannot be found, an error will be reported `[plugin:vite:import-analysis] Cannot find module '../tw-env.js' from '../main.js'`
1. Use hbuidler to run the project to chrome or real machine

Remember run the command 'npm install' and 'npm run pages' in terminal before running

## Various documents

- API documentation: [https://doc.weixin.qq.com/doc/w3_AVoAQQaJAFk64JKaUHyR0SuNCKaUY?scode=AEQAMAfHAFoqEyhHksAVoAQQaJAFk]
- Voice internationalization: [https://doc.weixin.qq.com/doc/w3_AVoAQQaJAFkLZh3nt81QXKnU2LBGC?scode=AEQAMAfHAFooLIJUq8AVoAQQaJAFk]

## Branch management

- master: online version branch
- develop: develop merge branch
- dev\_[name]: personal development branch

Note: The branches starting with 'dev\_' are all personal branches. One person can create multiple personal branches and distinguish the branch names by himself.

## Picture planning

- 'static/icons': small icons, used by multiple pages, unified in png format, easy to find
- 'static/image': place the image that each page needs to use separately, named with the file path
  - For example, the page is '/pages/chat/index', then the image is placed in 'static/image/chat.index/123.png'

## Development Tips

1. The integrated components are placed in 'pages/tools/components.vue', which can be previewed and used
2. Modify the DEVELOP_URL in env.js to automatically jump to the current development page when the project is refreshed
3. Use internationalization prompts in vue3 js
   uni.$t('xxxx')

## vscode plugin recommendation

### Required plugin

- Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- i18n Ally: <https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally>
- Vetur: <https://marketplace.visualstudio.com/items?itemName=octref.vetur>

### Optional plugins

- Tabnine AI Autocomplete: <https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode>
