document.querySelector('#demo').addEventListener('input',e =>{
    console.log(e.target.value)
document.querySelector('#W1').innerHTML=e.target.value * 2.205;
})

document.querySelector('#demo1').addEventListener('input',e =>{
    console.log(e.target.value)
    document.querySelector('#W3').innerHTML=e.target.value * 30.48;
    })
   
    document.querySelector('#demo2').addEventListener('input',e =>{
        console.log(e.target.value)
        document.querySelector('#W4').innerHTML=(e.target.value* 1.8) + 32;
        })