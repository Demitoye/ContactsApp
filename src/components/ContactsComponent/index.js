import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import {CREATE_CONTACT} from '../../constants/routeNames';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';

const ContactsComponent = ({loading, data, sortBy}) => {
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, country_code, first_name, last_name, phone_number} =
      item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
              }}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name?.[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name?.[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>

              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>
              {`${country_code} ${phone_number}`}{' '}
            </Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white}}>
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
        {!loading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? data.splice(0, 20).sort((a, b) => {
                      if (sortBy === 'First Name') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }

                      if (sortBy === 'Last Name') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data.splice(0, 20)
              }
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 150}}></View>}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" color={colors.white} size={20} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
