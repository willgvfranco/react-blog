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


import styles from './historias.scss';
import {Link} from 'react-router';
import Post from '../post/post';
import { getPostsByCategory } from '../../actions/postsByCategory';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class Historias extends Component {
  static contextTypes = {
  router: React.PropTypes.object.isRequired
};
  componentDidMount() {

  }
  renderPostsLM() {

  }

  joinPost(a) {
    if(a) {


        this.context.router.push('/post/'+a);
      }

  }

  renderNext() {
        var next = this.props.next;
            var previous = this.props.previous;
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    var mull=null;
    if(next.ID) {
      return (

      <div onClick={() => {this.joinPost(next.slug);}} className={`${previous.ID ? 'col-sm-6 col-md-6 col-md-offset-0 col-xs-12': 'col-md-10 col-md-offset-1 col-xs-12' } ${styles.proximaHist}`}>

        <div className={styles.boxProximo}>
        <div className={styles.boxIntro}>

        <div className={styles.acaoAnterior} style={{marginRight: '1em'}}>PRÓXIMA HISTÓRIA</div>
        <img width="8" height="10" className={styles.setinhaAcao} src={acaoSetaDireita}></img>
            </div>

            <div className={styles.imagemBlog}><div className={styles.content} style={{backgroundImage: `url('${next.preview_image||next.banner||mull}')`, backgroundSize: 'cover'}}></div></div>
        {/*<img src={next.preview_image||next.banner||mull} className={styles.FotoAcaoNoticias}></img>*/}
        <div className={styles.tituloNoticiaAcao}>{next.post_title}</div>
        </div>

      </div>
    )
    }
    else {
      return (
        <div></div>
      )
    }
  }
  renderPrevious() {
        var next = this.props.next;
            var previous = this.props.previous;
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
  var mull=null;
    if(previous.ID) {
      return (

      <div onClick={() => {this.joinPost(previous.slug);}} className={`${next.ID ? 'col-sm-6 col-md-6 col-md-offset-0 col-xs-12': 'col-md-10 col-md-offset-1 col-xs-12' } ${styles.anteriorHisto}`}>


        <div className={styles.boxIntro}>


        <img width="8" height="10" className={styles.setinhaAcao} src={acaoSetaEsquerda}></img>
        <div className={styles.acaoAnterior} style={{marginLeft: '1em'}}>HISTÓRIA ANTERIOR</div>
            </div>
            <div className={styles.imagemBlog}><div className={styles.content} style={{backgroundImage: `url('${previous.preview_image||previous.banner||mull}')`, backgroundSize: 'cover'}}></div></div>
        {/*<img src={previous.preview_image ? previous.preview_image : null} className={styles.FotoAcaoNoticias}></img>*/}
        <div className={styles.tituloNoticiaAcao}>{previous.post_title}</div>


      </div>
    )
    }
    else {
      return (
        <div></div>
      )
    }
  }
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');

    var next = this.props.next;
    var previous = this.props.previous;
    var nextSlug = next.slug;
    var previousSlug = previous.slug;


return (

            <div className={styles.historiasBox}>
              <div className="container">
          <div className="col-md-offset-2 col-lg-offset-2 col-xl-offset-2 col-sm-offset-2 col-md-8 col-lg-8 col-xl-8 col-sm-8 col-xs-12">

          {this.renderPrevious()}
          {this.renderNext()}
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
  return bindActionCreators({ getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Historias);
