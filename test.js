// // var data =
// //   '[{"_id":"B1vO0x4mZ","label":"contentManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"content","componentPath":"content/index","comments":"文档列表管理","__v":0,"icon":"","date":"2017-06-18T13:21:51.366Z","sortId":1,"isActive":true},{"_id":"H1kjttNg-","__v":0,"comments":"用户管理","label":"adminUser","parentId":"SkFHdYElb","type":"0","api":"","routePath":"adminUser","componentPath":"adminUser/index","icon":"","date":"2017-05-13T13:26:46.581Z","sortId":1,"isActive":true},{"_id":"ryVxhlE7-","label":"contentCategoryManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"contentCategory","componentPath":"contentCategory/index","comments":"文档类别管理","__v":0,"icon":"","date":"2017-06-18T13:11:07.828Z","sortId":1,"isActive":true},{"_id":"BJmnKKVlZ","__v":0,"comments":"角色管理菜单","label":"roleManager","parentId":"SkFHdYElb","type":"0","api":"","routePath":"adminGroup","componentPath":"adminGroup/index","icon":"","date":"2017-05-13T13:27:07.469Z","sortId":2,"isActive":true},{"_id":"rkI6YtEgW","__v":0,"comments":"资源管理菜单","label":"resourceManage","parentId":"SkFHdYElb","type":"0","routePath":"adminResource","api":"","componentPath":"adminResource/index","icon":"","date":"2017-05-13T13:27:25.717Z","sortId":3,"isActive":true},{"_id":"HJwby-4mW","label":"editContentFunction","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"editContent/:id","componentPath":"content/contentForm","comments":"文档编辑页面","__v":0,"icon":"","date":"2017-06-18T13:24:14.631Z","sortId":4,"isActive":false},{"_id":"BJxHyZV7Z","label":"tagManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"contentTags","componentPath":"contentTag/index","comments":"标签内容管理和维护","__v":0,"icon":"","date":"2017-06-18T13:25:12.506Z","sortId":5,"isActive":true},{"_id":"rJFILtEdb","label":"dataBakManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"backUpData","icon":"","componentPath":"backUpData/index","comments":"数据备份功能","__v":0,"date":"2017-08-18T15:22:56.891Z","sortId":5,"isActive":true},{"_id":"rJ4_1WEQb","label":"contentMessageManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"contentMessages","componentPath":"contentMessage/index","comments":"用户留言管理","__v":0,"icon":"","date":"2017-06-18T13:26:04.111Z","sortId":6,"isActive":true},{"_id":"S1M5Vw6u-","label":"sysTermLogsManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"systemOptionLog","icon":"","componentPath":"systemOptionLog/index","comments":"系统操作日志管理","__v":0,"date":"2017-08-25T08:49:14.356Z","sortId":6,"isActive":true},{"_id":"SJRg1Fyqb","label":"sysTermNoticeManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"systemNotify","icon":"","componentPath":"systemNotify/index","comments":"消息管理设置","__v":0,"date":"2017-09-08T02:22:45.585Z","sortId":7,"isActive":true},{"_id":"H1CNCukcZ","label":"announcementManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"announce","icon":"","componentPath":"announce/index","comments":"公告管理功能","__v":0,"date":"2017-09-08T02:19:33.911Z","sortId":8,"isActive":true},{"_id":"HkOc66ucZ","label":"adsManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"ads","icon":"","componentPath":"ads/index","comments":"广告列表管理","__v":0,"date":"2017-09-15T03:48:32.010Z","sortId":10,"isActive":true},{"_id":"HJ0706u5W","label":"editAdsFunction","type":"0","api":"","parentId":"SkFHdYElb","routePath":"editAds/:id","icon":"","componentPath":"ads/infoForm","comments":"广告编辑功能","__v":0,"date":"2017-09-15T03:51:02.224Z","sortId":11,"isActive":false},{"_id":"r1fTSk65-","label":"sysTemMain","type":"0","api":"","parentId":"SkFHdYElb","routePath":"main","icon":"","componentPath":"main/index","comments":"系统主页","__v":0,"date":"2017-09-18T06:20:42.270Z","sortId":14,"isActive":false},{"_id":"BkcTBYrpf","label":"templateManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"contentTemp","icon":"","componentPath":"contentTemp/index","comments":"模板编辑","__v":0,"date":"2018-05-01T06:14:26.362Z","sortId":20,"isActive":true},{"_id":"HJcUeCU6G","label":"templateConfig","type":"0","api":"","parentId":"SkFHdYElb","routePath":"templateConfig","icon":"","componentPath":"templateConfig/index","comments":"模板配置","__v":0,"date":"2018-05-02T05:44:50.025Z","sortId":22,"isActive":true},{"_id":"SkFHdYElb","__v":0,"comments":"系统管理","label":"systemManage","parentId":"0","type":"0","componentPath":"","icon":"component","routePath":"","api":"","date":"2017-05-13T13:21:04.780Z","sortId":1,"isActive":true},{"_id":"SJlaslEXZ","label":"contentManage","type":"0","api":"","parentId":"0","routePath":"","componentPath":"","comments":"文档信息管理","__v":0,"icon":"documentation","date":"2017-06-18T13:10:15.979Z","sortId":2,"isActive":true}]'

