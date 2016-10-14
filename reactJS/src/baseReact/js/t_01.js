var Hello = React.createClass({
  render: function() {
    var styleObj={
      color:'red',
      fontSize:'50px',
    };
    return ( <div>
              <p style={styleObj} > Hello { this.props.name } </p>
              <p style={{ color:'blue', fontSize:'40px'}}>  { this.props.title } </p>
             </div>);
  }
});

ReactDOM.render(
  <Hello name=" React ! " title=' Nice too meet you ! '/>,
  document.getElementById('container')
);
document.getElementById('container').style.paddingLeft='100px';