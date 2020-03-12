class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // static method
  // don't need to register a user for this static method to work so it can work regardless

  static countUsers(){
    console.log('there are 50 users');
  }
  // methods
  // we need a user in order to register a user. methods need objects
  register(){
    console.log(this.username + ' is now registered');
  }
}

// let bob = new User('bob', 'bob@example.com', '12345');

// bob.register();

// User.countUsers();
