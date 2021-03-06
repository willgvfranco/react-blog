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

import Slider from '../../components/slider/slider';

import styles from './header.less';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTags } from '../../actions/tags';
import { getCategories } from '../../actions/categories';
import { searchOn } from '../../actions/search';
import Contato from '../../components/contato/contato';
import { showModal } from '../../actions/modal';
import SearchForm from '../../components/searchForm/searchForm';
const fecharBusca = require('../../img/fecharBusca.png');

class Header extends Component {
  static contextTypes = {
  router: React.PropTypes.object.isRequired,
  location: React.PropTypes.object
};

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchOn: false,
    };
  }

  componentDidMount() {
     this.props.getTags();
     this.props.getCategories();
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

  componentDidUpdate() {
    if((this.context.location.pathname.indexOf('/busca')===-1) && this.props.state.search.searchOn) {
      this.props.searchOn(false);
    }
  }

  close() {
  this.props.showModal(false);
}

open() {
  console.log(this);
this.props.showModal(true);
}

searchStart(e) {
  var search = 'go';
  console.log(search);
  var searchOn = this.props.state.search.searchOn;
  if(searchOn) {
    this.props.searchOn(false);
    this.context.router.goBack();
  }
  else {
    this.props.searchOn(true);

        this.context.router.push("/busca");
  }

}

  render() {
    const logo = require('../../img/zerop.png');
    const mail = require('../../img/Mail.png');
    const lupa = require('../../img/Lupa.png');
    const div = require('../../img/Div.png');


      var searchOn = this.props.state.search.searchOn;
return (

<div className={`${styles.headerFull}`}>
  <div className={`container`}>
    <div className={styles.headerIn}>
    <div className={styles.LogoNome}>
      {/*<img src={logo}></img>*/}
      <Link className={styles.masterLink} to="/">
      <img width="165" height="40" src={logo}/>
      </Link>
      <div className={`${styles.contato} ${styles.full}`}>
        {/*<Lupa onClick={(e) => {this.searchStart();}} width="20" height="20" className={styles.iconeIndividual} isOn={searchOn}></Lupa>*/}

        </div>
    </div>
      <SearchForm classe={styles.full} headerzin="true"/>
    <div className={`${styles.IconesHeader} ${styles.mini}`}>
      <img width="21" height="20" className={styles.iconeIndividual} onClick={(e) => {this.open();}} src={mail}></img>
      <img className={styles.iconeIndividual} src={div}></img>

      <img onClick={(e) => {this.searchStart();}} width="20" height="20" className={styles.iconeIndividual} src={searchOn ? fecharBusca : lupa}></img>
    </div>
    <div className={`${styles.IconesHeader} ${styles.full}`}>
      <Facebook onClick={() => {window.location.href="https://www.facebook.com/Brasilcap/"}} className={styles.iconeIndividual}></Facebook>
      <Twitter onClick={() => {window.location.href="https://twitter.com/brasilcapbr"}} className={styles.iconeIndividual}></Twitter>
      <LinkedIn onClick={() => {window.location.href="https://www.linkedin.com/company/brasilcap"}} className={styles.iconeIndividual}></LinkedIn>
      <ContatoIcon className={styles.iconeIndividual} onClick={(e) => {this.open();}}></ContatoIcon>
    </div>


  </div>
<Contato></Contato>
<div className={`container`}>
<div className={styles.slogan}>

<span className={styles.tituloSlogan}>Zero Perrengue</span> é um blog que te ajuda a levar uma vida com menos aperto, com conteúdo para um dia a dia mais saudável pro seu bolso e pro seu meio ambiente. Consuma sem moderação!
</div>
</div>

</div>
</div>
)
}
}
function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTags, getCategories, searchOn, showModal }, dispatch);
}

