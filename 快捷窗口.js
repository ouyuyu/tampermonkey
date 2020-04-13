// ==UserScript==
// @name         演示环境超管平台增强版
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  演示环境，超级管理平台的增强插件，实用功能！
// @author       You
// @match        http://aics.ths123.com:10080/callout-ths/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js
// @icon         http://aics.ths123.com:10080/callout-ths/public/favicon.png
// @grant        none
// ==/UserScript==


(function() {
    //快捷链接配置页，大家可按需根据自定义添加
    var url
    var url_temp
    var templateId
    var source = "phone_waihu_"
    var tamplate_data
    var date
    

    var menuobj = [
        {
            "url":"http://aics.ths123.com:10080/callout-ths/public/index.html#/task/template/config/2000324/2/4000000/2/dialogue",
            "title":"快捷窗口:两融到期"
        },
        {
            "url":"http://aics.ths123.com:10080/callout-ths/public/index.html#/task/template/config/2000452/2/4000000/2/dialogue",
            "title":"中信证券临柜新开户回访"
        },
        {
            "url":"http://aics.ths123.com:10080/callout-ths/public/index.html#/task/template/config/2000612/2/4000000/2/dialogue",
            "title":"ouyangtest"
        },
        {
            "url":"http://aics.ths123.com:10080/callout-ths/public/index.html#/task/template/config/2000522/2/4000000/2/dialogue",
            "title":"客户经济关系变更"
        },
        {
            "url":"http://aics.ths123.com:10080/callout-ths/public/index.html#/task/template/config/2000653/2/4000000/2/dialogue",
            "title":"东吴存量"
        }
    ]


    setTimeout(function(){
        var header=$('.ant-layout-header>div')       //定义header变量
        console.log(header.text())
        for (var i in menuobj)
        {
            menuobj[i]["url"]='"'+ menuobj[i]["url"] +'"'
            header.append('<a href='+menuobj[i]["url"]+'style="color:MidnightBlue;margin:10px">'+menuobj[i]["title"]+'</a>')
        }
        header.append('<a href="http://aics.ths123.com:10080/callout-ths/public/index.html#/account/manage/profile/81000002/2/task" style="color:MidnightBlue;margin:10px">同花顺测试账户</a>')
        header.append('<a href="http://aics.ths123.com:10080/callout-thirdparty/public/index.html#/" style="color:Darkorange ;margin:10px" target="_blank" class="ant-btn">客户管理平台</a>')
    },2000)

    
    $(function(){setInterval(function(){
        url_temp = url
        url = window.location.href
        if (url_temp != url){
            console.log(1)
            if (/config\/(.*?)\//.test(url)){
                templateId = url.match(/config\/(.*?)\//)[1]

                $.get("http://aics.ths123.com:10080/callout-ths/background/template/detail?templateId="+templateId,function(data){
                    tamplate_data=data
                    source = data.data.source
                    date =  formatTime(data.data.createInfo.time,'Y年M月D日 h:m:s')
                })
            }
        }

        //让网页标题显示当前模板
        var title2=$('.ant-layout-content>div>div:first>div:nth-child(2)>div>div:first>h1').text()
        if(title2.length>0){
            //console.log(title2)
            $('title').text(title2)
        }

        //显示source
        var titlebox=$('.ant-layout-content>div>div>div:first>span:last')

        if (/config\/(.*?)\//.test(url)){
            //titlebox .append('<span><a class="copy_source" size=40px>'+source+'</a></span>')
            titlebox .html('<span><a class="copy_source" size=40px>'+source+'</a></span>')
            $('.copy_source').bind("click",function(){
                if(confirm(tamplate_data.data.createInfo.userName+' 创建于：\n'+date+'\n是否要打开对话页？')){
                    window.open("http://172.20.208.127:40080/hcswebapp/pc?source="+source)
                }
            })
        }
    },2000)})
})();


// 格式化日期，如月、日、时、分、秒保证为2位数
function formatNumber (n) {
    n = n.toString()
    return n[1] ? n : '0' + n;
}
// 参数number为毫秒时间戳，format为需要转换成的日期格式
function formatTime (number, format) {
    let time = new Date(number)
    let newArr = []
    let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
    newArr.push(time.getFullYear())
    newArr.push(formatNumber(time.getMonth() + 1))
    newArr.push(formatNumber(time.getDate()))

    newArr.push(formatNumber(time.getHours()))
    newArr.push(formatNumber(time.getMinutes()))
    newArr.push(formatNumber(time.getSeconds()))

    for (let i in newArr) {
        format = format.replace(formatArr[i], newArr[i])
    }
    return format;
}



// $(document).ajaxSend(function(){
//     console.log(12)
// })
// $(document).ajaxComplete(function(){
//     console.log(34)
// })
// $(document).ajaxStart(function(){
//     console.log(56)
// })
// $(document).ajaxStop(function(){
//     console.log(78)
// })
// $(document).ajaxSuccess(function(){
//     console.log(90)
// })
// $('[role|="tablist"]').ajaxSuccess(function(){
//     console.log(90)
// })
