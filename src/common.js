import { Alert, Platform } from 'react-native'
const server = Platform.OS === 'ios' ?
    'https://jcapp-275121.uc.r.appspot.com/' : 'https://jcapp-275121.uc.r.appspot.com/' 
    function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }