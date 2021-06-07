
// let body = document.body

// let url = 'http://jsonplaceholder.typicode.com/users';

// let divElement = document.createElement('div');
// body.appendChild(divElement);
// divElement.style.width = '50%';
// divElement.style.height = '400px';
// divElement.style.padding = '10px';
// divElement.style.marginBottom = '20px';
// divElement.style.border = '2px';
// divElement.style.borderRadius = '10px'
// divElement.style.backgroundColor = '#dff0f2';
// divElement.style.color = 'white';
// divElement.classList.add('box');

// let buttonElement = document.createElement('button');
// body.appendChild(buttonElement);
// buttonElement.style.width = '200px';
// buttonElement.style.height = '60px';
// buttonElement.style.backgroundColor = '#16c062';
// buttonElement.style.color = 'white';
// buttonElement.style.fontSize = '26px'; 
// buttonElement.innerHTML = 'BUTTON';
// buttonElement.classList.add('send-button');

// createMsg = function () {
//   let messageBlock = document.createElement('div');
//   divElement.appendChild(messageBlock);
//   messageBlock.style.width = '300px';
//   messageBlock.style.height = '100px';
//   messageBlock.style.borderRadius = '20px';
//   messageBlock.style.backgroundColor = 'white';
// };


// buttonElement.onclick = function () {
//   let messageBlock = document.createElement('div');
//   divElement.appendChild(messageBlock);
//   messageBlock.style.width = '300px';
//   messageBlock.style.height = '100px';
//   messageBlock.style.borderRadius = '20px';
//   messageBlock.style.marginBottom = '10px';
//   messageBlock.style.backgroundColor = 'white';
//   messageBlock.style.color = 'black';

//   fetch(url)
//     .then(res => {
//       if (res.ok) {
//         console.log('SUCCESS')
//       } else {
//         console.log('Not Successful')
//       }
//       return res.json();
//     })
//     .then(
//       (data) => { messageBlock.textContent = data.join('')}
//       )
  
  
//   fetch(url)
//     .then(res => {
//       if (res.ok) {
//         console.log('SUCCESS')
//       } else {
//         console.log('Not Successful')
//       }
//       return res.json();
//     })
//     .then(data => {
//       let user = data.find((element) => {
//         return element.name === 'Kurtis Weissnat';
//       })
//       console.log(user);
//     })
  
//   fetch(url)
//     .then(res => {
//       if (res.ok) {
//         console.log('SUCCESS')
//       } else {
//         console.log('Not Successful')
//       }
//       return res.json();
//     })
//     .then(data => {
//       let userCompany = data.filter((cn) => {
//         return cn.company.name === 'Keebler LLC';
//       });
//       console.log(userCompany);
//     })
  
//   fetch(url)
//     .then(res => {
//       if (res.ok) {
//         console.log('SUCCESS')
//       } else {
//         console.log('Not Successful')
//       }
//       return res.json();
//     })
//     .then(data => {
//       let userName = data.filter((letter) => {
//         return letter.name[0] === 'C';
//       });
//       console.log(userName);
//     })
  
//   fetch(url)
//     .then(res => {
//       if (res.ok) {
//         console.log('SUCCESS')
//       } else {
//         console.log('Not Successful')
//       }
//       return res.json();
//     })
//     .then(data => {
//       let userCity = data.filter((uCity) => {
//         return uCity.address.city[0] === 'R';
//       });
//       console.log(userCity);
//     })
  
//   let url2 = 'https://jsonplaceholder.typicode.com/users/5/posts';
//   let xhr2 = new XMLHttpRequest();
//   xhr2.open('GET', url2);

//   xhr2.setRequestHeader('Content-Type', 'application/json');

//   xhr2.onload = () => {
//     let data2 = JSON.parse(xhr2.response);
//     console.log(data2);
//   }
//   xhr2.send();
// }

let body = document.body

let url = 'https://jsonplaceholder.typicode.com/users';
let url2 = 'https://jsonplaceholder.typicode.com/users/5/posts';

