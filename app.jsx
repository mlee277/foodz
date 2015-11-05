'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var data = require('./test.js');

var Pic = React.createClass({
  render: function(){
    return(
      <div><hello</div>
    )
  }
})

ReactDOM.render(
<Pic />,
document.getElementById('container')
);

// var Box = React.createClass({
//   getInitialState: function() {
//     return {
//       liked: '-'
//     }
//   },
//   handleClick: function(event){
//   this.setState({liked: this.state.liked === "X" ? "O" : "X"});
//
//   },
//   render: function(){
//     return (
//       <button style={styleBox}className="box" onClick={this.handleClick}>
//     {this.state.liked}
//       </button>
//     );
//   }
// });
//
// var styleBox = {
//   height: '100px',
//   width: '100px',
//   color: 'red'
// }
//
// var Row = React.createClass({
//   render: function(){
//     return (
//     <div>
//       <Box />
//       <Box />
//       <Box />
//     </div>
//   )
//   }
// });
//
//
// var Board = React.createClass({
//   render: function(){
//     return (
//   <div>
//     <Row />
//     <Row />
//     <Row />
//   </div>
// )
// }
// });
//
// ReactDOM.render(
//   <Board />,
//   document.getElementById('container')
// );




})
