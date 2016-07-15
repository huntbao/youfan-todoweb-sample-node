/*
 * config file for jtr server
 * @author 
 * Auto build by NEI Builder
 */
var path = require('path');
module.exports = {
    /* 根目录 */
    webRoot: '/Users/huntbao/youfan-todoweb-sample-node/public/',
    /* 视图目录 */
    viewRoot: '/Users/huntbao/youfan-todoweb-sample-node/view/',
    /* 路由 */
    routes: {
      //"ALL /api/*": "INPUT YOUR SEVER HOST",
      "GET /page/detail/:todoId": {type: 'tpl', name: 'Todo 详情页', index: 0, list: [{"id":11141,"path":"page/detail"}]},
      "GET /login": {type: 'tpl', name: '登录页面', index: 0, list: [{"id":11031,"path":"pages/login"}]},
      "GET /index": {type: 'tpl', name: '首页', index: 0, list: [{"id":11032,"path":"pages/index"}]},
      "PUT /api/todos/:todoId": {id: '15818', type: 'api', path: 'put/api/todos/_/todoId/data'},
      "DELETE /api/todos/:todoId": {id: '15763', type: 'api', path: 'delete/api/todos/_/todoId/data'},
      "PUT /api/todos": {id: '15762', type: 'api', path: 'put/api/todos/data'},
      "POST /api/todos": {id: '15760', type: 'api', path: 'post/api/todos/data'},
      "GET /api/todos": {id: '15759', type: 'api', path: 'get/api/todos/data'}
      
    },
    /* 是否自动打开浏览器 */
    launch: true,
    /* 端口 */
    port: 8002,
    /* nei项目的在线数据url, 没有该字段时使用本地mock数据 */
    //neiApi: 'http://nei.hz.netease.com/api/parameter/getTestData?api&type=%s&id=%s',
    /* 同步模块mock数据路径 */
    mockTpl: '/Users/huntbao/youfan-todoweb-sample-node/mock.data/template/',
    /* 异步接口mock数据路径 */
    mockApi: '/Users/huntbao/youfan-todoweb-sample-node/mock.data/interface/',
    /* 模板后缀 */
    viewExt: '.ftl',
    /* 模板引擎 */
    engine: 'ejs'
};