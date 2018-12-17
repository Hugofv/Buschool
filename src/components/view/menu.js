import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Menu extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.title} >BuSchool</Text>
              <Image style={styles.logo} source={require('./../../assets/img/bus.png')}/>
            </View>
            
            <View style={styles.box_button}>
              <TouchableOpacity onPress={() => Actions['cadastro'].call()} style={styles.button}>
                <FontAwesome style={styles.button_icon}>{Icons.plus}</FontAwesome>
                <Text style={styles.button_text}>Cadastrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <FontAwesome style={styles.button_icon}>{Icons.mapMarker}</FontAwesome>
                <Text style={styles.button_text}>Mapas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
              <TouchableOpacity style={styles.button}>
                <FontAwesome style={styles.button_icon}>{Icons.road}</FontAwesome>
                <Text style={styles.button_text}>Rotas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <FontAwesome style={styles.button_icon}>{Icons.areaChart}</FontAwesome>
                <Text style={styles.button_text}>Relatórios</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
              <TouchableOpacity style={styles.button}>
                <FontAwesome style={styles.button_icon}>{Icons.bullhorn}</FontAwesome>
                <Text style={styles.button_text}>Ocorrências</Text>
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
  }
});



function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, {  })(Menu);