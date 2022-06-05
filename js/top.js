const top = function top() {
    async function getFetch(url) {
        let response = await fetch(url)
        let res = await response.json()
        return res
    }
    function sort(a, b)
    {
        let i,j, t1, t;
        for(j=0; j<10; j++)
            for(i=0; i<length-1-j; i++)
                if(a[i]<a[i+1])
                {
                    t=a[i];
                    a[i]=a[i+1];
                    a[i+1]=t;
                    t1=b[i];
                    b[i]=b[i+1];
                    b[i+1]=t1;
                }
    }
    async function getlist() {
        let res = await getFetch('http://124.221.249.219:8000/api/ranking')
        // console.log(res);
        res.forEach((element, i) => {
            let li = document.createElement("li")
            // li.setAttribute("draggable", true);
            // li.addEventListener("dragstart", (event) => {
            //     draggingElement = event.target;
            //   });
            //   li.addEventListener("dragenter", (event) => {
            //     //每次都要新计算，因为有可能已经换位了
            //     draggingElementOrder = Array.from(draggingElement.parentElement.children).indexOf(draggingElement);
            //     const node = event.target;
            //     draggingElementPosition = draggingElement.getBoundingClientRect();
            //     const order = Array.from(node.parentElement.children).indexOf(node);
            //     //从大的序号移入到小的序号
            //     if (draggingElementOrder > order) {
            //       node.parentElement.insertBefore(draggingElement, node);
            //     }
            //     //从小的序号移入到大的序号
            //     else {
            //       //节点不是最后一个
            //       if (node.nextElementSibling) {
            //         node.parentElement.insertBefore(draggingElement, node.nextElementSibling);
            //       }
            //       // 节点是最后一个了，不能再用insertBefore
            //       else {
            //         node.parentElement.appendChild(draggingElement);
            //       }
            //     }
            //   });

            li.setAttribute("class", "item")
            li.innerHTML = `<div class="content">
        <h2>${res[i].title}</h2>
        <ol>
           <li>
               <strong class="num">1.</strong>
               <span class="title">${res[i].top3[0].title}</span>
               <span class="singer">${res[i].top3[0].artist[0]}</span>
           </li> 
           <li>
           <strong class="num">2.</strong>
           <span class="title">${res[i].top3[1].title}</span>
           <span class="singer">${res[i].top3[1].artist[0]}</span>
       </li> 
       <li>
       <strong class="num">3.</strong>
       <span class="title">${res[i].top3[2].title}</span>
       <span class="singer">${res[i].top3[2].artist[0]}</span>
   </li> 
        </ol>
    </div>
    <div class="media">
        <img src="${res[i].cover}" alt="">
        <span class="update">每${res[i].update_frequence}更新</span>
        <div class="count">
            <i class="icon"></i>
            <span>${res[i].views}</span>
        </div>
    </div>`
            let start
            let end
            let tops = []
            let distance = end - start;
            document.querySelector('ul').appendChild(li)
            let lis = document.querySelectorAll('.item');
            for (let i = 0; i < lis.length; i++) {
                var l = 0;
                let numbertop
                let t = 0;
                let b=[1,2,3,4,5,6,7,8,9,10]
                numbertop = i * 244
                tops.push(numbertop)
                // start= i * 244

                lis[i].style.top = i * 244 + 'px'
                lis[i].setAttribute("touch", true);
                lis[i].addEventListener("touchstart", (e) => {
                    start = e.touches[0].clientY
                    l = e.touches[0].clientX - lis[i].offsetLeft;
                    t = e.touches[0].clientY - lis[i].offsetTop;
                })
                lis[i].addEventListener("touchmove", (e) => {
                    e.preventDefault()
                    const node = e.target;
                    let y = Number(e.touches[0].pageY)
                    lis[i].style.zIndex = "999"
                    tops[i] = e.touches[0].clientY
                    end = e.touches[0].clientY
                    lis[i].style.top = e.touches[0].clientY - t + 'px';
                    // sort(tops,b)
                    
                    //     lis[i].style.top = b[i] * 244 + 'px'
                    
                    // console.log(tops,b);
                    
                    //   console.log(start- end);
                    // if ((start - end) > 244 || (start - end) < -244) {
                    //     let n = Math.floor((start - end) / 244)
                    //     for(let i=0;i<lis.length;i++){
                    //     lis[i].style.top = (i+1) * 244 + 'px'
                    //     console.log(n)}
                    //     lis[i].style.top = (i-1) * 244 + 'px'
                    // }
                   
                })
               
                // lis[i].addEventListener("touchend", (e) => {
                //         end = e.touches[0].clientY
                //         exchange(end,start)
                //     })
                //    console.log(start);
                //    console.log(end);
            }
        });
    }
   
    getlist()


}
export default top;