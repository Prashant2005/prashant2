var initial_url = window.location.href;
var url = initial_url .split( '/' );

var updated_url= url[ url.length - 2 ] + '/' + url[ url.length - 1 ];
alert(updated_url);
