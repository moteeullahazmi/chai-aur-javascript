// const promiseOne = new Promise() // new keyword is constructor
// const date = new Date()


function User(username, loginCount, isLoggesIn){
    this.username = username ;  // left side variable and right side is parameter pass
    this.loginCount = loginCount;
    this.isLoggefIn = isLoggesIn;

    return this;  
}

const userOne =  new User("azmi", 12, true)

const userTwo =  new User("gym aur code", 14, true)
console.log(userOne.constructor);
// console.log(userTwo);