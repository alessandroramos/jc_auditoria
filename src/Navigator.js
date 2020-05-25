import React from 'react'
import { createSwitchNavigator,createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import AuthOrApp from './screens/AuthOrApp'
import Menu from './screens/Menu'
import TelaInic from './screens/TelaInic'
import Auth from './screens/Auth'


import Armarios from './screens/Armarios'
import BaixaEstoques from './screens/BaixaEstoques'
import Caixas from './screens/Caixas'
import Cofres from './screens/Cofres'
import Extintores from './screens/Extintores'
import Geradores from './screens/Geradores'
import Lixos from './screens/Lixos'

import MaloteTrocos from './screens/MaloteTrocos'
import Notas from './screens/Notas'
import ProcDocs from './screens/ProcDocs'

import Selos from './screens/Selos'

import Sensores from './screens/Sensores'
import Validades from './screens/Validades'

const MenuNavigator = createDrawerNavigator({
    TelaInic: {
        name: 'Home',
        screen: props =>
            <TelaInic {...props} />,
        navigationOptions: {
            title: 'Home'
        }
    },
    Armario:{
        name: 'Armario',
        screen: props => 
            <Armarios {...props} />,
        navigationOptions: {
            title: 'Armario'
        }
    },
    BaixaEstoque:{
        name: 'BaixaEstoque',
        screen: props => 
            <BaixaEstoques {...props} />,
        navigationOptions: {
            title: 'Baixa Estoque'
        }
    },
    Caixa:{
        name: 'Caixa',
        screen: props => 
            <Caixas {...props} />,
        navigationOptions: {
            title: 'Caixa'
        }
    },
    Cofre:{
        name: 'Cofre',
        screen: props => 
            <Cofres {...props} />,
        navigationOptions: {
            title: 'Cofre'
        }
    },
    Extintore:{
        name: 'Extintore',
        screen: props => 
            <Extintores {...props} />,
        navigationOptions: {
            title: 'Extintore'
        }
    },
    Geradore:{
        name: 'Geradore',
        screen: props => 
            <Geradores {...props} />,
        navigationOptions: {
            title: 'Geradore'
        }
    },
    Lixo: {
        name: 'Lixo',
        screen: props => 
            <Lixos {...props} />,
        navigationOptions: {
            title: 'Lixo'
        }
    },
    MaloteTroco:{
        name: 'MaloteTroco',
        screen: props => 
            <MaloteTrocos {...props} />,
        navigationOptions: {
            title: 'Malote de Troco'
        }
    },
    Nota: {
        name: 'Nota',
        screen: props => 
            <Notas {...props} />,
        navigationOptions: {
            title: 'Nota Fiscal'
        }
    },
    ProcDoc: {
        name: 'ProcDoc',
        screen: props => 
            <ProcDocs {...props} />,
        navigationOptions: {
            title: 'Protocolo de Documentos'
        }
    },
    Selo: {
        name: 'Selo',
        screen: props => 
            <Selos {...props} />,
        navigationOptions: {
            title: 'Selo'
       }
    },
    Sensore:{
        name: 'Sensore',
        screen: props => 
            <Sensores {...props} />,
        navigationOptions: {
            title: 'Sensore'
        }
    },
    Validade:{
        name: 'Validade',
        screen: props => 
            <Validades {...props} />,
        navigationOptions: {
            title: 'Validade'
        }
    },
},
{
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#000'
        },
        activeLabelStyle: {
            color: '#080',
        }
    }

});

const DrawerNavigatorConfig = {
    initialRouteName: TelaInic,
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#000'
        },
        activeLabelStyle: {
            color: '#080',
        }
    }

}
const MainRoutes = {
    Loading: {
        name: 'Loading',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}
const MainNavigator = createSwitchNavigator(MainRoutes, {
        initialRouteName: 'Loading'
})
export default createAppContainer(MainNavigator)
