/**
 * 直接访问服务器文件地址
 * 注意点：此方式只适合打开服务器某个文件链接
 */

var aaaa = "https://iot.xiaofuonline.com//WechatMedical/Public/model/simple.xls";
var link = document.createElement("span");
link.onclick = function() {
    window.open(aaaa);
}
link.click();


/**
 * 从服务器获取Excel数据，转换成xls编码，然后使用a标签下载
 * 注意点：Firefox浏览器需要将标签添加到dom中才能下载
 * data为后台返回数据，需要使用encodeURIComponent()转码，不然生成的表格不换行
 */
var aaaa = "data:text/xls;charset=utf-8,\ufeff" + encodeURIComponent(data);
var link = document.createElement("a");
var filename = `健康监测数据表-姓名 2018-08-15`;

link.href = aaaa;
link.download = filename + ".xls";
document.body.appendChild(link);
link.style.display = 'none';
link.click();