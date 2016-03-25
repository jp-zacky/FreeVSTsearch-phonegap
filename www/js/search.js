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
  // get news(html)
  news = news.filter(function(x, i, self) {
    return self.indexOf(x) === i;
  });

  // get text(string)
  var newsText = getTexts(news);
  // get link(string)
  var newsLink = getLinks(news);
  var str = format(newsText[0], newsLink[0]);
  $("p.news").html(str);
});

function getText(news) {
  var news_clone = news.concat();
  var a = news_clone.replace(/<a\sclass=.*\">/, "").replace(/<\/a>/, "");
  return a;
}

function getTexts(news) {
  var news_clone = news.concat();
  for (var i = 0; i < news_clone.length; i++) {
    news_clone[i] = getText(news_clone[i]);
  }
  return news_clone;
}

function getLink(news) {
  var news_clone = news.concat();
  var a = news_clone.replace(/<a\sclass=.*href=\"/, "").replace(/\">.*<\/a>/, "");
  return a;
}

function getLinks(news) {
  var news_clone = news.concat();
  for (var i = 0; i < news_clone.length; i++) {
    news_clone[i] = getLink(news_clone[i]);
  }
  return news_clone;
}

function format(text, link){
  var new_text = "<a href=\"" + link + "\">" + "● " + text + "</a>";
  return new_text;
}
