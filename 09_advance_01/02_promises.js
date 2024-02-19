const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Resolved 1");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
    }, 1000);
}).then(function(){
    console.log("Resolved 2");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: "azmi", email: "azmiazmi@gmail.com"});
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true; // Note: Change error to false to ensure resolution
        if (!error) {
            resolve({username: "azmi@error", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("the promise is resolve or rejected.");
    });

const promiseFive = new Promise((resolve,reject) => {
    setTimeout( function(){
        let error = true; // Note: Change error to false to ensure resolution
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive(){  //async
    try { 
        const response = await promiseFive; //await 
    console.log(response);
} catch (error) {
    console.log(error);
}
}

consumePromiseFive()


// High Level

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUser();

fetch('https://api.github.com/users/moteeullahazmi')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))