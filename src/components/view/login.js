import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';
import { Actions } from 'react-native-router-flux';

class Login extends Component {

  componentWillMount() {
    this.props.loginUser();
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Button onPress={() => Actions['menu'].call()} style={{width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Click Me!</Text>
            </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, { loginUser })(Login);