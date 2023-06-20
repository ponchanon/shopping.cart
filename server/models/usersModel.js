//Considering static users DB
let users = [
    { id: 1, username: 'ponchanon', password: '615866', accessToken: '' },
    { id: 2, username: 'moynul', password: '616161', accessToken: '' },
    { id: 3, username: 'admin', password: '1212', accessToken: '' }
];

//Creating User Class
module.exports = class User {

    ////Creating User Constructor
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    //user login method
    login() {
        const userIndex = users.findIndex(s => s.username === this.username && s.password === this.password);
        const user = users[userIndex];

        if (user) {
            this.accessToken = `${user.id}-${user.username}-${Date.now().toString()}`;
            this.id = user.id;
            users.splice(userIndex, 1, this);
            return this;
        }
        else return null;
    }

    //token verification
    static verifyToken(accessToken) {
        return users.find(s => s.accessToken === accessToken);
    }
}