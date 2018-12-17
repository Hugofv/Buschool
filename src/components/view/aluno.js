import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { fetchAlunos } from '../../actions/aluno';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Aluno extends Component {

  componentDidMount() {
    this.props.fetchAlunos();
  }

  render() {
    return (
      <Container style={styles.container}>
        <ListAluno alunos={this.props.aluno} />
      </Container>
    );
  }
}

class FormAluno extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      rg: '',
      dataNascimento: '',
      nomeResponsavel: '',
      telefoneResponsavel: '',
      escola: '',
      endereco: '',
      observacoes: ''
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => Actions['cadastro'].call()}>
            <FontAwesome style={styles.button_return}>{Icons.angleLeft}</FontAwesome>
          </TouchableOpacity>

          <Text style={styles.title}>Aluno</Text>
          <Image style={styles.logo} source={require('./../../assets/img/bus.png')} />
        </View>
        <Form style={styles.formuario}>
          <Item>
            <Input onChangeText={va} placeholder="Nome" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="CPF" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="RG" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input type="date" placeholder="Data de Nascimento" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="Nome Responsável" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="Telefone Responsável" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="Escola" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="Endereço/Região" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input placeholder="Observações" style={{ color: '#fff' }} />
          </Item>
          <Button last onPress={() => Actions['cadastro'].call()} style={styles.button}>
            <Text style={styles.button_text}>Salvar</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

class ListAluno extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    console.log(this.props.alunos)
    return (
      <List>
        <ListItem itemHeader first>
          <Text style={{color: '#fff'}}>Alunos</Text>
        </ListItem>
        {
          this.props.alunos.map(e => {
            return <ListItem>
                    <Text style={{color: '#fff'}}>{e.nome}</Text>
                  </ListItem>
          })
        }
      </List>
    )
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
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#bc9f0b',
  },

  button_text: {
    color: '#fff',
    fontSize: 20
  },

  formuario: {
    backgroundColor: '#0F0E0F',
    width: Dimensions.get('window').width,
    padding: 10
  },

  title: {
    fontSize: 48,
    color: '#fff',
    justifyContent: 'center'
  },

  button_return: {
    color: '#bc9f0b',
    fontSize: 48,
    textAlign: "center",
    textAlign: "left",
    padding: 10
  },

});


function mapStateToProps(state) {
  return {
    width: Dimensions.get('window').width,
    aluno: state.aluno.alunos
  }
}

export default connect(mapStateToProps, { fetchAlunos })(Aluno);