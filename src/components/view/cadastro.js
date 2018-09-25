import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Cadastro extends Component {

  componentWillMount() {
    this.props.loginUser();
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: '#fff'}}>Cadastro</Text>
              <Image style={styles.logo} source={require('./../../assets/img/bus.png')}/>
            </View>
            
            <View style={styles.box_button}>
              <TouchableOpacity onPress={() => Actions['aluno'].call()}>
                <Image style={{width: 100, height: 100, tintColor: '#bc9f0b'}} source={require('./../../assets/img/study.png')}/>
                <Text style={{color: '#fff', fontSize: 20}}>Aluno</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 90}} >{Icons.check}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Cadastrar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box_button}>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 90}} >{Icons.check}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Cadastrar</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome style={{color: '#bc9f0b', fontSize: 90}} >{Icons.check}</FontAwesome>
                <Text style={{color: '#fff', fontSize: 20}}>Cadastrar</Text>
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
    width: Dimensions.get('window').width
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
  }
});


function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, { loginUser })(Cadastro);