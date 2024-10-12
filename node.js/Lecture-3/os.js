// OS Module

const os = require('os')

console.log(os.arch());  //x64
console.log(os.hostname());  //Srushti
console.log(os.homedir());   //C:\Users\srush
// console.log(os.networkInterfaces());
// console.log(os.tmpdir()); //C:\Users\srush\AppData\Local\Temp
console.log(os.freemem());   //1403052032     =>free memory
console.log(os.totalmem());  //7866085376     =>total memory
console.log(os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'srush',
//     homedir: 'C:\\Users\\srush',
//     shell: null
// }
console.log(os.cpus());







