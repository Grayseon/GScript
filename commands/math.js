exports.random = function(data){
    data = data.split(', ')
    if(data[1] === 'false'){
        return Math.random() * parseInt(data[0]) + 1
    }else{
        return Math.floor(Math.random() * parseInt(data[0])) + 1
    }
}
exports.floor = function(dec){
    return Math.floor(dec)
}
exports.subtract = function(nums){
    nums = nums.split(',')
    return parseInt(nums[0]) - parseInt(nums[1])
}
exports.add = function(nums){
    nums = nums.split(',')
    return parseInt(nums[0]) + parseInt(nums[1])
}
exports.multiply = function(nums){
    nums = nums.split(',')
    return parseInt(nums[0]) * parseInt(nums[1])
}
exports.divide = function(nums){
    nums = nums.split(',')
    return parseInt(nums[0]) / parseInt(nums[1])
}