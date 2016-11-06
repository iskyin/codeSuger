var http=require('http');
var querystring=require('querystring');

var postData=querystring.stringify({

	'content':'lenjee‘s test',
	'cid':348,

});

var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=771ea018-6574-4a52-8c9a-2d728b3ea5bc; imooc_isnew_ct=1476754948; loginstate=1; apsid=RlZWM0Njc5N2IxNjAxZTU2ZWViYmY3ZDJiNWE4M2EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzkzOTYyNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsZW5qZWVAb3V0bG9vay5jb20AAAAAAAAAAAAAAAAAADQ4ZTE5MDZiMzM4Nzk5ZTRjNTdmZjNjZjZhN2U5Njlk1lUGWNZVBlg%3DZT; last_login_username=lenjee%40outlook.com; PHPSESSID=nijlgm9230vpk0t3pq1dlfsh75; jwplayer.qualityLabel=é«æ¸; jwplayer.volume=100; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1476754956,1476813738; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1477041772; imooc_isnew=2; cvde=580663a8463ba-34',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}


var req=http.request(options,function(res){
    
    console.log('status: '+res.statusCode);

    console.log('headers: '+JSON.stringify(res.headers));

    res.on('data',function(chunk){
        
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);

    });

    res.on('end',function(){
       console.log('评论完毕！');
    });

});


req.on('error',function(e){
	console.log('Error: '+e.message);
});

req.write(postData)



// =>
// status: 200
// headers: 
 //   {
	// "server":"nginx",
	// "date":"Mon, 24 Oct 2016 03:41:28 GMT",
	// "content-type":"text/html; charset=utf-8",
	// "transfer-encoding":"chunked",
	// "connection":"keep-alive",
	// "vary":"Accept-Encoding, Accept-Encoding",
	// "expires":"Thu, 19 Nov 1981 08:52:00 GMT",
	// "cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
	// "pragma":"no-cache",
	// "content-encoding":"gzip"
 //   }
// true
// object
// 评论完毕！















