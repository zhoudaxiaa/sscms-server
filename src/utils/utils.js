/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 公用的工具函数
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-13 21:36:25
 * @LastEditTime: 2019-04-20 21:37:12
 */

/**
 * @description: 深拷贝
 * @param {object} arr 要拷贝的对象
 * @return: 
 */
export function deepCopy(arr) {
  var obj = arr instanceof Array ? [] : {}
  for (var item in arr) {
      if (typeof arr[item] === "object") {
          obj[item] = deepCopy(arr[item]);
      } else {
          obj[item] = arr[item];
      }
  }
  return obj;
}

/**
 * @description: 把一维资源生成资源树
 * @param {type} 
 * @return: 
 */
export function buildResourceTree (resource) {

  resource = resource.map((v) => {
    let newResource = {}

    for (let key in v) {
      switch (key) {
        case '_id': newResource['id'] = v[key]; break
        case 'comments': newResource['label'] = v[key]; break
        case 'parentId': newResource['parentId'] = v[key]; break
      }
    }

    return newResource
  })


  //没有父节点的数据
  let parents = resource.filter(value => value.parentId == '0')
              
  //有父节点的数据
  let children = resource.filter(value => value.parentId !== '0')

  //定义转换方法的具体实现
  let translator = (parents, children) => {
    //遍历父节点数据
    parents.forEach((parent) => {

      //遍历子节点数据
      children.forEach((current, index) => {
        //此时找到父节点对应的一个子节点
        if (current.parentId === parent.id) {
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
  
  //调用转换方法
  translator(parents, children)
  
  //返回最终的结果
  return parents
}