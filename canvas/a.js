function a(){
  this.aa = function(){
    console.log('aa')
  }
}
b = new a()
a.aa()
b.aa()