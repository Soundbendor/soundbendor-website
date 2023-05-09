'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('link-me')
      .service('myService')
      .getWelcomeMessage();
  },
});
