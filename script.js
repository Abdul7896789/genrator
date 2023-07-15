

let gradientBox =document.querySelector('.gradient-box')
let SelectBox = document.querySelector('.directions select')
let colorsInput = document.querySelectorAll('.colors input')
let textarea= document.querySelector('textarea')
let copyBtn = document.querySelector('.copy')
let refreshBtn = document.querySelector('.button')

const randomColorgenerate = ()=>{
    let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    return `#${randomHex}`
}
const gradientColor = (isRandom)=>{
if(isRandom){
    colorsInput[0].value = randomColorgenerate()
    colorsInput[1].value = randomColorgenerate()
}
let gradient = `linear-gradient(${SelectBox.value},${colorsInput[0].value},${colorsInput[1].value})`
gradientBox.style.background = gradient;
textarea.value = `background:${gradient}`

}

const copyCode = ()=>{
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied 😎"
    setTimeout(()=>{ copyBtn.innerText="Code Copied " },1300)
}
colorsInput.forEach((input)=>{
    input.addEventListener('input',()=> gradientColor(false))
})

SelectBox.addEventListener('change',()=>gradientColor(false))
refreshBtn.addEventListener('click',()=>gradientColor(true))
copyBtn.addEventListener('click',copyCode)