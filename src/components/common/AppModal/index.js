import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from '../Icon';
import styles from './styles';

const AppModal = ({
  modalVisible,
  modalFooter,
  modalBody,
  title,
  setModalVisible,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon type="evil" size={27} name="close" />
              <Text styles={styles.title}> {title || 'RNContacts'}</Text>
              <View />
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>

            
              {modalFooter}
              {!modalFooter && (
                <View>
                  <>
                    <View style={styles.footerSeparator} />
                    <View style={styles.footerItems}>
                      <View style={styles.footer}>
                        <Text style={styles.footerText}>Privacy Policy</Text>
                        <View style={styles.termsView} />
                        <Text style={styles.footerText}>Terms of Service</Text>
                      </View>
                    </View>
                  </>
                </View>
              )}
           
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
