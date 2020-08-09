import axios from 'axios'

// This file defines backend api calls logic for authentication
export const register = (newUser) => {
  // call register backend api endpoint and provide data
    return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = (user) => {
  // call login backend api endpoint and provide data 
    return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
        // save jwt to browser local storage
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
