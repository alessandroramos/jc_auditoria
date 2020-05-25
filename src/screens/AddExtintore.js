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
    }

    getInitialState = () => {
        return {
            extintoresLocal: '',
            extintoresCarga: '',
            extintoresLimpeza: '',
            extintoresPressao: '',
            extintoresValidade: '',
            extintoresLacre: '',
            extintoresPrevencao: '',
            extintoresObservacao: '',
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

                        <Text style={styles.header}>Cadastro de Extintores</Text>

                        <TextInput placeholder="Informe o Local..." style={styles.input}
                            onChangeText={extintoresLocal => this.setState({ extintoresLocal })}
                            value={this.state.extintoresLocal} />
                        <TextInput placeholder="Carga..." style={styles.input}
                            onChangeText={extintoresCarga => this.setState({ extintoresCarga })}
                            value={this.state.extintoresCarga} />
                        <TextInput placeholder="Limpeza..." style={styles.input}
                            onChangeText={extintoresLimpeza => this.setState({ extintoresLimpeza })}
                            value={this.state.extintoresLimpeza} />
                        <TextInput placeholder="Pressão..." style={styles.input}
                            onChangeText={extintoresPressao => this.setState({ extintoresPressao })}
                            value={this.state.extintoresPressao} />
                        <TextInput placeholder="Validade..." style={styles.input}
                            onChangeText={extintoresValidade => this.setState({ extintoresValidade })}
                            value={this.state.extintoresValidade} />
                        <TextInput placeholder="Lacre..." style={styles.input}
                            onChangeText={extintoresLacre => this.setState({ extintoresLacre })}
                            value={this.state.extintoresLacre} />
                        <TextInput placeholder="Prevenção..." style={styles.input}
                            onChangeText={extintoresPrevencao => this.setState({ extintoresPrevencao })}
                            value={this.state.extintoresPrevencao} />                            
                        <TextInput placeholder="Observacao..." style={styles.input}
                            onChangeText={extintoresObservacao => this.setState({ extintoresObservacao })}
                            value={this.state.extintoresObservacao} />

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