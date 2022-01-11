const robot = require('robotjs')

exports.press = function(key){
    robot.keyTap(key)
}