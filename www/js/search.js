var app_url = 'http://icon.jp/'

$.get(app_url, function(data) {
  var content = $(data.responseText).find('h5');
  var news = new Array();


  for (var i = 0; i < content.length; i++) {
    var domObject = $(content[i]).html();

    var re1 = /.*無償.*/
    var re2 = /.*フリー.*/
    if (domObject.search(re1) != -1 || domObject.search(re2) != -1) {
      news.push(domObject);
    }
  }
  news = news.filter(function(x, i, self) {
    return self.indexOf(x) === i;
  });
});

function format(domObject) {

}
