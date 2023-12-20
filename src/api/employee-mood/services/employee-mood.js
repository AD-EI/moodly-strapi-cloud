'use strict';

/**
 * employee-mood service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-mood.employee-mood');
