import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {name: 'Take from Camera', icon: <Icon size = {21} color = {colors.grey} name="camera" />, onPress: () => {}},
    {
      name: 'Choose From Gallery',
      icon: <Icon size = {21} color = {colors.grey} name="image" />,
      onPress: () => {},
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={300}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          //   justifyContent: 'center',
          //   alignItems: 'center',
        },
      }}>
      <View style = {styles.optionsWrapper}>
        {options.map(({name, icon, onPress}) => (
          <TouchableOpacity style={styles.pickerOption} key={name}>
            {icon}
            <Text style = {styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
