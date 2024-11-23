class UserModel{
    constructor(){
        this.users = []
    }

    addUser(name,email){
        const user = {name,email}
        this.users.push(user)
        return user;
    }

    getUsers(){
        return this.users;
    }
}