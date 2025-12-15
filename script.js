let arr=[
    {
        team:'csk',
        primary:'yellow',
        sec:'green'
    },
    {
        team:'rcb',
        primary:'red',
        sec:'black'
    },
    {
        team:'mi',
        primary:'blue',
        sec:'gold'
    },
    {
        team:'kkr',
        primary:'purple',
        sec:'gold'
    },
    {
        team:'srh',
        primary:'orange',
        sec:'black'
    },
]

var btn = document.querySelector('button')
var h2= document.querySelector('h2')
btn.addEventListener('click',function() {
var index = Math.floor(Math.random()*arr.length
)
var winner =arr[index]
console.log(winner);
h2.innerHTML= winner.team

})