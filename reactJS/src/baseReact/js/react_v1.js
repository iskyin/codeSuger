// var Test_01=React.createClass({
//   render:function(){

//     return (
//     	<h1>hello  { this.props.name } ： </h1> 
//     	);

//   }

// });

// ReactDOM.render(
//   <Test_01 name='Jack' className="jack" /> ,
//   document.getElementById('test1')
// );


var Test_02= React.createClass({

	getInitialState:function(){
		return	{ enable:false };
	},

	handleClick:function(event){
		this.setState({
			enable:!this.state.enable;
		});
	}

	render:function(){
		return (
			<p>
			<input type='text' disabled={ this.state.enable } />
				<button onClick={ this.handleClick }> Change State </button>
			</p>
		);
	}
});

ReactDOM.render(
	<Test_02 />
	document.getElementById(test2);
);




