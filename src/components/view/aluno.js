import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, List, ListItem, Right, Left } from 'native-base';
import { connect } from 'react-redux';
import { fetchAlunos, addAluno } from '../../actions/aluno';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Aluno extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: false
    }
  }
  componentDidMount() {
    this.props.fetchAlunos();
  }

  render() {
    return (
      <Container style={styles.container}>
        {
          this.state.form
            ? <FormAluno closeForm={() => this.setState({form: !this.state.form})} addAluno={this.props.addAluno}/>
            : <View>
              <Button style={{ backgroundColor: '#bc9f0b' }} onPress={() => this.setState({form: !this.state.form})}>
                <FontAwesome style={{ color: '#fff' }}>{Icons.plus}</FontAwesome>
                <Text style={{ color: '#fff' }}>Novo</Text>
              </Button>
              <ListAluno alunos={this.props.aluno} />
            </View>
        }
      </Container>
    );
  }
}

class FormAluno extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
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

  submit() {
    console.log(this.state);
    var aluno = {
      id: this.state.id,
      nome: this.state.nome,
      cpf: this.state.cpf,
      rg: this.state.rg,
      dataNascimento: this.state.dataNascimento,
      nomeResponsavel: this.state.nomeResponsavel,
      telefoneResponsavel: this.state.telefoneResponsavel,
      escola: this.state.escola,
      endereco: this.state.endereco,
      observacoes: this.state.observacoes
    }
    console.log(aluno);
    this.props.addAluno(aluno).then(() => {
      console.log('aqui')
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.props.closeForm}>
            <FontAwesome style={styles.button_return}>{Icons.angleLeft}</FontAwesome>
          </TouchableOpacity>

          <Text style={styles.title}>Aluno</Text>
          <Image style={styles.logo} source={require('./../../assets/img/bus.png')} />
        </View>
        <Form style={styles.formuario}>
          <Item>
            <Input onChangeText={(value) => this.setState({nome: value})} placeholder="Nome" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({cpf: value})} placeholder="CPF" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({rg: value})} placeholder="RG" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({dataNascimento: value})} type="date" placeholder="Data de Nascimento" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({nomeResponsavel: value})} placeholder="Nome Responsável" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({telefoneResponsavel: value})} placeholder="Telefone Responsável" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({escola: value})} placeholder="Escola" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({endereco: value})} placeholder="Endereço/Região" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({observacoes: value})} placeholder="Observações" style={{ color: '#fff' }} />
          </Item>
          <Button last onPress={this.submit} style={styles.button}>
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
          <Text style={{ color: '#fff' }}>Alunos</Text>
        </ListItem>
        {
          this.props.alunos.map(e => {
            return <ListItem icon>
              <Left>
                <Text style={{ color: '#fff' }}>{e.nome}</Text>
              </Left>
              <Right>
                <FontAwesome style={{ color: '#fff' }}>{Icons.pencil}</FontAwesome>
                <FontAwesome style={{ color: '#fff' }}>{Icons.timesCircle}</FontAwesome>
              </Right>
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

export default connect(mapStateToProps, { fetchAlunos, addAluno })(Aluno);