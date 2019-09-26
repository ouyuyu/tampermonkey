// ==UserScript==
// @name         快捷窗口
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vopoc.ths123.com/callout-ths/public/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js
// @grant        none
// ==/UserScript==

(function() {
    //$(function(){
        setTimeout(function(){
            $('.header___3HlWc').append('<a href="https://vopoc.ths123.com/callout-ths/public/index.html#/task/template/config/2000324/2/4000000/2/dialogue" style="color:white;margin:10px">快捷窗口:两融到期</a>')
            $('.header___3HlWc').append('<a href="https://vopoc.ths123.com/callout-ths/public/index.html#/task/template/config/2000386/2/4000000/2/dialogue" style="color:white;margin:10px">快捷窗口:电信100M</a>')
            $('.header___3HlWc').append('<a href="https://vopoc.ths123.com/callout-ths/public/index.html#/account/manage/profile/81000002/2/task" style="color:white;margin:10px">同花顺测试账户</a>')
            $('.header___3HlWc').append('<a href="http://aics.ths123.com:10080/callout-thirdparty/public/index.html#/" style="color:Darkorange ;margin:10px" target="_blank" class="ant-btn">客户管理平台</a>')
                             },200)
    //让网页标题显示当前模板123
    $(function(){setTimeout(function(){
        var title2
        if($('.title___1-vbA')){title2=$('.title___1-vbA').text()}
        $('title').text(title2)
    },1000)
    })
   // })
})();
