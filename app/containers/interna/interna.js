import React, {Component} from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './interna.less';
import {Link} from 'react-router';
    import Assinatura from '../../components/assinatura/assinatura';
import Post from '../../components/post/post';
import Destaque from '../../components/destaque/destaque';
import Historias from '../../components/historias/historias';

export default class Interna extends Component {
  render() {

    var categoria = "Finanças";
  var titulo = "Inadimplência: perspectivas continuam negativas para 2016";
     var subTitulo = "Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.";
     var autor = "Isabella Abreu";
     var data = "22/02/2015";
     var tempo = "5 min";


     const banner = require('../../img/banner.png');
     const fbCinzaIcon = require('../../img/fbCinzaIcon.png');
     const twCinzaIcon = require('../../img/twCinzaIcon.png');
     const cmCinzaIcon = require('../../img/cmCinzaIcon.png');
     const lkCinzaIcon = require('../../img/lkCinzaIcon.png');
     const Facebook = require('../../img/Facebook.png');
     const Twitter = require('../../img/Twitter.png');
     const Linkedin = require('../../img/Linkedin.png');
     const fbBrancoIcon = require('../../img/fbBrancoIcon.png');
     const twBrancoIcon = require('../../img/twBrancoIcon.png');
     const lkBrancoIcon = require('../../img/lkBrancoIcon.png');

    const entrenaconversamobile = require('../../img/entrenaconversamobile.png');
    const entrenaconversadesktop = require('../../img/entrenaconversadesktop.png');


return (

<div className={styles.base}>
  <Header></Header>
  <div className={`${styles.imagemBanner}`} style={{ backgroundImage: 'url(' + banner + ')' }}>
    <div className={styles.backgroundBanner}>
      <div className="container">
        <div className={styles.informacoesBanner}>
          <div className={styles.corCategoria}>{categoria}</div>
          <div className={styles.tituloBanner}>{titulo}</div>
          <Assinatura cor="white" autor={autor} data={data} tempo={tempo}></Assinatura>
          <img className={styles.iconeDestaque} src={Facebook}></img>
          <img className={styles.iconeDestaque} src={Twitter}></img>
          <img className={styles.iconeDestaque} src={Linkedin}></img>
        </div>

      </div>
    </div>
  </div>
  <div className={styles.corpo}>

    <div className="container">
      <div className="col-md-2 col-lg-2 col-xl-2 col-sm-2 hidden-xs">
        <img className={styles.shareCollumn} src={fbCinzaIcon}></img>
        <img className={styles.shareCollumn} src={twCinzaIcon}></img>
        <img className={styles.shareCollumn} src={lkCinzaIcon}></img>
        <img className={styles.shareCollumn} src={cmCinzaIcon}></img>
      </div>
      <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-xs-12">
        <div className={styles.textoPostagem}>
          TEXTO TODO VEM AQUI DENTRO
        </div>
        <div className={styles.linhaCompartilhar}>
          <div className={styles.caixaAzul}>
            <img className={styles.shareRow} src={fbBrancoIcon}></img>
          </div>
          <div className={styles.caixaAzul}>
            <img className={styles.shareRow} src={twBrancoIcon}></img>
          </div>
          <div className={styles.caixaAzul}>
            <img className={styles.shareRow} src={lkBrancoIcon}></img>
          </div>
        </div>
        <div className={styles.tagsTitulo}>TAGS</div>
        <div className={styles.boxTags}>Empreendedorismo</div>
        <div className={styles.boxTags}>Crise</div>
        <div className={styles.boxTags}>Dívida</div>

        <img src={entrenaconversamobile} className={`${styles.entrenaconversamobile} hidden-sm hidden-lg hidden-md hidden-xl`}></img>
        <img src={entrenaconversadesktop} className={`${styles.entrenaconversadesktop} hidden-xs`}></img>
      </div>
    </div>


    <Historias></Historias>
    <LeiaMais></LeiaMais>
    <Destaque></Destaque>

  </div>

  <Footer></Footer>
</div>
)
}
}