var LinkedIn=function(props) {
  return (<svg  style={{fill: 'white'}} {...props} version="1.1" id="Camada_1" x="0px" y="0px"
  	 width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22">
  <g>
  	<path d="M20.984,13.572c-0.007-0.633-0.084-1.275-0.217-1.894c-0.277-1.291-0.894-2.389-2.056-3.109
  		c-0.929-0.575-1.95-0.75-3.035-0.689c-1.361,0.077-2.441,0.642-3.253,1.725c-0.057,0.076-0.116,0.149-0.214,0.275
  		c0-0.518-0.01-0.974,0.004-1.43c0.007-0.214-0.045-0.299-0.281-0.297c-1.257,0.011-2.514,0.009-3.771,0.001
  		C7.954,8.154,7.878,8.21,7.878,8.429c0.005,4.093,0.005,8.186-0.001,12.279c0,0.221,0.061,0.293,0.289,0.291
  		c1.257-0.01,2.514-0.004,3.771-0.005c0.079,0,0.158-0.01,0.272-0.017c0-0.149,0-0.266,0-0.382c0-2.222,0-4.444,0-6.666
  		c0-0.69,0.127-1.338,0.613-1.875c0.607-0.669,1.36-0.896,2.23-0.714c0.782,0.164,1.238,0.7,1.407,1.444
  		c0.112,0.494,0.162,1.01,0.167,1.518c0.018,1.97,0.008,3.94,0.008,5.91c0,0.783,0,0.783,0.772,0.783
  		c1.085,0,2.171-0.008,3.256,0.006c0.259,0.003,0.339-0.068,0.338-0.33C20.99,18.304,21.009,15.938,20.984,13.572z"/>
  	<path d="M5.296,8.155c-1.23,0.009-2.46,0.004-3.69,0.004c-0.346,0-0.347,0.001-0.347,0.36c0,2.015,0,4.03,0,6.045
  		c0,2.051,0.002,4.102-0.004,6.153c-0.001,0.202,0.045,0.283,0.269,0.281c1.266-0.01,2.532-0.01,3.799,0
  		c0.223,0.002,0.269-0.077,0.269-0.28c-0.005-4.093-0.005-8.187,0.001-12.28C5.592,8.209,5.514,8.154,5.296,8.155z"/>
  	<path d="M4.892,2.4C4.259,1.993,3.56,1.929,2.834,2.064C1.511,2.308,0.725,3.57,1.089,4.859c0.287,1.016,1.144,1.613,2.318,1.635
  		c0.232-0.027,0.47-0.031,0.696-0.086c0.936-0.229,1.538-0.8,1.736-1.752C6.014,3.81,5.623,2.871,4.892,2.4z"/>
  </g>
</svg>)

}

