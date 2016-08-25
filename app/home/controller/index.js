'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index.html
    var data = {
      name: 'JackWang',
      content: "Hello,World!"
    };
    self.assign("data", data);
    return self.display();
  }
});