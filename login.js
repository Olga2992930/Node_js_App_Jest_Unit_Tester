function login(username,password) {

    if (username=="admin" && password=="password123")  {
        return true
    } 
    else {
        return false 
    }
}
module.exports =login
