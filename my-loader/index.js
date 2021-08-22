module.exports = function(context) {
    // 这里进行简单的字符串替换，严格应该调用语法树api
    context = context.replace("c", "console.log").replace("a", "alert").replace("f-", "function ")
    return context;
}