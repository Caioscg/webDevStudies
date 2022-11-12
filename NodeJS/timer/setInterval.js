const timeOut = 1000
const checking = () => console.log("checking...")
const checked = () => console.log("check!")
setInterval(checking, timeOut)
setInterval(checked, 3000)