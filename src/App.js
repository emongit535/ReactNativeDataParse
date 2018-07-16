import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/Header';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component  {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDItMFRgdlholhAHrzFxs6LROa9zH2-_Vk",
            authDomain: "authtest-dfa21.firebaseapp.com",
            databaseURL: "https://authtest-dfa21.firebaseio.com",
            projectId: "authtest-dfa21",
            storageBucket: "authtest-dfa21.appspot.com",
            messagingSenderId: "1046902771813"
        });
    }

    render() {
        return (
           <View>

                <Header headerText = "AuthApp"/>
                <LoginForm/>

            </View>
        );
    }
}



export  default App;