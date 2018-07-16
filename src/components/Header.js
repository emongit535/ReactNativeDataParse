//import what I need

import React from 'react';
import { Text, View} from 'react-native';

//Make a component

const Header =(props)=>{
    const {textStyle,viewStyle} = styles;


    return(
        <View style = {viewStyle} >
            <Text style = {textStyle}>
                {props.headerText}
            </Text>

        </View>
    );
};


const styles = {
    viewStyle : {
        paddingTop: 10,
       height: 60,
        shadowColor: '#000',
       shadowOffset:{
         height: 2,
         width: 0
       },

        shadowOpacity: 0.2,
       justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eef9e9',
        position : 'relative'

    },

    textStyle : {
        fontSize : 20

    }

};


// Export to use it

export {Header};