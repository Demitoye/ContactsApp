import React, {useState}from 'react';
import { Text, View , TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
//

const Input = ({onChangeText,style,icon,iconPosition, value, label, error,...props}) => {

    const getFlexDirection = () =>{
        if (icon && iconPosition){

                if(icon && iconPosition === 'left'){
                    return "row"
                }else if(icon && iconPosition === 'right'){
                    return "row-reverse"
                }
        }
    }

    const getBorderColor = () =>{


        if(error){
            return colors.danger
        }
        
        if(focused){
            return colors.primary
        }

        else{
            return colors.grey
        } 
  
    }
    
    const [focused, setFocused] = useState(false)
    
return(
    <View style= {styles.inputContainer}>
         {label && <Text>{label} </Text>}

        <View style= {[styles.wrapper,{ alignItems: icon ? 'center': 'baseline'}, { borderColor:  getBorderColor(), flexDirection: getFlexDirection()}]}>

            <View>{icon && <Text>{icon && icon}</Text>}</View>

            <TextInput 
                style={[styles.textInput, style ]}
                onChangeText={onChangeText}
                value={value}
                onFocus = {() =>setFocused(true)}
                onBlur = {() =>setFocused(false)}
                {...props}
            />




        </View>

        {error && <Text style= {styles.error}>{error}</Text>}
        
    </View>
)
};

export default Input;
