import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Login extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: -80, marginTop: 50}}>
              <Text style={styles.title}>BuSchool</Text>
              <Image style={styles.logo} source={require('./../../assets/img/bus.png')}/>
            </View>
          <Form style={styles.formuario}>
            <Item >
              <Input placeholder="Usuário" />
            </Item>
            <Item >
              <Input placeholder="Senha" />
            </Item>
            
            <Button last onPress={() => Actions['menu'].call()} style={styles.button}>
              <Text style={styles.button_text}>Entrar</Text>
            </Button>
          </Form> 
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
    backgroundColor: '#303030',
    width: Dimensions.get('window').width
  },
  logo: {
    width: 100,
    height: 100
  },

  button: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 5,
    marginTop: 30,
    backgroundColor: '#bc9f0b',
  },

  button_text: {
    color: '#fff',
    fontSize: 20
  },

  title:{
    fontSize : 48,
    color: '#fff',
    justifyContent: 'center'
  },

  formuario:{
    backgroundColor:'#424242',
    width: Dimensions.get('window').width,
    marginBottom: 100,
    padding: 10,
    paddingTop: 50,
    flex: 1, 
    //flexDirection: 'row', 
    alignItems: 'center', 
    //justifyContent: 'center'
  },
});


function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, {  })(Login);