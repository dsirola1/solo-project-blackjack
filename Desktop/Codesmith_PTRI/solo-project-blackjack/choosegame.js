

let cred = {
  a: 'b'
}

function login () {
  let user = document.getElementById("Uname").value;
  let pass = document.getElementById("Pass").value;
  console.log(user, pass)
  if (cred[user] === pass) {
    console.log('Login successful')
  }
  else {
    console.log('Login failed')
  }
}