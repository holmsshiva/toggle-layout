import React from "react"
import { Chart } from "react-google-charts"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            margin: '10px auto',
            color: theme.palette.text.secondary,
        },
    }),
);
const ChartView = (props)=>{
    const classes = useStyles();
    const { data } = props
    const heading = Object.keys(data[0])
    let adata = data.map((item)=> Object.values(item)).slice(0,5)
    // console.log(data)
    return (
        <Paper className={classes.paper}>
            <Chart
                width={'100%'}
                height={'90vh'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    [...heading],
                    ...adata
                ]}
                options={{
                    // Material design options
                    chart: {
                    title: 'Posts',
                    subtitle: 'Posts Representation',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </Paper>
    )
}
export default ChartView