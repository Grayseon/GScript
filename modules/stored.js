var sname = 'None'
var smain = 'None'
module.exports.setName = function(name){
    sname = name
}
module.exports.getName = function(){
    return sname
}
module.exports.setMain = function(main){
    smain = main
}
module.exports.getMain = function(){
    return smain
}