import React, { Component, useState } from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native'
import commonStyles from '../commonStyles'
import Imagens from './Imagens'
let stat = null


export default class AddSel extends Component   {   
    constructor(sta, props ) {
        super(sta, props)
        stat = sta
        this.state = this.getInitialState()
//        this.state = visible
    }

    getInitialState = () => {
        return {
            malote_trocosOperador: '',
            malote_trocosValor: '',
            malote_trocosDocOperador: '',
            malote_trocosResponsavel: '',
            malote_trocosObservacao: '',
            malote_trocosAuditor: '',
            showCamera: false
        }
    }
    
    save = () => {
        const data = { ...this.state }
        this.props.onSave(data)
    }

    camera = () => {
        this.setState({ showCamera: true })
    }

    cancelaImagem = () => {
        this.setState({ showCamera: false })
    }

    render() {
        return (
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide' transparent={true}
                onShow={() => this.setState({ ...this.getInitialState() })}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
                <ScrollView>
                    <View style={styles.container}>
                    <Imagens visibleImagens={this.state.showCamera} 
                        onCancelImagens={this.cancelaImagem}
                        dados={this.props.dados}
                    />

                        <Text style={styles.header}>Cadastro de MaloteTrocos</Text>

                        <TextInput placeholder="Informe o Operador..." style={styles.input}
                            onChangeText={malote_trocosOperador => this.setState({ malote_trocosOperador })}
                            value={this.state.malote_trocosOperador} />
                        <TextInput placeholder="Informe o Valor..." style={styles.input}
                            onChangeText={malote_trocosValor => this.setState({ malote_trocosValor })}
                            keyboardType={'numeric'}
                            value={this.state.malote_trocosValor} />
                        <TextInput placeholder="Informe o Operador..." style={styles.input}
                            onChangeText={malote_trocosDocOperador => this.setState({ malote_trocosDocOperador })}
                            value={this.state.malote_trocosDocOperador} />
                        <TextInput placeholder="Informe o Auditor..." style={styles.input}
                            onChangeText={malote_trocosAuditor => this.setState({ malote_trocosAuditor })}
                            value={this.state.malote_trocosAuditor} />                            
                        <TextInput placeholder="Observacao..." style={styles.input}
                            onChangeText={malote_trocosObservacao => this.setState({ malote_trocosObservacao })}
                            value={this.state.malote_trocosObservacao} />
                        <TextInput placeholder="Informe o responsável..." style={styles.input}
                            onChangeText={malote_trocosResponsavel => this.setState({ malote_trocosResponsavel })}
                            value={this.state.malote_trocosResponsavel} />
                        
                        <View style={{
                            justifyContent: 'flex-end',
                            borderWidth: 1,
                            marginTop: 10,
                            width: '40%',
                            marginLeft: '5%',
                            borderColor: '#848080',
                            backgroundColor: 'white',
                            borderRadius: 6
                            }}>
                            <TouchableOpacity onPress={this.camera}>
                                <Text style={styles.buttonE}>Câmera</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                            }}>
                            <TouchableOpacity onPress={this.props.onCancel}>
                                <Text style={styles.button}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.save}>
                                <Text style={styles.button}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#c8c3c3',
        justifyContent: 'space-between',
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    button: {
        margin: 20,
        marginRight: 30,
        marginBottom: 50,
    },
    buttonE: {
        margin: 20,
        marginRight: 30,
//        marginBottom: 20,
    },
    header: {
        backgroundColor: '#a18686',
        color: commonStyles.colors.default,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    input: {
        color: '#000',
        fontSize: 15,
        width: '90%',
        height: 40,
        marginTop: 4,
        marginLeft: '5%',
        backgroundColor: '#ede5e5',
        borderWidth: 1,
        borderColor: '#848080',
        borderRadius: 6
    },
    texto:{
        color: '#000',
        fontSize: 15,
        width: '90%',
        height: 40,
        marginTop: 4,
        padding: 6,
        marginLeft: '5%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#848080',
        borderRadius: 6
    },
    date: {
        color: commonStyles.colors.default,
        width: '90%',
        height: 35,
        fontSize: 15,
        marginLeft: '5%',
        marginTop: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
        padding: 5,
    }
})