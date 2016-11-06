var EventEmitter=require('events').EventEmitter;

var life=new EventEmitter();

life.setMaxListeners(15);

life.on('speak',function (which) {
	// body...
	console.log('my name is '+ which);
});


life.emit('speak','aa');

life.emit('speak','bb');

life.emit('speak','cc');

life.emit('speak','dd');

life.emit('speak','ee');

life.emit('speak','ff');

life.emit('speak','gg');

life.emit('speak','hh');

life.emit('speak','ii');

life.emit('speak','jj');

life.emit('speak','kk');

life.emit('speak','ll');

life.emit('speak','mm');

life.emit('speak','nn');

life.emit('speak','oo');
