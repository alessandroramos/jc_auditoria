import React, { useState } from "react";
import {
  Alert,
  Modal,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { uniqueId } from "lodash";
import axios from 'axios'
import { server, showError } from '../common'

import api from "../services/api";
import base64 from 'react-native-base64'


import Icon from "react-native-vector-icons/MaterialIcons";
import { RNCamera } from "react-native-camera";



const Camera = ({ isVisible, onChangePhoto, onCloseCamera }) => {
  const [camera, setCamera] = useState();
  const [realtyData, setRealtyData] = useState();

  const onTakePicture = async () => {
    try {
      const options = {
        quality: 0.5,
//        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true
      }
      const  data  = await camera.takePictureAsync(options);
      onChangePhoto(data);
    } catch (error) {
      Alert.alert("Erro", "Houve um erro ao tirar a foto. "+ error);
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <RNCamera
        ref={ref => setCamera(ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permissão para usar a câmera",
          message: "Precisamos da sua permissão para usar a câmera.",
          buttonPositive: "Ok",
          buttonNegative: "Cancelar"
        }}
        captureAudio={false}
      >
        <Icon
          name="photo-camera"
          size={40}
          color={"#fff"}
          onPress={onTakePicture}
          style={styles.buttonTakePicture}
        />
        <Icon
          name="close"
          size={50}
          color={"#fff"}
          onPress={onCloseCamera}
          style={styles.buttonCloseCamera}
        />
      </RNCamera>
    </Modal>
  );
};

const Imagens = ({visibleImagens, onCancelImagens, dados}) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onChangePhoto = data => {
    setPhoto(data.uri);
    console.log("---------------------------------------------------------------------")
    console.log("---------------------------------------------------------------------")
    console.log(data)
    setIsCameraVisible(false);
    setUploadedFile({
      file: data,
      id:uniqueId(),
      name: (dados.sistemaId+dados.rotinaId+dados.id+"jpg"),
    }) 
  };


  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

/*  const buscaImagens = async () =>{
    try {
      const res = await axios.get(`${server}/imagens`)
      console.log(res.data)
//      setPhoto(base64.decode(res.data[0].imagensImagem))
    } catch (err) {
      showError(err)
    }

  }
*/

  const saveImagens = async () =>{
    console.log("---------------------------------------------------------") 
    console.log("---------------------------------------------------------") 
    console.log("---------------------------------------------------------") 
    console.log(uploadedFile);
    console.log("---------------------------------------------------------") 
    console.log("---------------------------------------------------------") 
  
    const data = new FormData();

   
    data.append("file", uploadedFile.file, uploadedFile.name);

    console.log(data)
    console.log("---------------------------------------------------------") 
    
    api
      .post("uplouds", data)
      .then(response => {
        console.log("of")
      })
      .catch((err) => {
        showError(err)
      });


 /*       
    try {
      const res = await axios.post(`${server}/uplouds`, {data}, {}) 
        console.log("---------------------------------------------------------") 
        console.log(res.data)
    }catch(err){
        showError(err) 
      };

      */
    
    
    
    
    
/*    
    try {
        const res = await axios.post(`${server}/imagens`, {
            imagensDataCadastro: new Date(), 
            sistemas_id: dados.sistemaId, 
            rotinas_id: dados.rotinaId,
            Idtabela:  dados.id,
            imagensImagem: base64.encode(photo),
        })
    } catch (err) {
        showError(err)
    } 
  */  
  }


  return (
    <Modal animationType='slide' transparent={true} visible={visibleImagens}>
    <View style={styles.container}>
      <View style={styles.photo}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: photo }}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsCameraVisible(true);
          }}
        >
          <Icon name="camera-alt" size={40} color={"#f37272"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={ saveImagens }
        >
          <Icon name="save" size={40} color={"#f37272"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { setPhoto(null); }}
        >
          <Icon name="delete" size={40} color={"#f37272"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={ onCancelImagens }
        >
          <Icon name="close" size={40} color={"#f37272"} />
        </TouchableOpacity>
      </View>
      <Camera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
      />
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c8c3c3"
  },
  photo: {
    width: 400,
    height: 300,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 80
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: "center",
    position: "absolute",
    bottom: 20
  },
  buttonCloseCamera: {
    flex: 0,
    position: "absolute",
    top: 20,
    right: 20
  }
});

export default Imagens;