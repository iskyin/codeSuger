var http=require('http'); 
var cheerio=require('cheerio');



var url='http://www.lenjee.com';

var chaptersData=[];
function htmlChapters(html) {
	// 装载html
    var $=cheerio.load(html);

    // 主标题
    var cmhr_a=$('.cmhr_a');

    var courseData=[];

    chapters.each(function(_a){

        var _href=_a.attr('href');
        var _img=_a.find('img').attr('src');
        var _name=_a.find('cmhr_ele_h').text();

        var _matter={
            href:_href,
            img:_img,
            name:_name
        } 

       chapters.push(_matter);
    });

    console.log(chaptersData);

    // [{
    //     _title:'',
    //     _matter:[
    //        href:'',
    //        img:'',
    //        name:''
    //     ]
    // }]

}







http.get(url,(res)=>{

	console.log(`Got response statusCode : ${ res.statusCode }`);
	
	var html='';

    res.on('data',(data)=>{
    	html+=data;
    });

    res.on('end',()=>{
    	console.log("处理html");
       htmlChapters();
    });


}).on('error',(e)=>{

    console.log('Got error: ${e.message');

});




