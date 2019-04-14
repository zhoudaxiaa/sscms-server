/**
 * @description: 根据路径创建一个import 函数（懒加载路由）
 * @param {String} page 组件路径地址
 * @return: Function 懒加载路由函数
 */
function loadPage(page) {
  return () => import(`@/pages/${page}`)
}


/**
 * @description: 根据后台传来的一维资源菜单，转成二维资源菜单
 * @param {array} 一维资源菜单
 * @return: 二维资源菜单数组
 */
function buildRouter(list = []) {
  let temp = {},
    Router = []

  if (!(list instanceof Array) || list.length === 0) return []

  // 过滤掉不显示的路由
 try {
  list
    .filter(v => v.isActive)
    .forEach(v => {
      // 转成对象数组循环
      temp[v._id] = v // 建立以_id 为属性的对象
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
      Router.push(renderRouter(current, true))
    }
  }
 } catch (err) {
   console.log(`动态菜单构建失败，错误：${err}`)
 }
 
 return Router

}

/**
 * @description: 渲染路由菜单
 * @param {object} source 资源菜单对象
 * @param {boolean} parent 是否是根菜单
 * @return: 路由菜单对象
 */
function renderRouter(source, parent = false) {
  let router = {}

  if (parent) {
    router.path = '/'
    router.component = loadPage('layout') //父组件
    router.children = source.children
  } else {
    router.path = source.routePath
    router.component = loadPage(source.componentPath) // 导入菜单组件
  }

  router.name = source.name
  router.meta = {
    title: source.comments,
    icon: source.icon
  }
  return router
}

export { buildRouter }