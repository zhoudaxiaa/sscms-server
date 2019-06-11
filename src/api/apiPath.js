/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: api地址
 * @Version: 1.0
 * @Date: 2019-02-17 23:31:50
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-09 18:42:44
 */

export default {
  uploadFile: 'http://127.0.0.1:3000/v1/uploadfile',  // 公共的文件上传（单个）
  
  v1: {  // v1 api
    admin: 'v1/admin',  // 管理员资源
    user: 'v1/user',  // 用户资源
    newestUser: 'v1/user/newest',  // 最新用户资源
    resource: 'v1/resource',  // 管理员拥有权限的资源
    role: 'v1/role', // 角色组资源
    article: 'v1/article',  // 文章资源
    comment: 'v1/comment',  // 评论资源
    newestComment: 'v1/comment/newest',  // 最新评论资源
    category: 'v1/category',  // 文章分类
    nav: 'v1/nav',  // 导航 菜单
    column: 'v1/column',  // 专栏
    tag: 'v1/tag',  // 标签
    ads: 'v1/ads',  // 广告
    adsCategory: 'v1/ads-category',  // 广告分类
    siteConfig: 'v1/site-config',  // 站点配置
  }
}
