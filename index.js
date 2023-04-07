const express = require('express')
const app = express()
const port = 3000

//enable json body parsing dekat client.http
app.use(express.json())

app.post('/',(req,res) => {
  let data = req.body
  let loginResult = login(
    data.username, data.email)
  res.send(
    login(data.username, data.email))
    
});
app.use(express.json())
function login(username, email){
  console.log("someone try to login with", username, email)
  let matched = dbUsers.find(Element => 
      //console.log(Element)
      Element.username == username
  )//finding element in the array
if(matched){
  if(matched.email == email){
      return matched
  }else{
      return "email not matched"
  }
}else{
  return "user not found"
}
}

let dbUsers = [
  {
      username: "soo",
      phone: "123142",
      email: "soooo@gmail.com"
  },{
      username: "daus",
      phone: "1999123",
      email: "dauskepam@gmail.com"
  },{
      username: "deyy",
      phone: "3333",
      email: "Nclub@gmail.com"
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Post request');
});

app.post('/login', (req,res) =>{

  const {username, email} =req.body;

  const user = dbUsers.find(user => user.username === username && user.email === email);

  if(user){
    res.send(user);
  }
  else{
    res.send({ error: "user not found"});
  }
})

app.get('/bye', (req, res) => {
    res.send('Bye Bye World!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/register' , (req, res)=>{
let data = req.body
res.send(
  register(
    data.username,
    data.email,
    data.phone
  )
)});

function register(newusername, newphone, newemail){
  {
      dbUsers.push({
          username: newusername,
          phone: newphone,
          email: newemail
      })
  }
  return "Registered successfully"
  }