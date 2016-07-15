/*
 * page controller
 * @author 
 * Auto build by NEI Builder
 */

'use strict';

let BaseController = require('./base');

class PageController extends BaseController {
    
    index(req, res, next) {
        res.render('pages/index.ftl', {
            title: '首页',
            description: 'Todo web app 首页'
        });
    }
    
    login(req, res, next) {
        res.render('pages/login.ftl', {
            title: '登录页面',
            description: 'Todo web app 登录页面'
        });
    }
    
    pageDetail:todoId(req, res, next) {
        res.render('page/detail.ftl', {
            title: 'Todo 详情页',
            description: ''
        });
    }
    
}

module.exports = new PageController;