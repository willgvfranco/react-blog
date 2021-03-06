/**
* @license
* Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
*
* This file is part of Brasilcap Blog Project.
* The complete set of authors may be found at http://www.effy.com.br
* Unauthorized copying of this file, via any medium is strictly prohibited
* This code can not be copied and/or distributed without the express
* permission of EFFY
* Effy - support@effy.com.br
*************************************************************************/

/*
5 = ESTILO
2 = financas
4 = imoveis
3 = MUNDO
1 = semcategoria

*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './filtro.css';
import { selectCategory } from '../../actions/selectCategory';
import { getPostsByCategory } from '../../actions/postsByCategory';
import {Link} from 'react-router';

class Filtro extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  static propTypes = {};

  componentDidMount() {
    var where = window.location.pathname;
    // console.log(where);
    if (where != "/") {
      // console.log('foi');
      this.props.selectCategory(0);
  }
  else {

  var selected = this.props.state.selectedCategory.selected;
  if (selected) {
    this.props.selectCategory(selected);
    this.props.getPostsByCategory(selected,0);
  }
  else {

  this.props.selectCategory(10);
  this.props.getPostsByCategory(10,0);
}
}
}

SendGetPostsByCategory(e) {
  var where = window.location.pathname;
  console.log(where);
  if (where != "/") {
    console.log('foi');

  this.context.router.push("/");
}
  this.props.selectCategory(e,0);
this.props.getPostsByCategory(e,0);
}

  render() {

    const iconeFiltroMeioAmbiente = require('../../img/meioambiente-positivo.png');
    const iconeFiltroFinancas = require('../../img/financas-positivo.png');
    const iconeFiltroAtualidades = require('../../img/atualidades-positivo.png');
    const iconeFiltroCapitalizacao = require('../../img/capitalizacao-positivo.png');
    const iconeFiltroRecentes = require('../../img/recentes-positivo.png');

    const iconeFiltroRecentesHover = require('../../img/recentes-negativo.png');
    const iconeFiltroMeioAmbienteHover = require('../../img/meioambiente-negativo.png');
    const iconeFiltroFinancasHover = require('../../img/financas-negativo.png');
    const iconeFiltroAtualidadesHover = require('../../img/atualidades-negativo.png');
    const iconeFiltroCapitalizacaoHover = require('../../img/capitalizacao-negativo.png');

    return (

<div className="container">
  <div className={styles.linhaFlex}>
  <div onClick={() => {this.SendGetPostsByCategory(10)}} onMouseLeave={e => {e.persist(); this.refs.imgRecentes.src = (this.props.state.selectedCategory.selected == 10) ? iconeFiltroRecentesHover : iconeFiltroRecentes}} onMouseOver={e => {e.persist(); this.refs.imgRecentes.src = iconeFiltroRecentesHover}} className={`${styles.boxTags} ${this.props.state.selectedCategory.selected === 10 ? styles.recenteSelected : styles.recente}`}>
    <img height="30" width="30" className={styles.iconeFiltro} ref="imgRecentes" src={(this.props.state.selectedCategory.selected == 10) ? iconeFiltroRecentesHover : iconeFiltroRecentes}></img>
  <div className={styles.nomeFiltro}>Recentes</div>
  </div>
  <div onClick={() => {this.SendGetPostsByCategory(2)}}  onMouseLeave={e => {e.persist(); this.refs.imgFinancas.src = (this.props.state.selectedCategory.selected == 2) ? iconeFiltroFinancasHover : iconeFiltroFinancas}} onMouseOver={e => {e.persist(); this.refs.imgFinancas.src = iconeFiltroFinancasHover}} className={`${this.props.state.selectedCategory.selected == 2 ? styles.financasSelected : styles.financas} ${styles.boxTags}`}>
    <img height="30" width="30" ref="imgFinancas" className={styles.iconeFiltro} src={(this.props.state.selectedCategory.selected == 2) ? iconeFiltroFinancasHover : iconeFiltroFinancas}></img>
  <div className={styles.nomeFiltro}>Meu Dinheiro</div>
  </div>
  <div
    onClick={() => {this.SendGetPostsByCategory(3)}}
    onMouseLeave={e => {e.persist(); this.refs.imgCapitalizacao.src = (this.props.state.selectedCategory.selected == 3) ? iconeFiltroCapitalizacaoHover : iconeFiltroCapitalizacao}}
    onMouseOver={e => {e.persist(); this.refs.imgCapitalizacao.src = iconeFiltroCapitalizacaoHover}}
    className={`${this.props.state.selectedCategory.selected == 3 ? styles.mundoSelected : styles.mundo} ${styles.boxTags}`}>
    <img height="30" ref="imgCapitalizacao" width="30" className={styles.iconeFiltro} src={(this.props.state.selectedCategory.selected == 3) ? iconeFiltroCapitalizacaoHover : iconeFiltroCapitalizacao}></img>
  <div className={styles.nomeFiltro}>Minha Capitalização</div>
  </div>
  {/*<div onClick={() => {this.SendGetPostsByCategory(4)}}
    onMouseLeave={e => {e.persist(); this.refs.imgAtualidades.src = (this.props.state.selectedCategory.selected == 4) ? iconeFiltroAtualidadesHover : iconeFiltroAtualidades}}
    onMouseOver={e => {e.persist(); this.refs.imgAtualidades.src = iconeFiltroAtualidadesHover}}
    className={`${this.props.state.selectedCategory.selected == 4 ? styles.imoveisSelected : styles.imoveis} ${styles.boxTags}`}>
    <img height="30" width="30" ref="imgAtualidades" className={styles.iconeFiltro} src={(this.props.state.selectedCategory.selected == 4) ? iconeFiltroAtualidadesHover : iconeFiltroAtualidades}></img>
  <div className={styles.nomeFiltro}>Meu dia-a-dia</div>
  </div>*/}
  <div onClick={() => {this.SendGetPostsByCategory(5)}}  onMouseLeave={e => {e.persist(); this.refs.imgMeioAmbiente.src = (this.props.state.selectedCategory.selected == 5) ? iconeFiltroMeioAmbienteHover : iconeFiltroMeioAmbiente}} onMouseOver={e => {e.persist(); this.refs.imgMeioAmbiente.src = iconeFiltroMeioAmbienteHover}} className={`${this.props.state.selectedCategory.selected == 5 ? styles.estilosSelected : styles.estilos} ${styles.boxTags}`}>
    <img height="30" width="30" ref="imgMeioAmbiente" className={styles.iconeFiltro} src={(this.props.state.selectedCategory.selected == 5) ? iconeFiltroMeioAmbienteHover : iconeFiltroMeioAmbiente}></img>
  <div className={styles.nomeFiltro}>Meu Mundo</div>
  </div>
</div>
</div>
)
}
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory, getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro);
