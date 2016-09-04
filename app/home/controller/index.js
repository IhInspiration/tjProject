'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    return self.display();
  },
  addAction: function(self){
    var http = this.http,
        getData = http._post,
        url;
    this.model("article").add({
      title: getData.title,
      author: getData.author,
      time: new Date().toLocaleString(),
      content: getData.content
    }).then(function(data){
      console.log(data);
      url = '/index/article?id=' + data;
      console.log(url);
      http.redirect(url);
    });
  },
  articleAction: function(self){
    var id = this.http.get("id");
    this.model("article").where({_id: id}).find().then(function(data){
      self.assign("data", data);
      return self.display();
    });
  }
});