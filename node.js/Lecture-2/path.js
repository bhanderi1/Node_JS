// Path Module

const path = require('path')
const base = path.basename('C:\\temp\\myfile.html');
console.log(base);
const dir = path.dirname('/foo/bar/baz/asdf/quux');
console.log(dir);
const ext = path.extname('index.html');
console.log(ext);

const join=path.join('C:' ,'temp' , 'myfile.html')
console.log(join);

const abs=path.isAbsolute('C:\\temp\\myfile.html')
console.log(abs);

const parse =path.parse('/home/user/dir/file.txt');
console.log(parse);

const relative =path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(relative);

const formate =path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  });
  console.log(formate);