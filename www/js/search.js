var app_url = 'http://icon.jp/'

$.get(app_url, function(data) {
  var content = $(data.responseText).find('h5');

  for (var i = 0; i < content.length; i++) {
    var domObject = $(content[i]).html();
    var re = /.*無償.*/
    if(domObject.search(re) != -1){
      alert(domObject);
    }
  }
});
