import React from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: '10px auto',
            color: theme.palette.text.secondary,
            height: "inherit",
        }
    }),
);
const GridView = (props)=>{
    const classes = useStyles();
    const { data } = props
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Grid container spacing={3}>
            {
                data.map((value)=>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper className={classes.paper}>
                            <h2>
                                {value.title}
                            </h2>
                            <p>
                                {value.body}
                            </p>
                    </Paper>
                </Grid>
                ).slice(0,15)
            }
            </Grid>
            </Paper>
        </div>
    )
}
export default GridView