var Twitter=function(props) {
  return (<svg  style={{fill: 'white'}} {...props} version="1.1" id="Camada_1" x="0px" y="0px"
  	 width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22">
  <path  d="M7.601,19c-0.217,0-0.434,0-0.651,0c-0.021-0.006-0.043-0.016-0.064-0.016c-0.615-0.012-1.225-0.082-1.828-0.197
  	c-1.432-0.272-2.766-0.793-4.001-1.555c-0.016-0.01-0.03-0.024-0.057-0.045c1.092,0.121,2.153,0.038,3.195-0.249
  	c1.041-0.287,1.987-0.759,2.838-1.421c-0.571-0.03-1.117-0.148-1.633-0.386c-0.516-0.237-0.964-0.565-1.342-0.983
  	c-0.378-0.419-0.656-0.893-0.827-1.413c0.309,0.015,0.612,0.043,0.914,0.04c0.302-0.002,0.602-0.046,0.914-0.138
  	c-2.48-0.551-3.37-2.769-3.264-3.97c0.289,0.106,0.58,0.223,0.879,0.318C2.976,9.082,3.289,9.12,3.609,9.123
  	c-0.871-0.615-1.453-1.421-1.69-2.449C1.682,5.646,1.836,4.67,2.365,3.742C3.422,5.005,4.678,6.004,6.15,6.738
  	c1.471,0.734,3.031,1.137,4.683,1.224c-0.002-0.021-0.003-0.032-0.005-0.043c-0.115-0.538-0.13-1.077-0.026-1.618
  	c0.166-0.867,0.576-1.604,1.23-2.207c0.618-0.57,1.35-0.919,2.19-1.044C14.336,3.033,14.45,3.017,14.564,3c0.182,0,0.363,0,0.545,0
  	c0.025,0.006,0.049,0.015,0.074,0.018c0.15,0.02,0.303,0.03,0.451,0.059c0.825,0.164,1.538,0.537,2.129,1.127
  	c0.056,0.056,0.106,0.071,0.182,0.055c0.857-0.182,1.667-0.485,2.426-0.917c0.018-0.01,0.038-0.016,0.071-0.03
  	c-0.33,0.949-0.921,1.673-1.789,2.211c0.043,0,0.06,0.003,0.076,0c0.341-0.065,0.688-0.109,1.02-0.203
  	C20.173,5.201,20.584,5.042,21,4.901c0,0.006,0,0.012,0,0.017c-0.016,0.015-0.035,0.028-0.047,0.045
  	c-0.535,0.766-1.183,1.425-1.942,1.98c-0.031,0.022-0.054,0.074-0.055,0.112c-0.008,0.339-0.003,0.679-0.014,1.018
  	c-0.018,0.567-0.1,1.127-0.217,1.682c-0.249,1.189-0.671,2.316-1.266,3.38c-0.802,1.434-1.852,2.662-3.187,3.644
  	c-1.946,1.433-4.151,2.129-6.57,2.205C7.669,18.985,7.635,18.994,7.601,19z"/>
</svg>)
}

var Facebook=function(props) {
  return (
    <svg  style={{fill: 'white'}} {...props} version="1.1" id="Camada_1" x="0px" y="0px"
    	 width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22">
    <path d="M11.684,20.999c-0.026,0-0.052,0.001-0.078,0.001c-3.161,0-6.323,0-9.484,0c-0.496,0-0.915-0.302-1.068-0.766
    	c-0.043-0.131-0.054-0.266-0.054-0.403c0-3.74,0-7.48,0-11.219C1.001,6.46,1.001,4.309,1,2.157c0-0.279,0.07-0.532,0.249-0.749
    	c0.201-0.243,0.46-0.38,0.776-0.402c0.064-0.004,0.128-0.005,0.191-0.005c5.872,0,11.744,0,17.616-0.001
    	c0.265,0,0.51,0.059,0.723,0.222c0.287,0.219,0.431,0.513,0.444,0.873C21,2.113,21,2.132,21,2.151c0,5.9,0,11.8,0,17.699
    	c0,0.336-0.11,0.626-0.358,0.856c-0.21,0.195-0.462,0.293-0.748,0.293C18.198,21,16.503,21,14.807,21
    	c-0.003,0-0.007-0.001-0.01-0.001c0-0.026,0.001-0.052,0.001-0.078c0-2.534,0-5.069-0.001-7.603c0-0.052,0.011-0.066,0.065-0.065
    	c0.827,0.002,1.654,0.001,2.481,0.003c0.048,0,0.059-0.015,0.064-0.06c0.061-0.491,0.125-0.982,0.189-1.473
    	c0.061-0.476,0.121-0.951,0.185-1.427c0.007-0.055-0.007-0.06-0.055-0.06c-0.956,0.001-1.913,0.001-2.869,0.002
    	c-0.048,0-0.059-0.013-0.059-0.06c0.002-0.618,0.001-1.236,0.001-1.854c0-0.192,0.01-0.383,0.048-0.572
    	c0.085-0.422,0.328-0.701,0.744-0.825c0.208-0.062,0.423-0.085,0.639-0.086c0.539-0.003,1.077-0.002,1.616-0.001
    	c0.032,0,0.048-0.003,0.048-0.043c-0.001-0.872-0.001-1.744,0-2.616c0-0.032-0.008-0.045-0.042-0.047
    	c-0.174-0.015-0.347-0.035-0.521-0.048c-0.617-0.044-1.234-0.071-1.852-0.064c-0.488,0.005-0.966,0.075-1.428,0.236
    	c-0.989,0.345-1.677,1.004-2.062,1.977c-0.213,0.539-0.301,1.103-0.304,1.681c-0.005,0.751-0.002,1.502-0.003,2.253
    	c0,0.078,0.006,0.067-0.065,0.067c-0.827,0-1.654,0-2.481-0.001c-0.044,0-0.061,0.007-0.061,0.057c0.002,0.969,0.002,1.937,0,2.906
    	c0,0.046,0.012,0.056,0.057,0.056c0.825-0.001,1.651-0.001,2.476-0.001c0.083,0,0.074-0.013,0.074,0.074c0,2.531,0,5.062,0,7.593
    	C11.682,20.947,11.683,20.973,11.684,20.999z"/>
    </svg>
  )
}

