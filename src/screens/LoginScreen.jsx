import { useFormik } from 'formik';
import { useContext } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { UserContext } from '../context/userContext';
import { login } from '../services/auth';

const LoginScreen = () => {
  const { setUser, user } = useContext(UserContext);
  console.log('contenu du context', user) 
  const onSubmit = async (values) => {
    console.log(values);

    const res = await login(values);

    const { data } = res;
    setUser(data);
  };

  const formik = useFormik({
    initialValues: {
      email: 'johndoe@email.com',
      password: 'secret123',
    },
    onSubmit,
  });

  console.log(formik.values);
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.heading}>Connexion</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      <View>
        <Button title="S'inscrire" onPress={formik.handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#222',
    padding: 5,
  },
  inputLabel: {
    color: '#999999',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
  },
  inputGroup: {
    marginBottom: 10,
  },
});

export default LoginScreen;
