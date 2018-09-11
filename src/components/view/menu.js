import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
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
        <View>
            <Text style={{color: '#fff'}} >Menu</Text>
            <FontAwesome style={{color: '#fff'}} >{Icons.check}</FontAwesome>
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
  }
});


function mapStateToProps (state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps, { loginUser })(Menu);