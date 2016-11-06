
// 序列化 

querystring.stringify({name:'lenjee',source:['jade','node'],from:''});
 => 'name=lenjee&source=jade&source=node&from='

querystring.stringify({name:'lenjee',source:['jade','node'],from:''},',');
 => 'name=lenjee,source=jade,source=node,from='

querystring.stringify({name:'lenjee',source:['jade','node'],from:''},',',':');
 => 'name:lenjee,source:jade,source:node,from:'
 

// 反序列化
querystring.parse('name=lenjee&source=jade&source=node&from=')
=>{ name: 'lenjee', source: [ 'jade', 'node' ], from: '' }

querystring.parse('name=lenjee,source=jade,source=node,from=',',')
=>{ name: 'lenjee', source: [ 'jade', 'node' ], from: '' }

querystring.parse('name:lenjee,source:jade,source:node,from:',',',':')
=> { name: 'lenjee', source: [ 'jade', 'node' ], from: '' }



// 转义
querystring.escape('<你好，世界>');
=> '%3C%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%3E'

// 反转义
querystring.unescape('%3C%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%3E');
=> '<你好，世界>'



