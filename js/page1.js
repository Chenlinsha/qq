const page1=function index(){async function getFetch(url) {
    let response = await fetch(url)
    let res = await response.json()
    return res
}

// async function getlist(){
//     let res=await getFetch('http://124.221.249.219:8000/api/recommendations')
//     console.log(res);}
//     getlist()
async function getlist(){
    let res=await getFetch('http://124.221.249.219:8000/api/recommendations');
    res.offical.forEach((element,i) => {
        console.log(res.offical[i].cover);
        let li=document.createElement("li")
        li.innerHTML=` <div class="list-box">
        <div class="list-media">
            <img src=${res.offical[i].cover} alt="">
            <div class="count">
                <span class="icon-bofang"></span>
                <span>${res.offical[i].views}</span>
            </div>
        </div>
        <h3>${res.offical[i].title}</h3>
    </div>`
    document.querySelector('.official-ul').appendChild(li)
    });
res.tatsujin.forEach((element,i) => {
            let li=document.createElement("li")
            li.innerHTML=` <div class="list-box">
            <div class="list-media-box">
            <div class="list-media">
                <img src=${res.tatsujin[i].cover} alt="">
                <div class="count">
                    <span class="icon-bofang"></span>
                </div>
                </div>
            </div>
            <h3>${res.tatsujin[i].title}</h3>
        </div>`
        document.querySelector('.master-ul').appendChild(li)
        });
    }
getlist()}
export default page1