// // renderLeftMenu()

// // function renderLeftMenu () {
// //   let cateList = JSON.parse(data)
// //   console.dir(buildTree(cateList))
// //   // buildTree(cateList)
// // }

// // function buildTree (list) {
// //   let currentArr = []
// //   let temp = {}
// //   let tree = {}
// //   for (let i in list) {
// //     temp[list[i]._id] = list[i]
// //   }
// //   console.log(temp)
// //   for (let i in temp) {
// //     if (temp[i].parentId && temp[i].parentId != '0') {
// //       if (!temp[temp[i].parentId].children) {
// //         temp[temp[i].parentId].children = new Array()
// //       }
// //       let currentTemp = renderTemp(temp[i])
// //       temp[temp[i].parentId].children.push(currentTemp)
// //     } else {
// //       tree[temp[i]._id] = renderTemp(temp[i], true)
// //     }
// //   }

// //   for (var item in tree) {
// //     currentArr.push(tree[item])
// //   }

// //   return currentArr
// // }

// // function renderTemp (temp, parent = false) {
// //   if (parent) {
// //     temp.path = ''
// //     temp.component = 'Layout'
// //   } else {
// //     temp.path = temp.routePath
// //     temp.component = () => 'test'
// //   }
// //   temp.hidden = !temp.isActive
// //   temp.name = temp.label
// //   temp.meta = {
// //     title: temp.label
// //   }
// //   if (temp.icon) {
// //     temp.meta.icon = temp.icon
// //   }
// //   return temp
// // }

function buildRouter(list) {
  let temp = {},
    rootRouter = []

  JSON.parse(list).forEach(v => {
    temp[v._id] = v
  })

  for (let v in temp) {
    let current = temp[v] // 当前资源
    if (current.parentId && current.parentId != '0') {
      // 是否是子菜单
      let parent = temp[current.parentId] // 子菜单的父菜单
      let childrenRouter = renderRouter(current)
      if (!parent.children) parent.children = [] // 父菜单没有children属性就建一个
      parent.children.push(childrenRouter)
    } else {
      // 父菜单
      rootRouter.push(renderRouter(current, true))
    }
  }

  return rootRouter
}

function renderRouter(source, parent = false) {
  let router = {}
  if (parent) {
    router.path = ''
    router.component = 'Layout'
    router.children = source.children
  } else {
    router.path = source.routePath
    // router.component = loadView(source.componentPath)
    router.component = 'component'
  }

  router.hidden = !source.isActive
  router.name = source.name
  router.meta = {
    title: source.name,
    icon: source.icon
  }

  return router
}

