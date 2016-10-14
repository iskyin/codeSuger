console.log(" 修改属性的默认特性  Object.defineProperty");

var person={};
Object.defineProperty(person,"name",{
	wirtable:false,
	value:"lenjee"
});

console.log(person.name);
person.name="hello World !";
console.log(person.name);

console.log("修改访问器属性 Object.defineProperty");
var person2={
	name:"lenjee",
	age:26,
	explain:'--'
};


console.log('age: '+person2.age);
Object.defineProperty(person2,'age',{
	get:function(){
		return this._age;
	},
	set:function(newValue){
		if(newValue>150){
			this._age =0;
		}
		else{
		 	this._age=newValue;
		}
	}

});
person2.age=30;
console.log('30 age:' + person2.age );
person2.age=2000;
console.log('2000 age:' + person2.age );














