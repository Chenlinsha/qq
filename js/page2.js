const a =`async function getFetch(url) {
    let response = await fetch(url)
    let res = await response.json()
    return res
}
async function getlist(){
    let res=await getFetch('https://www.yushangyun.top:4000/playLists?offset=0');
    console.log(res);
}
getlist()`

export default a