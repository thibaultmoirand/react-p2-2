import React, { Component } from 'react'
import { database } from './firebase/config';
 // Firebase
//import * as firebase from 'firebase'
//import config from '../firebase'


class Getfichier extends Component {

constructor () {

super()

this.state = { loading: true } 
//firebase.initializeApp(config)
}



componentWillMount () {
//const userRef = firebase.database().ref('user')

userRef.on('value', snapshot => {
this.setState({
user: snapshot.val(),
loading: false

})
})
}

render () {
  if (this.state.loading) {
  return (
  <p>Je suis en train de charger.</p>
  )
  }
  const user = Object.keys(this.state.user).map(key => {
  return <p key={key}>{ this.state.user [key].Nom}</p>
  })
  return (
  <div>{user} </div>
  )
}
}

  export default Getfichier