const stored = require('./stored')
module.exports = function(config){
    var foundname = false
    var foundmain = false
    config.split('\n').forEach(line=>{
        args = line.replace(/ /g, '').split('=>')
        switch(args[0]){
            case 'name':
                stored.setName(args[1])
                foundname = true
            break
            case 'main':
                stored.setMain(args[1])
                foundmain = true
            break
        }
    })
    if(foundname == false){
        console.log('No name found.')
        process.exit()
    }else if(foundmain == false){
        console.log('No main found.')
        process.exit()
    }else{
        console.log('Parsed config.')
        require('./translate')()
    }
}