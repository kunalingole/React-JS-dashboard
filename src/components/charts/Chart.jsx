import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from "react-google-charts";
const AppChart =() => {
 // https://react-google-charts.com/bar-chart#stacked-bar-chart-with-multiple-series
  return (
    <Grid item xs={12}>
      <Paper>
       <h3> Chart</h3>
       <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            is3D: true,
          }}
          rootProps={{ 'data-testid': '1' }}
        />

    </Paper>
   </Grid>
  );
}

export default AppChart;