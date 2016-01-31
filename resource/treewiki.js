/**
* 태그의 링크를 화면에 노출하는 함수 
*/
function renderTagLink() {
  var api   = "http://localhost:9901/tag/search";
  var currentHref   = window.location.href;
  var title = $('#header h1').text();

  $.getJSON( api, {
    title: title,
    href: currentHref,
    tags: "마이크로서비스 아키텍처"
  })
    .done(function( json ) {
        console.log(JSON.stringify(json));
        var ul = $('#taglink div div ul')

        $.each(json._embedded.tag, function(index, taglink){
          console.log(index + " : " + taglink.title + ":" + taglink.href + ":" + taglink.tag);

          var li = $('<li/>').appendTo(ul);
          var a = $('<a>').attr('href', taglink.href).text(taglink.title).appendTo(li);
        });
    });
}
