import  React , {Component} from 'react';
import {TextInput} from 'react-native';
import {Card} from "./Card";
import {CardSection} from "./CardSection";
import {Button} from "./Button";

class LoginForm extends Component{


  state = { text: '' };

    render() {
        return(
           <Card>
            <CardSection>
                <TextInput style={{height: 1000,width:20, borderColor: 'gray', borderWidth: 1}}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                />

            </CardSection>
           </Card>






        );
    }
}


export default LoginForm;