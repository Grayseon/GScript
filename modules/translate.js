const fs = require('fs')
const stored = require('./stored')
const path = require('path')
module.exports = function(){
    var main = fs.readFileSync(`${process.cwd()}/${stored.getMain()}`).toString()
    main.split('\n').forEach(line=>{
        command1 = line.split(' ')[0].split('.')[0]
        command2 = line.split(' ')[0].split('.')[1]
        if(fs.existsSync(path.join(__dirname, `../commands/${command1}.js`))){
            var requirec = require(`../commands/${command1}`)
            if(requirec[command2]){
                console.log(requirec[command2](line.split(' ')[1]))
            }else{
                console.log(`${command2} does not exist.`)
            }
        }else{
            console.log(`${command1} does not exist.`)
        }
    })
}