import { StyleSheet } from 'react-native';
import { colors } from '../../../../../values/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image_logo: {
        width: '50%',
        height: 50,
    },  

    button_back_container: {
        position: 'absolute',
        height: 35,
        width: 35,
        top: 50,
        left: 20,
        borderRadius: 50,
        overflow: 'hidden',
        
    },
    button_back: {
        padding: 2,
        width: '100%',
        height: '100%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_back_icon: {
        width: '100%',
        height: '100%',
        margin: 10,
        resizeMode: 'contain',
        borderRadius: 50,
        
    },

    text_input: {
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 12,
        margin: 5,
        border: '1px solid ' + colors.blue300,
        width: '95%',
    },
    link_forgor_password: {
        color: colors.blue300,
        marginEnd: 10,
        fontWeight: 'bold',
    },
    link_signin: {
        color: colors.blue300,
        marginEnd: 10,
        fontWeight: 'bold',
    },

    container_option_signin: {
        alignItems: 'center',
        marginBottom: 20,
    },

    /***
     * Signup Options
     */

    text_login_options: {
        color: colors.blue100,
        fontWeight: 'bold',
    },

    login_options_container: {
        alignItems: 'center',
    },
    login_options: {
        flexDirection: 'row',
    },

    button_option_circ: {
        height: 35,
        width: 35,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 15,
        borderRadius: 50,
        overflow: 'hidden',
        position: 'relative'
    },
    button_option_icon: {
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // button
    button_container: {
        margin: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: colors.blue300,
        padding: 15,
        borderRadius: 5,
        overflow: 'hidden',
    },
    button_text: {
        color: 'white',
        textAlign: 'center',
    },

    outer_container: {
        flex: 1,
        justifyContent: 'flex-end',
    },

});

export default styles;