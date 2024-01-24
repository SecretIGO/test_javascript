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

  // signup button
  text_signup: {
    color: colors.blue300,
  },

  // button layout
  button_container: {
    backgroundColor: colors.blue300,
    overflow: 'hidden',
    borderRadius: 5,
    margin: 10,
  },
  button: {
    padding: 10,
  },
  button_text: {
    color: colors.white,
    fontSize: 18,
  }
});

export default styles;