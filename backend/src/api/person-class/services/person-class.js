'use strict'

/**
 * person-class service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::person-class.person-class')
