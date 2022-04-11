
import "./index.css"


 const h1=document.createElement('h1')
 h1.innerHTML="Text Submission"
const input = document.createElement('textarea')

input.setAttribute('id','mytext')

const button = document.createElement('button')
button.innerHTML="submit"

button.addEventListener('click',()=>{
    const notes= document.querySelector('#mytext').value;
    document.querySelector('p').innerHTML=notes
})

const container = document.querySelector(".container")
container.append(h1,input,button)