import React ,{useState}from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {AppBar,Toolbar,ListItem,IconButton,ListItemText,Avatar,Divider,List,Typography,Box, ListItemIcon} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {AssignmentInd,Home,Apps,ContactMail} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import avatar from"../assets/avatar.png"
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import Footer from "./Footer"
//css styles

const useStyles =makeStyles( (theme) =>({
    menuSliderContainer :{
        width:250,
        background:"gray",
        height:"100%"

    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height: theme.spacing(13),

    },
    listIem :{
        color: "black"
    }
}));

const menuItems =[
    {
        listIcon: <Home/>,
        listText: "Home"
        ,listPath:"/"
    }
    ,
    {
        listIcon: <AssignmentInd/>,
        listText: "Resumé"
        ,listPath:"/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath:"/portfolio",
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact Me",
        listPath:"/contact"
    }
    
]

function Navbar() {
    const [state,setState] = useState({
        right:false,
    })

    const toggleSlider = (slider,open)=> () =>{
        setState({...state ,[slider]:open})
    }
    const classes = useStyles()

    const sideList = slider =>(
        <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider(slider ,false)}>
        <Avatar className={classes.avatar} src={avatar} alt="Sayed Kassem">


        </Avatar>
        <Divider/>
        <List>
            {
                menuItems.map((lsItem,key)=>(
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listIem}>
                                {lsItem.listIcon}
                         </ListItemIcon>
                         <ListItemText  className={classes.listIem} primary={lsItem.listText}/>
                    </ListItem>
                ))
            }
            
        </List>

    </Box>
    );
    return (
        <div>
            
        <Box component="nav">

            <AppBar position="static" style={{background:"gray"}}> 
                <Toolbar>
                    <IconButton onClick={toggleSlider('right',true)}>
                    <MenuIcon style={{color: "white"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"white"}}>
                        Portfolio

                    </Typography>
                    <MobilRightMenuSlider anchor="left" open={state.right} onClose={toggleSlider("right",false)}>
                            {sideList("right")}
                            <Footer/>
                    </MobilRightMenuSlider>


                    
                </Toolbar> 
            </AppBar>
            
        </Box>
        </div>
    )
}

export default Navbar
