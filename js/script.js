const nav = document.querySelectorAll('nav > ul > li > a')
const section = document.querySelectorAll('main > .campaign')
const a = document.querySelectorAll('a')
console.log (nav, section, a)
nav.forEach((i,index)=>{
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, section[index].offsetTop)
    })
})


// 고정화면
const view = document.querySelector('#project_view')
const view3 = document.querySelector('#project_view3')
const sns = document.querySelectorAll('.s_ns .top a')
const sns_r = document.querySelectorAll('.s_ns .btm a')
let imgT = document.createElement('img')
view.style.display = 'none'
view.addEventListener('click',()=>{
    view.style.display = 'none'
})
view3.addEventListener('click',()=>{
    view3.style.display = 'none'
})
sns.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()//href 링크막기
        imgT.src = `./images/bnr_2/sns_bnr_0${i+1}.png` /* 이미지 이름 통일시키고 숫자만 바꿔서 관리하기 */
        console.log(imgT)
        view.style.display = 'block'
        view.children[0].appendChild(imgT)
    })
})
sns_r.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()//href 링크막기
        imgT.src = `./images/bnr_2/sns_0${i+1}.jpg` /* 이미지 이름 통일시키고 숫자만 바꿔서 관리하기 */
        console.log(imgT)
        view3.style.display = 'block'
        view3.children[0].appendChild(imgT)
    })
})

const view2 = document.querySelector('#project_view2')
const detail = document.querySelectorAll('.d_etails a')
let imggT = document.createElement('img')
view2.style.display = 'none'
view2.addEventListener('click',()=>{
    view2.style.display = 'none'
})
detail.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()//href 링크막기
        imggT.src = `./images/details/images_0${i+1}.png` /* 이미지 이름 통일시키고 숫자만 바꿔서 관리하기 */
        console.log(imggT)
        view2.style.display = 'block'
        view2.children[0].appendChild(imggT)
    })
})