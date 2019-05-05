/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 构建动态路由
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-17 23:31:51
 * @LastEditTime: 2019-05-05 13:42:55
 */
import { error } from '@/utils/error'
// import adminUser from '@/pages/adminUser'

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
function buildRouter (resource) {

  try {
    resource = resource.map((v) => {
      let newResource = {}

      for (let key in v) {
        switch (key) {
          case 'id': newResource['id'] = v[key]; break
          case 'name': newResource['name'] = v[key]; break
          case 'pid': newResource['pid'] = v[key]; break
          case 'icon': newResource['meta'] = { title: v.name, icon: v.icon }; break
          case 'route_path': newResource['path'] = v[key] || '/'; break
          case 'component_path': newResource['component'] = loadPage(v[key]); break
          case 'is_active': newResource['is_show'] = v[key]; break
        }
      }

      return newResource
    })

    //没有父节点的数据
    let parents = resource.filter(value => !value.pid)
                
    //有父节点的数据
    let children = resource.filter(value => value.pid)
    
    //调用转换方法
    translator(parents, children)
    
    //返回最终的结果
    return parents
  } catch (err) {
    error('操作菜单构建失败：', err)
  }
}

//定义转换方法的具体实现
function translator (parents, children) {
  //遍历父节点数据
  parents.forEach((parent) => {

    //遍历子节点数据
    children.forEach((current, index) => {
      //此时找到父节点对应的一个子节点
      if (current.pid === parent.id) {
        //对子节点数据进行深复制，这里只支持部分类型的数据深复制，对深复制不了解的童靴可以先去了解下深复制
        let temp = JSON.parse(JSON.stringify(children))
        //让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
        temp.splice(index, 1)
        //让当前子节点作为唯一的父节点，去递归查找其对应的子节点
        translator([current], temp)
        //把找到子节点放入父节点的children属性中
        typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
      }
    }
    )
  }
  )
}

export { buildRouter }