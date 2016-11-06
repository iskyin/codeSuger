var students=require('./students.js');
var teacher=require('./teacher');

function add(teacherName,studentName) {
	// body...

	teacher.add(teacherName);
	studentName.forEach(function(item,index){
		students.add(item);
	});

}


exports.add=add; 









