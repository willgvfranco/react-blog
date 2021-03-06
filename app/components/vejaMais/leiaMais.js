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

import React, {Component} from 'react';


import styles from './leiaMais.less';
import {Link} from 'react-router';
import Post from '../post/post';
import { getPostsByCategory } from '../../actions/postsByCategory';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class LeiaMais extends Component {

  componentDidMount() {
//     let catsPosts = this.props.state.postsByCategory.posts;
//     var catsPostsl = catsPosts.length;
//     console.log(catsPostsl);as
//     if(catsPostsl === 0) {
// console.log("disparou");

  if(this.props.categoria && (this.props.state.postsByCategory.categoria!==this.props.categoria)) {
     this.props.getPostsByCategory(this.props.categoria);
   }
    // this.setState({ servicos: this.props.lavanderia.Services});
  }//s

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.categoria);
    if((this.props.categoria!==nextProps.categoria) && nextProps.categoria && (this.props.state.postsByCategory.categoria!==nextProps.categoria)) {
      this.props.getPostsByCategory(nextProps.categoria);
    }
  }

  componentDidUpdate() {
    // let catsPosts = this.props.state.postsByCategory.posts;
    // var catsPostsl = catsPosts.length;
    // console.log(catsPostsl);
    // if(catsPostsl == 0) {
// console.log("disparou");
    if(this.props.categoria && (this.props.state.postsByCategory.categoria!==this.props.categoria)) {
    //   this.props.getPostsByCategory(this.props.categoria);
     }
    // }
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

  renderPostsLM() {
    var categoria = this.props.categoria;
    var post = this.props.post;
    var catsPostsA = this.props.state.postsByCategory.posts;
    // console.log(catsPostsA);
    if(catsPostsA) {
      var count = 0;
      return catsPostsA.map((pt) => {

        if(pt.id == post) {
          return (<div key="samepost"></div>)
        }
        else if (count == 3) {
          return;
        } else {
          count++;
          return (
            <Post yessen={true} key={pt.id} noimage={true} data={pt}></Post>
          )
        }
      })
    }
  }
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');

return (
  <div className="container">
    {this.props.state.postsByCategory.posts&&(this.props.state.postsByCategory.posts.length>1)&& (
      <div className="col-md-offset-2 col-lg-offset-2 col-xl-offset-2 col-sm-offset-2 col-md-8 col-lg-8 col-xl-8 col-sm-8 col-xs-12">
<div className={styles.tituloLeiaMais}>LEIA TAMBÉM:</div>

{this.renderPostsLM()}
  </div>

    )}
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
  return bindActionCreators({ getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeiaMais);
