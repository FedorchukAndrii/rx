import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


let s = "chillout"; 
encryption(s);

function encryption(s) {
  let rows = Math.floor(Math.sqrt(s.length));
  let columns = Math.ceil(Math.sqrt(s.length));

  let sToChar = s.split("");
  let sToTempArr = []; 
  let sFinalArr = [];

  let i =0;
  while( i <= rows) {
    sToTempArr.push(sToChar.splice(0, columns));
    i++;
  }

  console.log(sToTempArr);

  for (let x = 0; x< columns; x++) {
    sToTempArr.forEach(tempArr => {
      if(tempArr[x]) {
        sFinalArr.push(tempArr[x]);
      }
    }); 
    sFinalArr.push(" ");
  }

  console.log(sFinalArr.join(""));
}