var Lupa=function(props) {
  return !props.isOn ? (<svg {...props}  version="1.1" style={{fill: '#fff', marginTop: "-5px"}} id="Camada_1"   x="0px" y="0px"
  	 width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22">
  <path d="M21,18.496l-4.959-4.959c2.012-3.156,1.644-7.391-1.112-10.147C13.336,1.797,11.248,1,9.16,1S4.983,1.797,3.39,3.39
  	c-3.187,3.186-3.187,8.353,0,11.539c1.593,1.593,3.682,2.39,5.77,2.39c1.524,0,3.046-0.429,4.378-1.278L18.496,21L21,18.496z
  	 M4.463,13.856c-1.255-1.255-1.945-2.922-1.945-4.697s0.691-3.442,1.945-4.697C5.718,3.209,7.386,2.518,9.16,2.518
  	s3.442,0.691,4.697,1.945c1.255,1.254,1.945,2.922,1.945,4.697s-0.691,3.442-1.945,4.697c-1.254,1.254-2.922,1.945-4.697,1.945
  	S5.718,15.111,4.463,13.856z"/>
</svg>) : (
  <img {...props} width="20" height="20" className={styles.iconeIndividual} src={ fecharBusca}/>
)
}
var Whatsapp=function(props) {
  return (  <svg
version="1.1"
style={{fill: 'white'}} {...props}
x="0px"
y="0px"
width="22px"
height="22px"
viewBox="0 0 22 22"
 data-action="share/whatsapp/share"
>
      <path d="M10.553,1c0.415,0,0.831,0,1.246,0c0.226,0.031,0.451,0.064,0.677,0.092c1.503,0.187,2.882,0.71,4.144,1.54
c0.894,0.589,1.672,1.307,2.329,2.155c1.013,1.307,1.66,2.772,1.921,4.405c0.05,0.314,0.087,0.63,0.13,0.945
c0,0.405,0,0.809,0,1.214c-0.011,0.057-0.026,0.113-0.031,0.171c-0.057,0.642-0.165,1.276-0.345,1.895
c-0.266,0.914-0.655,1.772-1.172,2.573c-0.638,0.989-1.43,1.836-2.37,2.539c-0.874,0.654-1.834,1.148-2.877,1.48
c-0.908,0.29-1.837,0.453-2.789,0.471c-1.719,0.033-3.344-0.346-4.868-1.147c-0.059-0.031-0.146-0.046-0.207-0.027
c-0.802,0.25-1.601,0.508-2.401,0.762c-0.623,0.198-1.247,0.39-1.87,0.59C1.734,20.766,1.4,20.886,1.064,21
C1.043,20.979,1.021,20.957,1,20.936c0.032-0.071,0.071-0.141,0.096-0.214c0.098-0.287,0.191-0.575,0.288-0.862
c0.445-1.308,0.888-2.617,1.338-3.923c0.043-0.125,0.027-0.222-0.037-0.329c-0.455-0.762-0.789-1.576-1.007-2.436
c-0.301-1.188-0.389-2.387-0.238-3.609C1.654,7.843,2.28,6.294,3.316,4.914C4.107,3.861,5.075,3,6.22,2.339
c1.138-0.657,2.353-1.082,3.658-1.247C10.103,1.064,10.328,1.031,10.553,1z M3.472,18.58c0.154-0.046,0.271-0.079,0.388-0.116
c0.851-0.271,1.703-0.537,2.55-0.817c0.176-0.058,0.309-0.028,0.457,0.065c0.8,0.503,1.668,0.839,2.591,1.037
c0.92,0.197,1.846,0.228,2.777,0.114c0.856-0.104,1.673-0.344,2.454-0.714c0.624-0.295,1.207-0.654,1.737-1.092
c0.738-0.611,1.357-1.328,1.854-2.152c0.543-0.9,0.895-1.868,1.056-2.902c0.188-1.205,0.108-2.394-0.237-3.568
c-0.311-1.058-0.825-2.005-1.519-2.851c-0.753-0.919-1.669-1.642-2.74-2.171c-0.741-0.366-1.514-0.625-2.327-0.751
c-1.829-0.283-3.574-0.012-5.212,0.859C6.053,4.185,5.037,5.114,4.258,6.297C3.726,7.104,3.35,7.978,3.134,8.921
c-0.171,0.747-0.23,1.501-0.191,2.266c0.038,0.75,0.182,1.477,0.422,2.185c0.251,0.739,0.606,1.427,1.06,2.063
c0.061,0.085,0.06,0.156,0.028,0.249c-0.269,0.779-0.533,1.559-0.798,2.339C3.597,18.198,3.54,18.373,3.472,18.58z" />
      <path d="M8.135,6.307c0.053,0.004,0.107,0.018,0.159,0.011c0.311-0.045,0.473,0.129,0.581,0.388
c0.243,0.584,0.477,1.171,0.734,1.748c0.114,0.256,0.058,0.47-0.088,0.672c-0.158,0.219-0.334,0.427-0.51,0.632
C8.87,9.922,8.836,10.05,8.947,10.233c0.466,0.765,1.031,1.442,1.754,1.982c0.455,0.34,0.955,0.594,1.471,0.823
c0.306,0.136,0.419,0.113,0.636-0.146c0.225-0.269,0.443-0.544,0.661-0.819c0.16-0.203,0.296-0.256,0.527-0.15
c0.666,0.307,1.326,0.627,1.989,0.94c0.125,0.059,0.183,0.159,0.184,0.292c0.002,0.35-0.057,0.689-0.195,1.011
c-0.135,0.317-0.402,0.513-0.672,0.705c-0.407,0.289-0.875,0.438-1.359,0.456c-0.342,0.012-0.7-0.066-1.031-0.169
c-0.572-0.178-1.134-0.393-1.691-0.616c-0.591-0.237-1.115-0.594-1.608-0.994c-0.929-0.753-1.682-1.663-2.352-2.648
c-0.372-0.547-0.683-1.119-0.804-1.772C6.294,8.248,6.465,7.444,7.085,6.769c0.111-0.12,0.228-0.24,0.36-0.334
C7.65,6.287,7.892,6.283,8.135,6.307z" />
    </svg>)
}

var ContatoIcon=function(props) {
  return (<svg {...props} style={{fill: '#fff'}} version="1.1" id="Camada_1"  x="0px" y="0px"
	 width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22">
<path d="M21,6.567L10.79,1L1.026,6.324L1,6.338L1.026,21H21v0V6.567z M19.215,7.308l-8.218,4.481L2.572,7.195l8.218-4.481
	L19.215,7.308z"/>
</svg>)
}

export {LinkedIn, Facebook, Twitter, Whatsapp};

export default connect( mapStateToProps, mapDispatchToProps)(Header);
