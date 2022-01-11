#! /usr/bin/env node
const fs = require('fs')
const parse = require('../modules/parseConfig')
console.log('GScript is starting.')
if(process.argv[2] === '.'){
    if(fs.existsSync(`${process.cwd()}/gconfig.gcf`)){
        parse(fs.readFileSync(`${process.cwd()}/gconfig.gcf`).toString())
    }else{
        console.log('No config file found.')
    }
}