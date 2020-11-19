import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '10px auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

const ListView = (props)=>{
    const classes = useStyles();
    const { data } = props
    return (
        <div className={classes.root}>
            {   data.map((value)=>
                <Paper className={classes.paper} mt= {1}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="logo512.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle2">
                                {value.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {value.body}
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Paper>).slice(0,5)
            }
        </div>

    )
}
export default ListView