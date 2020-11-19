import React from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Toggle Layout
            </Typography>
            <IconButton color="inherit" onClick={()=>props.toggleView("list")}>
              <ListIcon />
            </IconButton>
            <IconButton color="inherit" onClick={()=>props.toggleView("grid")}>
              <AppsIcon />
            </IconButton>
            <IconButton color="inherit" onClick={()=>props.toggleView("chart")}>
              <BarChartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
    )
}
export default Header