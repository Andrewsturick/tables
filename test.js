
let tableholder = React.createClass({
  getInitialState: function() {
    return { tableshown: this.props.dataArray[0] };
  },
  componentDidMount: function() {
    let exp = 2;
    let intervalId = setInterval(function() {
        delta = (-1)^exp;
       }
      this.setState({ tableshown:this.props.dataArray[0+delta] })
    }.bind(this), 5000);
  },
  render: function() {
    return (
      <table className="table">
           <thead>
             <tr>
               {Object.keys(this.props.data[0]).map(function(names, index){
                  return <th key={index}>{names}</th>
               })}
             </tr>
           </thead>
           <tbody>
              {this.props.data.map(function(row, i) {
                return (
                   <tr key={i}>
                        {Object.getOwnPropertyNames(row).map(function(val, idx, array){
                              return  <td key={idx}>{ row[val] }</td>
                           })}
                       </tr>
                     );
                 })}
           </tbody>
      </table>
    );
  }
});
