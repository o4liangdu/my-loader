### 一个自定义webpack loader的实现
loader主要功能：作为一个翻译官，引入自定义语法，这里做的工作和babel无二（将es6及以上的语法转为es5） 
以下是实现步骤：
1. 首先初始化我们想要实现的语法，这里写在了.my扩展名的文件中，这是转换的对象。并在app.js（webpack构建入口）中引用
2. 定义my-loader里面的index.js，导出一个函数，这个函数入参为context,即引入文件的内容，这里使用字符串替换的方式实现翻译功能，复杂的应用需要使用抽象语法树api来实现
> 关于抽象语法树相关api我会在下一个编写plugin的例子项目中使用并介绍
3. 定义好loader后就可以在webpack.config中配置文件后缀.my的规则，并设置loader为我们自定义的loader，使用webpack打包便可看到文件被打到dist目录下，观察文件发现对应自定义语法被转化成了js语法  

> 注：本项目开箱即用，去掉了所有该去掉的东西，webpack版本为5