const data =
  '[{"_id":"B1vO0x4mZ","name":"contentManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"content","componentPath":"content/index","comments":"文档列表管理","__v":0,"icon":"","date":"2017-06-18T13:21:51.366Z","sortId":1,"isActive":true},{"_id":"H1kjttNg-","__v":0,"comments":"用户管理","name":"adminUser","parentId":"SkFHdYElb","type":"0","api":"","routePath":"adminUser","componentPath":"adminUser/index","icon":"","date":"2017-05-13T13:26:46.581Z","sortId":1,"isActive":true},{"_id":"ryVxhlE7-","name":"contentCategoryManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"contentCategory","componentPath":"contentCategory/index","comments":"文档类别管理","__v":0,"icon":"","date":"2017-06-18T13:11:07.828Z","sortId":1,"isActive":true},{"_id":"BJmnKKVlZ","__v":0,"comments":"角色管理菜单","name":"roleManager","parentId":"SkFHdYElb","type":"0","api":"","routePath":"adminGroup","componentPath":"adminGroup/index","icon":"","date":"2017-05-13T13:27:07.469Z","sortId":2,"isActive":true},{"_id":"rkI6YtEgW","__v":0,"comments":"资源管理菜单","name":"resourceManage","parentId":"SkFHdYElb","type":"0","routePath":"adminResource","api":"","componentPath":"adminResource/index","icon":"","date":"2017-05-13T13:27:25.717Z","sortId":3,"isActive":true},{"_id":"HJwby-4mW","name":"editContentFunction","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"editContent/:id","componentPath":"content/contentForm","comments":"文档编辑页面","__v":0,"icon":"","date":"2017-06-18T13:24:14.631Z","sortId":4,"isActive":false},{"_id":"BJxHyZV7Z","name":"tagManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"contentTags","componentPath":"contentTag/index","comments":"标签内容管理和维护","__v":0,"icon":"","date":"2017-06-18T13:25:12.506Z","sortId":5,"isActive":true},{"_id":"rJFILtEdb","name":"dataBakManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"backUpData","icon":"","componentPath":"backUpData/index","comments":"数据备份功能","__v":0,"date":"2017-08-18T15:22:56.891Z","sortId":5,"isActive":true},{"_id":"rJ4_1WEQb","name":"contentMessageManage","type":"0","api":"","parentId":"SJlaslEXZ","routePath":"contentMessages","componentPath":"contentMessage/index","comments":"用户留言管理","__v":0,"icon":"","date":"2017-06-18T13:26:04.111Z","sortId":6,"isActive":true},{"_id":"S1M5Vw6u-","name":"sysTermLogsManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"systemOptionLog","icon":"","componentPath":"systemOptionLog/index","comments":"系统操作日志管理","__v":0,"date":"2017-08-25T08:49:14.356Z","sortId":6,"isActive":true},{"_id":"SJRg1Fyqb","name":"sysTermNoticeManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"systemNotify","icon":"","componentPath":"systemNotify/index","comments":"消息管理设置","__v":0,"date":"2017-09-08T02:22:45.585Z","sortId":7,"isActive":true},{"_id":"H1CNCukcZ","name":"announcementManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"announce","icon":"","componentPath":"announce/index","comments":"公告管理功能","__v":0,"date":"2017-09-08T02:19:33.911Z","sortId":8,"isActive":true},{"_id":"HkOc66ucZ","name":"adsManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"ads","icon":"","componentPath":"ads/index","comments":"广告列表管理","__v":0,"date":"2017-09-15T03:48:32.010Z","sortId":10,"isActive":true},{"_id":"HJ0706u5W","name":"editAdsFunction","type":"0","api":"","parentId":"SkFHdYElb","routePath":"editAds/:id","icon":"","componentPath":"ads/infoForm","comments":"广告编辑功能","__v":0,"date":"2017-09-15T03:51:02.224Z","sortId":11,"isActive":false},{"_id":"r1fTSk65-","name":"sysTemMain","type":"0","api":"","parentId":"SkFHdYElb","routePath":"main","icon":"","componentPath":"main/index","comments":"系统主页","__v":0,"date":"2017-09-18T06:20:42.270Z","sortId":14,"isActive":false},{"_id":"BkcTBYrpf","name":"templateManage","type":"0","api":"","parentId":"SkFHdYElb","routePath":"contentTemp","icon":"","componentPath":"contentTemp/index","comments":"模板编辑","__v":0,"date":"2018-05-01T06:14:26.362Z","sortId":20,"isActive":true},{"_id":"HJcUeCU6G","name":"templateConfig","type":"0","api":"","parentId":"SkFHdYElb","routePath":"templateConfig","icon":"","componentPath":"templateConfig/index","comments":"模板配置","__v":0,"date":"2018-05-02T05:44:50.025Z","sortId":22,"isActive":true},{"_id":"SkFHdYElb","__v":0,"comments":"系统管理","name":"systemManage","parentId":"0","type":"0","componentPath":"","icon":"component","routePath":"","api":"","date":"2017-05-13T13:21:04.780Z","sortId":1,"isActive":true},{"_id":"SJlaslEXZ","name":"contentManage","type":"0","api":"","parentId":"0","routePath":"","componentPath":"","comments":"文档信息管理","__v":0,"icon":"documentation","date":"2017-06-18T13:10:15.979Z","sortId":2,"isActive":true}]'

console.dir(buildRouter(data))

// console.log(__dirname)
