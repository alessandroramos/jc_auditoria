import React, { Component, useState } from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
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
            validadesDescProduto: '',
            validadesQuantidade: '',
            validadesCodigoBarra: '',
            validadesPrecoCusto: '',
            validadesPrecoVenda: '',
            validadesDataVencimento: '',
            validadesResponsavel: '',
            validadesResponsavelComercial: '',
            validadesAcao: '',
            validadesResultado: '',
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

                        <Text style={styles.header}>Cadastro de Validades</Text>

                        <TextInput placeholder="Codigo de Barra..." style={styles.input}
                            onChangeText={validadesCodigoBarra => this.setState({ validadesCodigoBarra })}
                            keyboardType={'numeric'}
                            value={this.state.validadesCodigoBarra} />
                        <TextInput placeholder="Descrição do Produto.." style={styles.input}
                            onChangeText={validadesDescProduto => this.setState({ validadesDescProduto })}
                            value={this.state.validadesDescProduto} />
                        <TextInput placeholder="Informe a Quantidade..." style={styles.input}
                            onChangeText={validadesQuantidade => this.setState({ validadesQuantidade })}
                            value={this.state.validadesQuantidade} />
                        <TextInput placeholder="Preço de Custo..." style={styles.input}
                            onChangeText={validadesPrecoCusto => this.setState({ validadesPrecoCusto })}
                            keyboardType={'numeric'}
                            value={this.state.validadesPrecoCusto} />
                        <TextInput placeholder="Preço de Venda..." style={styles.input}
                            onChangeText={validadesPrecoVenda => this.setState({ validadesPrecoVenda })}
                            keyboardType={'numeric'}
                            value={this.state.validadesPrecoVenda} />
                        <TextInput placeholder="Data de Vencimento..." style={styles.input}
                            onChangeText={validadesDataVencimento => this.setState({ validadesDataVencimento })}
                            value={this.state.validadesDataVencimento} />
                        <TextInput placeholder="Responsavel..." style={styles.input}
                            onChangeText={validadesResponsavel => this.setState({ validadesResponsavel })}
                            value={this.state.validadesResponsavel} />
                        <TextInput placeholder="Responsavel Comercial..." style={styles.input}
                            onChangeText={validadesResponsavelComercial => this.setState({ validadesResponsavelComercial })}
                            value={this.state.validadesResponsavelComercial} />                            
                        <TextInput placeholder="Ação..." style={styles.input}
                            onChangeText={validadesAcao => this.setState({ validadesAcao })}
                            value={this.state.validadesAcao} />
                        <TextInput placeholder="Resultado..." style={styles.input}
                            onChangeText={validadesResultado => this.setState({ validadesResultado })}
                            value={this.state.validadesResultado} />

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