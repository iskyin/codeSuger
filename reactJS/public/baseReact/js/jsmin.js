    var H1 = React.createClass({
      render: function() {
        return (
          <h1>
            Hello, world! 
            <br></br>
            <br></br>
            绑定动态值: {dateToString(new Date())}
          </h1>
        );
      }
    });

    ReactDOM.render(
      <H1  />,
      document.getElementById('content')
    );

    function dateToString(val){
      return [val.getFullYear(),val.getMonth()+1,val.getDate()].join('-');
    };