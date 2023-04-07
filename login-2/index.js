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

function register(newusername, newphone, newemail){
{
    dbUsers.push({
        username: newusername,
        phone: newphone,
        email: newemail
    })
}
}

//try to login
//login("soo","email")
//login("daus","email")

//console.log( login("daus", "dauskepam@gmail.com"))//<--found
//console.log(login("deyy","nclub@gmail.com"))//<---not found sebab error
register("mader", "666", "madecod@gmail.com")
register("ahwong", "619", "ahwongar@gmail.com")
//let matched = dbUsers.find(Element => 
//console.log(Element))
console.log(login("mader","madecod@gmail.com"))
console.log(login("ahwong", "ahwongar@gmail.com"))