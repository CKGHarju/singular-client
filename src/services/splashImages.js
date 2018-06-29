import React, {Component} from 'react';
import config from '../config/config';
import Unsplash from 'unsplash-js';

export default (props) => {
  // const unsplash = new Unsplash({
  //   applicationId: config.unsplash_app_id,
  //   secret: config.unsplash_secret,
  // });
  //
  // const fetch = unsplash.photos.getRandomPhoto({ query: props })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.urls);
  //     return data;
  //   });

    return (

      <div class="container is-fluid">
        <div class="notification is-size-3 has-text-black-ter ">
          {fetch.urls && fetch.urls.regular}
          When testing, ask people to provide you with resources they use in their daily life. This works very well with specialised platforms targeting a niche set of users. They can help you get the content right. Usually people are happy to help and would put some of their time to feel that fulfillment. Just be kind, polite and let it flow.
        </div>
      </div>
    )
}
