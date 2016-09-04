'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  //文章编辑页面
  indexAction: function(self){
    return self.display();
  },
  //添加文章
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
      url = '/index/article?id=' + data;
      http.redirect(url);
    });
  },
  //显示文章
  articleAction: function(self){
    var id = this.http.get("id");
    this.model("article").where({_id: id}).find().then(function(data){
      self.assign("data", data);
      return self.display();
    });
  }
});