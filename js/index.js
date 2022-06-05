import top from "./top.js"
 import page1 from "./page1.js";
 import search from "./search.js";
console.log(document.querySelectorAll(".router"));
let loading=document.querySelector('.loadingpage')

let top1 =document.querySelector('.top')
let home=document.querySelector('.home')
top1.onclick=()=>{
    top1.className="current"
    home.className="home"
}
home.onclick=()=>{
    home.className="current"
    top1.className="top"
}
  document.onreadystatechange = function(){
      console.log(document.readyState);
    if(document.readyState == 'complete'){
        loading.style.display="none";
       
    }else if(document.readyState == 'loading'){
        loading.style.display="block";
    }
}
 function Vue(parameters) {
     let vue = {};
     vue.routes = parameters.routes || [];
     vue.init = function () {
         console.log(document.querySelectorAll(".router"));
         document.querySelectorAll(".router").forEach((item, index) => {
             item.addEventListener("click", function (e) {
                 console.log(item);
               
                 let event = e || window.event;
                 event.preventDefault();
                 window.location.hash = this.getAttribute("id");
             }, false);
         });

         window.addEventListener("hashchange", () => {
             vue.routerChange();
         });

         vue.routerChange();
     };
     vue.routerChange = () => {
         let nowHash = window.location.hash;
         let index = vue.routes.findIndex((item, index) => {
             return nowHash == ('#' + item.path);
         });
         if (index >= 0) {
            document.querySelector('.contianer').innerHTML = vue.routes[index].component;
            vue.routes[index].script()
            const input =document.getElementsByClassName("tosearch")[0];
            if(input){
                console.log(input);
                input.addEventListener("click",()=>{
                    console.log(1);
                    window.location.hash = "/search"
                })
            }
           
         } else {
             let defaultIndex = vue.routes.findIndex((item, index) => {
                 return item.path == '*';
             });
             if (defaultIndex >= 0) {
                 window.location.hash = vue.routes[defaultIndex].redirect;
             }
         }
     };

     vue.init();
 }

 new Vue({
     routes: [{
             path: '/top',
             component: `<div class="box">
             <ul></ul></div>`,
             script: top
         }, 
         {
             path: '/home',
             component: `<div id="/search" class="search ">
      <input class="tosearch router"  placeholder="搜索">
  </div>
  <div class="songlist">
      <h2 class="official">官方歌单</h2>
      <ul class="official-ul">
         
      </ul>
      <h2 class="official">达人歌单</h2>
      <ul class="master-ul">
      </ul>
      <h2 class="official">专区</h2>
      <ul class="special-ul">
          <li>
              <div class="list-box">
                  <div class="list-media">
                      <img class="buttom" src="https://y.gtimg.cn/music/common/upload/category_area/4106837.jpeg?max_age=2592000" alt="">
                      <div class="describe">
                          <img class="q-icon" src="https://y.gtimg.cn/music/common/upload/category_area/4104860.jpg?max_age=2592000" alt="">
                          <span>Hi-Res专区</span>
                      </div>
                  </div>
                  <h3>欧美| 流行节奏控</h3>
              </div>
          </li>
      </ul>
  </div>`,
             script: page1

         },
         {
             path: '*',
             redirect: '/home',
             component: `<div id="/search" class="search router">
      <input class="tosearch" type="search" placeholder="搜索">
  </div>
  <div class="songlist">
      <h2 class="official">官方歌单</h2>
      <ul class="official-ul">
          <li>
              <div class="list-box">
                  <div class="list-media">
                      <img src="https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1" alt="">
                      <div class="count">
                          <span class="icon-bofang"></span>
                          <span>6761.1万</span>
                      </div>
                  </div>
                  <h3>高解析度音乐，为发烧友量身定制</h3>
              </div>
          </li>
      </ul>
  </div>`,
             script: page1
         },{
            path: '/search',
            component: `<div class="head">
            <div id="/search" class="search router">
                <input class="tosearch" type="search" placeholder="搜索">
            </div>
            <span class="clear">取消</span>
        </div>
        <div class="research">
        <div class="history">
          <h2>搜索历史</h2>
          <div class="delete">
            <i class="iconfont icon-lajitong"></i>
          </div>
        </div>
        <div class="hot">
        <h2>热门搜索</h2>
        </div>
      </div>
        <ul class="music-list">
        </ul>`,
            script: search
        }
     ]
 });



