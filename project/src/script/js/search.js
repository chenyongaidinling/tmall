let $search = $('#tmall-search');

let $ul = $('#tmall-search-list');

function jsonp421(data) {
    let dataarr = data.result;
    console.log(dataarr);
    let str = '';
    for (var i = 0; i < dataarr.length; i++) {
        str += "<li><a href='javascript:;'>" + dataarr[i][0] + "</a></li>";
    }
    $ul.html(str);
}

$search[0].oninput = function() {
    let cScript = document.createElement('script');
    cScript.src = "https://suggest.taobao.com/sug?code=utf-8&q=" + $search.val() + "&_ksTS=1557840322263_420&callback=jsonp421&k=1&area=c2c&bucketid=7"
    document.body.appendChild(cScript);

}