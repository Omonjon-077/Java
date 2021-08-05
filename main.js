
let line ='  ';
let plus = '[+]';
let num = +prompt('Hohlagan Son kiriting');
for (let i = 0; i < num; i++) {
   let row = '';
   for (let k = 0; k < num; k++) {
      if (i==0 || i == num-1) {
          row += plus;
      } else if (k == 0 || i==k || k==num-1) {
          row += plus;
      } else{
          row += "   ";
      }
   }
      console.log(row);
}

console.log('');

let son = +prompt("Qo`y Sanaymiz")
let res = 0
for (let i = 0; i <son; i++) {
    res = res + 1;
    console.log( 'Qo`y: ' + res);
}
  
//By Omonjon Sobirov