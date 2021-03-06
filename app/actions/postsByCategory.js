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

import client from 'superagent';
import { ROOT_URL } from './index';

export const POSTS_BY_CATEGORY = 'POSTS_BY_CATEGORY';
export const INCREASE_PAGE = 'waw/INCREASE_PAGE';

export function postsByCategory(data, page, hasMore, category) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`);

    return {
      type: POSTS_BY_CATEGORY,
      data,
      page,
      hasMore,
      category
    };
}



export function getPostsByCategory(CATEGORY, PAGE) {
  return function(dispatch) {

    return client.get(`${ROOT_URL}/wp-json/wp/v2/posts?filter[posts_per_page]=${PAGE ? 5+3*PAGE : 5}${CATEGORY===0 ?'' : `&categories=${CATEGORY}`}`)
    .end(function(err,data) {

      let enderecos = JSON.parse(data.text);
      // console.log(data.headers);
      var hasMore=data.headers["x-wp-totalpages"]!=="1";
      // console.log(hasMore);

    dispatch(postsByCategory(enderecos, PAGE, hasMore, CATEGORY));
    })
  }
}
