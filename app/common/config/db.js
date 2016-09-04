'use strict';
/**
 * db config
 * @type {Object}
 */
module.exports = {
  type: 'mongo',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'tjProject',
      user: 'root',
      password: '',
      prefix: 'think_',
      encoding: 'utf8',
      nums_per_page: 10,
      log_sql: true,
      log_connect: true,
      cache: {
        on: true,
        type: "",
        timeout: 3600
      }
    },
    mongo: {
      host: '127.0.0.1',
      port: '27017',
      prefix: 'think_',
      database: 'tjProject',
      encoding: 'utf8',
      nums_per_page: 10,
      log_sql: true,
      log_connect: true,
      cache: {
        on: true,
        type: "",
        timeout: 3600
      },
      options: {
        //authSource: 'admin'
      }
    }
  }
};