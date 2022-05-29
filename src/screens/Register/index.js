import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInstance';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name == 'password' && value.length <= 5) {
        setErrors(prev => {
          return {...prev, [name]: 'Password Should be more than 5 characters'};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    //validtions
    //console.log('form :>>', form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a Username'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please enter your First name'};
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please enter your Last Name'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your Email'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter your Password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN,{data: response});
      });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      onChange={onChange}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
