import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Menu extends Component {

  componentWillMount() {
    this.props.loginUser();
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: '#fff'}} >BuSchool</Text>
              <Image style={styles.logo} source={require('./../../assets/img/bus.png')}/>
            </View>
            
            <View style={styles.box_button}>
              <TouchableOpacity onPress={() => Actions['cadastro'].call()}>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 70}} >{Icons.check}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Cadastrar</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 70}} >{Icons.mapMarker}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Mapas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 70}} >{Icons.road}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Rotas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 70}} >{Icons.check}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Cadastrar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 70}} >{Icons.flag}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Ocorrências</Text>
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
    margin: 5
  }
});


function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, { loginUser })(Menu);