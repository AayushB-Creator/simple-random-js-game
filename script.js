let arr=['csk','mi','rcb','kkr','srh','dc','pbsk','rr','gt','lsg']
var btn = document.querySelector('button')
var h2= document.querySelector('h2')
btn.addEventListener('click',function() {
var index = Math.floor(    Math.random()*arr.length
)
var winner =arr[index]
console.log(winner);
h2.innerHTML= winner

})