var a = function(param){
  let b = param
  setTimeout(()=>{
    console.log(b)
  },1000)
}

a(1)
setTimeout(()=>{
  a(2)
},500)