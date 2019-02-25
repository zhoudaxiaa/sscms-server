const req = require.context('./', false, /(?<!index)\.js$/)
const requireAll = req => req.keys().forEach(req)

requireAll(req)

const Mock = require('mockjs')

// 模拟网络传输耗时
Mock.setup({
  timeout: 0 - 3000
})
