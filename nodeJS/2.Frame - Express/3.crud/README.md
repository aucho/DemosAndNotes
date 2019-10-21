# Express - curd

## get started

- initialize

- template processing

## router design

| 请求方法 | 请求路径 | get 参数 | post参数 | 备注 
|-|-|-|-|-|
|get | /students |||     首页渲染|  
|get | /students/new ||| 添加学生页面  
|post| /new || name, gender, age, hobbise|处理添加请求
|get | /students/edit|id||渲染编辑页面
|post| /edit || id, name, gender, hobbies| 处理编辑请求
|get | /student/delete |id||处理删除请求