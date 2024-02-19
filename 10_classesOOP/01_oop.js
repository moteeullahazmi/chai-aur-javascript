// Object literal
const user = {
     username:"moteeullahazmi",
     loginCount:8,
     signedIn : true,

     getUserDetails: function(){
        // console.log("Got user details from database");

        // console.log(`Username: ${this.username}`);
        console.log(this);
     }
}

const user2 = {
    username:"emad",
    loginCount:8,
    signedIn : true,

    getUserDetails: function(){
       // console.log("Got user details from database");

       // console.log(`Username: ${this.username}`);
       console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);  //{}

