const search=function search(){
  let hot =document.querySelector('.hot')
  let history=document.querySelector('.history')
  let searchInput = document.getElementsByClassName('tosearch')[0]
let clear=document.querySelector('.clear')
let div=document.querySelector('.research')
let todelete=document.querySelector('.delete')
let value
console.log(searchInput.value);
async function getFetch(url) {
    let response = await fetch(url)
    let res = await response.json()
    return res
}
let span
let arr=[]
let node
async function getSearch(){
  let res = await getFetch(`http://124.221.249.219:8000/api/hot`)
  console.log(res);
  for(let i=0;i<res.length;i++){
    span = document.createElement("span")
    span.innerHTML=res[i]
    arr.push(span)
    // console.log(arr);
    hot.appendChild(arr[i])
    arr[i].addEventListener("click",()=>{
      div.insertBefore(history,hot)
      searchInput.value=arr[i].innerHTML;
     node=arr[i].cloneNode(true)
       history.appendChild(node)
      setHistory(arr[i].innerHTML)
    return node
    }
    )
  }
}
for(let i=0;i<history.childNodes.length;i++){
  console.log(history.childNodes[i]);
history.childNodes[i].addEventListener("click",()=>{
  console.log(1111);
  searchInput.value=history.childNodes[i].innerHTML;
})
}
console.log(node);
getSearch()
async function getlist() {
    value = searchInput.value
    // console.log(searchInput.value);
    // console.dir(searchInput)
   let res = await getFetch(`http://124.221.249.219:8000/api/search?keyword=${value}`)
    // console.log(res);
    for(let i=0;i<res.length;i++){
        let li =document.createElement("li")
        // console.log(res[i].title);
        li.innerHTML=`<div class="list-box">
         <h3>${res[i].title}</h3>
         <span>${res[i].artist[0]}</span>
         </div>`
         document.querySelector('ul').appendChild(li)
    }
}
document.addEventListener('keydown',(e)=>{
    if(e.keyCode===13){
        div.style.display="none"
        getlist()
        setHistory(value)
        console.log(getHistory);
    }
  })
  function setHistory(val) {
    if (val.length !== 0) {
      let historyArray = localStorage.getItem('history')
      if (!historyArray) {
        historyArray = []
      } else {
        historyArray = JSON.parse(historyArray)
      }
      // 去除重复数据，输入相同数据时，重新排序
      historyArray = historyArray.filter((value) => {
        return value !== val
      })
      historyArray.unshift(val)
      localStorage.setItem('history', JSON.stringify(historyArray))
    }
}
todelete.addEventListener("click",()=>{
  history.remove()
  localStorage.removeItem('history')
})
clear.addEventListener("click",()=>{
    window.location.hash="/home"
})
let getHistory = JSON.parse(localStorage.getItem('history'))
// getHistory.forEach((i,element) => {
  if(getHistory){
  for(let i=0;i<getHistory.length;i++){
  span = document.createElement("span")
     console.log(getHistory[i]);
     span.innerHTML=getHistory[i]
    history.appendChild(span)
};}
}

export default search

