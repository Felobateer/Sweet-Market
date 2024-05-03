import React from "react";

class UserInfo extends React.Component {
  users = [];

  newUser(name, email, password) {
    this.users.push({ name, email, password });
  }

  signIn(email, password) {
    this.users.forEach((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });
  }

  forgotPassword(email) {
    this.users.forEach((user) => {
      if (user.email === email) {
        return user;
      }
    });
  }
}

export default UserInfo;
