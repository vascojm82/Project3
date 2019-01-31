let React = require("react");
let EasyChart = require("react-easy-chart");
let BarChart = EasyChart.BarChart;
// import {BarChart} from 'react-easy-chart';

let StatsChart = React.createClass({
 
  getHp: function(){
    let pokemonNumbers = this.getRandomArray(1, 100);
  
    return pokemonNumbers;
  },
  render: function(){
    return(
      <BarChart
        axes
        data={[
          {x: 'Height', y: this.props.height},
          {x: 'Weight', y: this.props.weight},
          {x: 'Age', y: this.props.age},
          {x: 'HP', y: this.getHp()}
          
        ]}
      />
    );
  }
});

module.exports = StatsChart;
