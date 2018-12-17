import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Cadastro extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>              
              <Text style={styles.title}>Cadastro</Text>
              <Image style={styles.logo} source={require('./../../assets/img/bus.png')}/>
            </View>
            
            <View style={styles.box_button}>
                <TouchableOpacity onPress={() => Actions['aluno'].call()} style={styles.button}>
                <FontAwesome style={styles.button_icon} >{Icons.graduationCap}</FontAwesome>
                <Text style={styles.button_text}>Aluno</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions['motorista'].call()} style={styles.button}>
                <FontAwesome style={styles.button_icon} >{Icons.idBadge}</FontAwesome>
                <Text style={styles.button_text}>Motorista</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
            <TouchableOpacity onPress={() => Actions['onibus'].call()} style={styles.button}>
                <FontAwesome style={styles.button_icon} >{Icons.bus}</FontAwesome>
                <Text style={styles.button_text}>Ônibus</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <FontAwesome style={styles.button_icon} >{Icons.mapO}</FontAwesome>
                <Text style={styles.button_text}>Rotas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
            <TouchableOpacity onPress={() => Actions['menu'].call()} style={styles.button}>
                <FontAwesome style={styles.button_icon}>{Icons.arrowLeft}</FontAwesome>
                <Text style={styles.button_text}>Voltar</Text>
              </TouchableOpacity>
            </View>

        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: Dimensions.get('window').width,
  },

  title:{
    fontSize : 48,
    color: '#fff',
    justifyContent: 'center'
  }, 
  logo: {
    width: 100,
    height: 100
  },
  box_button: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: '#0F0E0F',
    width: Dimensions.get('window').width,
    padding: '5%',
    margin: 10,
    justifyContent: "center"
  },

  button: {
    width: "50%",
    //backgroundColor: "#fff"
    justifyContent: "center",
    alignItems: "center"
  },

  button_icon: {
    color: '#bc9f0b',
    fontSize: 70,
    textAlign: "center"
  },

  button_text: {
    color: '#fff',
    fontSize: 20
  },

  button_return: {
    color: '#bc9f0b',
    fontSize: 48,
    textAlign: "center",
    textAlign: "left",
    padding: 10
  },
});

function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, {  })(Cadastro);