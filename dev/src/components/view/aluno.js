import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchAlunos, addAluno } from '../../actions/aluno';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Form, Item, Input, Button, List, ListItem, Right, Left } from 'native-base';


class Aluno extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: false,
      aluno: {},
    }
  }

  componentWillMount() {
    this.props.fetchAlunos();
  }

  render() {
    return (
      <Container style={styles.container}>
        {
          this.state.form
            ? <FormAluno closeForm={() => this.setState({ form: !this.state.form })} aluno={this.state.aluno} addAluno={this.props.addAluno} />
            : <Container style={styles.container}>
              <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                <Button style={{ backgroundColor: '#bc9f0b', width: '98%', margin: 5, justifyContent: 'flex-start'}} onPress={() => this.setState({ form: !this.state.form })}>
                  <FontAwesome style={{ color: '#fff', marginRight: 10, marginLeft: 10 }}>{Icons.plus}</FontAwesome>
                  <Text style={{ color: '#fff' }}>Novo</Text>
                </Button>
                <ListAluno toggleForm={() => this.setState({ form: !this.state.form })} setAluno={(aluno) => this.setState({ aluno: aluno })} alunos={this.props.aluno} />
              </View>
            </Container>
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
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.aluno.key,
      nome: this.props.aluno.nome,
      cpf: this.props.aluno.cpf,
      rg: this.props.aluno.rg,
      dataNascimento: this.props.aluno.dataNascimento,
      nomeResponsavel: this.props.aluno.nomeResponsavel,
      telefoneResponsavel: this.props.aluno.telefoneResponsavel,
      escola: this.props.aluno.escola,
      endereco: this.props.aluno.endereco,
      observacoes: this.props.aluno.observacoes
    });
  }

  submit() {
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
    this.props.addAluno(aluno).then(() => {
      this.props.closeForm();
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
            <Input onChangeText={(value) => this.setState({ nome: value })} value={this.state.nome} placeholder="Nome" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ cpf: value })} value={this.state.cpf} placeholder="CPF" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ rg: value })} value={this.state.rg} placeholder="RG" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ dataNascimento: value })} value={this.state.dataNascimento} type="date" placeholder="Data de Nascimento" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ nomeResponsavel: value })} value={this.state.nomeResponsavel} placeholder="Nome Responsável" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ telefoneResponsavel: value })} value={this.state.telefoneResponsavel} placeholder="Telefone Responsável" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ escola: value })} value={this.state.escola} placeholder="Escola" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ endereco: value })} value={this.state.endereco} placeholder="Endereço/Região" style={{ color: '#fff' }} />
          </Item>
          <Item>
            <Input onChangeText={(value) => this.setState({ observacoes: value })} value={this.state.observacoes} placeholder="Observações" style={{ color: '#fff' }} />
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

  constructor(props) {
    super(props);

    this.updateAluno = this.updateAluno.bind(this);
  }

  updateAluno(aluno) {
    this.props.setAluno(aluno);
    this.props.toggleForm();
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <List>
            <ListItem itemHeader first>
              <Text style={{ color: '#fff' }}>Alunos</Text>
            </ListItem>
            {
              this.props.alunos.map(e => {
                return <ListItem key={e.key} icon>
                  <Left>
                    <Text style={{ color: '#fff' }}>{e.nome}</Text>
                  </Left>
                  <Right>
                    <TouchableOpacity onPress={() => this.updateAluno(e)}>
                      <FontAwesome style={{ color: '#fff' }}>{Icons.pencil}</FontAwesome>
                    </TouchableOpacity>
                    <FontAwesome style={{ color: '#fff' }}>{Icons.timesCircle}</FontAwesome>
                  </Right>
                </ListItem>
              })
            }
          </List>
        </View>
      </Container>
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
  box_button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0F0E0F',
    padding: '5%',
  },
  title: {
    fontSize: 48,
    color: '#fff',
    justifyContent: 'center'
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