let divElement = document.createElement('div');
body.appendChild(divElement);
divElement.style.width = '50%';
divElement.style.padding = '20px';
divElement.style.marginBottom = '20px';
divElement.style.border = '2px';
divElement.style.borderRadius = '10px'
divElement.style.backgroundColor = '#dff0f2';
divElement.style.color = 'white';
divElement.classList.add('box');

let buttonElement = document.createElement('button');
body.appendChild(buttonElement);
buttonElement.style.width = '200px';
buttonElement.style.height = '60px';
buttonElement.style.backgroundColor = '#16c062';
buttonElement.style.color = 'white';
buttonElement.style.fontSize = '26px'; 
buttonElement.innerHTML = 'BUTTON';
buttonElement.classList.add('send-button');


let messageBlock = document.createElement('div');
divElement.appendChild(messageBlock);
messageBlock.style.padding = '20px';
messageBlock.style.borderRadius = '20px';
messageBlock.style.marginBottom = '10px';
messageBlock.style.backgroundColor = 'white';
messageBlock.style.color = 'black';

let messageBlock2 = document.createElement('div');
divElement.appendChild(messageBlock2);
messageBlock2.style.padding = '20px';
messageBlock2.style.borderRadius = '20px';
messageBlock2.style.marginTop = '10px';
messageBlock2.style.backgroundColor = 'white';
messageBlock2.style.color = 'black';

let messageBlock3 = document.createElement('div');
divElement.appendChild(messageBlock3);
messageBlock3.style.padding = '20px';
messageBlock3.style.borderRadius = '20px';
messageBlock3.style.marginTop = '10px';
messageBlock3.style.backgroundColor = 'white';
messageBlock3.style.color = 'black';

let messageBlock4 = document.createElement('div');
divElement.appendChild(messageBlock4);
messageBlock4.style.padding = '20px';
messageBlock4.style.borderRadius = '20px';
messageBlock4.style.marginTop = '10px';
messageBlock4.style.backgroundColor = 'white';
messageBlock4.style.color = 'black';

let messageBlock5 = document.createElement('div');
divElement.appendChild(messageBlock5);
messageBlock5.style.padding = '20px';
messageBlock5.style.borderRadius = '20px';
messageBlock5.style.marginTop = '10px';
messageBlock5.style.backgroundColor = 'white';
messageBlock5.style.color = 'black';

buttonElement.onclick = function () {
  
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log('SUCCESS')
      } else {
        console.log('Not Successful')
      }
      return res.json();
    })
    .then((data) => { 
        console.log(data);
      let user1 = JSON.stringify(data);
      messageBlock.textContent = user1;
    })
  
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log('SUCCESS')
      } else {
        console.log('Not Successful')
      }
      return res.json();
    })
    .then(data => {
      let user2 = data.find((element) => {
        return element.name === 'Kurtis Weissnat';
      })
      let userJson = JSON.stringify(user2);
      messageBlock2.textContent = userJson;
    })
  
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log('SUCCESS')
      } else {
        console.log('Not Successful')
      }
      return res.json();
    })
    .then(data => {
      let userCompany = data.filter((cn) => {
        return cn.company.name === 'Keebler LLC';
      });
      let user3 = JSON.stringify(userCompany);
      messageBlock3.textContent = user3;
    })
  
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log('SUCCESS')
      } else {
        console.log('Not Successful')
      }
      return res.json();
    })
    .then(data => {
      let userName = data.filter((letter) => {
        return letter.name[0] === 'C';
      });
      let user4 = JSON.stringify(userName);
      messageBlock4.textContent = user4;
    })
  
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log('SUCCESS')
      } else {
        console.log('Not Successful')
      }
      return res.json();
    })
    .then(data => {
      let userCity = data.filter((uCity) => {
        return uCity.address.city[0] === 'R';
      });
      let user5 = JSON.stringify(userCity);
      messageBlock5.textContent = user5;
    })
  
  let xhr2 = new XMLHttpRequest();
  xhr2.open('GET', url2);

  xhr2.setRequestHeader('Content-Type', 'application/json');

  xhr2.onload = () => {
    let data2 = JSON.parse(xhr2.response);
    console.log(data2);
  }
  xhr2.send();
}