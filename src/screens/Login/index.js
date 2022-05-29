import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import Index from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = React.useState({});
  const [ justSignedUp, setJustSignedUp] = React.useState(false);

  const {params} = useRoute()
  
  React.useEffect(() =>{

    if(params?.data){
      setJustSignedUp(true)
      setForm({...form,userName:params.data.username,password:params.data.password})
    }

  },[params])

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false)
    setForm({...form, [name]: value});
  };

  return (
    <Index
      onSubmit={onSubmit}
      form={form}
      onChange={onChange}
      error={error}
      loading={loading}
      justSignedUp ={justSignedUp}
    />
  );
};

export default Login;
