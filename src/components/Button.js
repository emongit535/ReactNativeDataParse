import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

const Button = ({onPress}) =>{

    const { buttonStyle, textStyle } = Styles;

    return (
       <View>

       </View>


    );
};

const Styles = {
    textStyle :{
      alignSelf:'center',
      color:'#007aff',
        fontSize: 16,
        fontWeight:'100',
        paddingTop:10,
        paddingBottom:10,
        width: 10,
        height: 20
    },
    buttonStyle:{
        //flex: 1,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}


export {Button};