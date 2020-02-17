const db = require('../util/database.js');

module.exports = class Users {
    constructor(id, user_name, email, first_name, last_name, img) {
      this.id = id;
      this.user_name = user_name ;
      this.email = email;
      this.first_name = first_name;
      this.last_name = last_name;
      this.img = img
    }
  
    save() {
      return db.execute(
        'INSERT INTO users (user_name, email, first_name, last_name) VALUES (?, ?, ?, ?)',
        [this.user_name, this.email, this.first_name, this.last_name]
      );
    }
  
    static deleteById(id) {}
  
    static fetchAll() {
      return db.execute('SELECT * FROM users limit 4');
    }
  
    static findById(id) {
      return pool.execute('SELECT * FROM users WHERE users.id = ?', [id]);
    }
  };
  