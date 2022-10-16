















const fs = require('fs').promises;
const path = require('path');

const fileName = 'member.txt';
const curPath = path.join(__dirname, fileName);

fs.mkdir('http').catch(console.error);


// import fs from 'fs';
// import path from 'path'

// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// console.log(import.meta.url)
// console.log(__filename)

// const __dirname = path.dirname(__filename);
// console.log(__dirname)




// fs.readFile(curPath, 'utf-8')
//   .then((data) => {
//     console.log(data)
//     console.log('option값 utf-8 주고 안 주고 차이')
//   })
//   .catch((err) => console.log(err));

// fs.readFile(curPath)
//   .then(console.log)
//   .catch(console.log)

// fs.writeFile(curPath, '홍길동').catch(console.log);

// fs.appendFile(curPath, '\n박연미').catch(console.log);
// fs.copyFile(curPath, __dirname + '/copied.txt').catch(console.error);

// fs.appendFile(curPath, '\n박연미')
//   .then(() => {
//     fs.copyFile(curPath, __dirname + '/copied2.txt').catch(console.error);
//   })
//   .catch(console.error);

// async function appendContentThenCopy() {
//   try {
//     await fs.appendFile(curPath, '\n박연미');
//     await fs.copyFile(curPath, __dirname + '/copied.txt')
//     console.log('내용 추가 및 복사 완료')
//   } catch (err) {
//     console.log('error', err)
//   }
// }

// appendContentThenCopy();

// async function copyFile() {

//   try {
//     await fs.appendFile(curPath, '\n박연미');
//     await fs.copyFile(curPath, __dirname + '/copied.txt')
//     console.log('복사 완료')
//   } catch (err) {
//     console.log('error', err);
//   }
// }



// fs.readdir('./').then(console.log).catch(console.error);
// fs.readdir(__dirname + '/')
// 	.then(console.log)
// 	.catch(console.error);

// fs.promises
//   .mkdir(path.join(__dirname, 'test'))
//   .then(() => {
//     console.log('폴더 생성 완료')
//   })
//   .catch(console.log)