class User {
    constructor(username){
        this.username =username;

    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123` // not access
    }
}

const hitesh = new User("hitesh");
// hitesh.createId();

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@PaymentMethodChangeEvent.com")
iphone.logMe();
// iphone.createId() static which are used to not access data

