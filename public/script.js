//react app....


import React from "react";
import ReactDOM from "react-dom";


let data1 = [
   {"rank":1,"name":"China","population":1373420000,"percent":18.9},
   {"rank":2,"name":"India","population":1280670000,"percent":17.6},
   {"rank":3,"name":"United States","population":322317000,"percent":4.42},
   {"rank":4,"name":"Indonesia","population":255461700,"percent":3.51},
   {"rank":5,"name":"Brazil","population":205252000,"percent":2.82}
];

class Table extends React.Component{
  render(){
    return(
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
   )}
}





ReactDOM.render(
      <div className="container">
      <Table data={data1} />
      </div>
  ,   document.getElementById('example')
)
