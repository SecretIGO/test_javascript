import { StyleSheet } from 'react-native';
import { colors } from '../../../../../values/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.blue100,
  },
  button: {
    backgroundColor: colors.blue200,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white
  }
});

export default styles;