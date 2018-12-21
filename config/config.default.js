'use strict'
const path = require('path')

module.exports = appInfo => {
  const config = {}

  config.name = 'Zhongxia Blog'

  config.description = 'Zhongxia Blog | 记录、总结、成长'

  // logo , 默认为 config.name
  config.site_logo = ''

  config.site_icon = 'http://p8x4ztqeg.bkt.clouddn.com/icon/icon.svg'

  // debug 为 true 时，用于本地调试
  config.debug = true

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519887194138_3450'

  config.host = 'http://todo.izhongxia.com'

  config.session_secret = 'egg_todo_zhongxia' // 务必修改

  // add your config here
  config.middleware = ['locals', 'authUser', 'blockUser', 'errorPage']

  config.authUser = {
    enable: true,
    match: '/'
  }

  // 是否允许直接注册（否则只能走 github 的方式）
  config.allow_sign_up = false

  // cdn host，如 http://cnodejs.qiniudn.com
  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || '' // 静态文件存储域名

  config.mini_assets = process.env.EGG_MINI_ASSETS || false

  // 版块
  config.tabs = [['share', '分享'], ['ask', '问答'], ['source', '源码'], ['dialy', '记账']]

  // RSS配置
  config.rss = {
    title: 'Zhongxia Blog: 记录、总结、成长',
    link: 'http://blog.izhongxia.com',
    language: 'zh-cn',
    description: 'Zhongxia BLog: 记录、总结、成长',
    // 最多获取的RSS Item数量
    max_rss_items: 50
  }

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  config.qn_access = {
    accessKey: 'test',
    secretKey: 'test',
    bucket: 'test',
    origin: 'http://test.com',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx'
  }

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/'
  }

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs'
    }
  }

  config.ejs = {
    layout: 'layout.html'
  }

  config.avatars_allow_hostname = [
    'avatars0.githubusercontent.com',
    'avatars1.githubusercontent.com',
    'avatars2.githubusercontent.com',
    'avatars.githubusercontent.com',
    'www.gravatar.com',
    'gravatar.com',
    'www.google-analytics.com'
  ]

  config.auth_cookie_name = 'node_club'
  config.admins = {
    ADMIN_USER: true,
    zhongxia: true
  }

  config.siteFile = {
    '/favicon.ico': '/public/images/cnode_icon_32.png'
  }

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0'
    }
  }

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/egg_cnode',
    options: {
      server: { poolSize: 20 }
    }
  }

  // passport
  config.passportGithub = {
    key: process.env.EGG_PASSPORT_GITHUB_CLIENT_ID || '',
    secret: process.env.EGG_PASSPORT_GITHUB_CLIENT_SECRET || ''
  }

  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass'
  }

  // 邮箱配置
  config.mail_opts = {
    host: 'smtp.sina.com',
    port: 25,
    auth: {
      user: 'test@sina.com',
      pass: 'test'
    },
    ignoreTLS: true
  }

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.EGG_ALINODE_APPID || '',
    secret: process.env.EGG_ALINODE_SECRET || ''
  }

  // 每日最该发帖数量
  config.topic = {
    perDayPerUserLimitCount: 10
  }

  config.list_topic_count = 20

  // 每个 IP 每天可创建用户数
  config.create_user_per_ip = 1000

  config.search = 'local' // 'google', 'baidu', 'local'

  config.security = {
    csrf: {
      ignore: '/api/*/*'
    }
  }

  config.default_page = 1
  config.default_limit = 20

  return config
}
