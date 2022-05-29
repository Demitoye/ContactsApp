import React, {useState} from 'react';
import {Text, View, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  message,
  primary,
  retry,
  retryFn,
  info,
  success,
  danger,
  onDismiss,
  ...props
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }

    if (danger) {
      return colors.danger;
    }

    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };

  const [userDismissed, setUserDismissed] = useState(false);

  return (
    <>
    {userDismissed === false?
      <TouchableOpacity
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: colors.white,
            }}>
            {message}
          </Text>

          {retry && !typeof onDismiss === 'function' && (
            <TouchableOpacity onPress={retryFn}>
              <Text
                style={{
                  color: colors.white,
                }}>
                Retry
              </Text>
            </TouchableOpacity>
          )}

          {typeof onDismiss === 'function' && (
            <TouchableOpacity
              onPress={() => {
                setUserDismissed(true);
                onDismiss();
              }}>
              <Text
                style={{
                  color: colors.white,
                }}>
                X
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    : null}
    </>
  );
};

export default Message;
