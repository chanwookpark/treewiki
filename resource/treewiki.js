/**
* 태그의 링크를 화면에 노출하는 함수
*/
function renderTagLink(tag) {
  //var api   = 'http://localhost:9901/tag/search';
  var api = 'http://ec2-52-79-81-202.ap-northeast-2.compute.amazonaws.com/tag/search';
  var currentHref   = window.location.href;
  var title = $('#header h1').text();

  $.getJSON( api, {
    title: title,
    href: currentHref,
    tags: tag
  })
    .done(function( json ) {
        if(json._embedded == undefined) {
          console.log('Tag is empty!!');
          return;
        }

        console.log(JSON.stringify(json));
        var ul = $('#taglink div div ul');

        $.each(json._embedded.tag, function(index, taglink){
          console.log(index + ':' + taglink.title + ':' + taglink.href + ':' + taglink.tag);

          var li = $('<li/>').appendTo(ul);
          var a = $('<a>').attr('href', taglink.href).text(taglink.title).appendTo(li);
        });
    });
}
