import React from 'react'
import {Typography,Avatar,Grid,Box} from'@material-ui/core'
import Typed from'react-typed'
import avatar from '../assets/avatar.png'
import {makeStyles} from '@material-ui/core/styles'

//css Styles
 
const useStyles = makeStyles(theme => ({
        avatar :{
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: theme.spacing(1)
        },
        title:{
                color: "tomato"
        },
        subtitle:{
                color: "tan",
                marginBottom:"3rem"
        },
        typedContainer:{
                position:"absolute",
                top:"50%"
                ,left:"50%",
                transform: "translate(-50%,-50%)",
                width: "100vw",
                textAlign:"center",
                zIndex :1

        }
}))


function Header() {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar src={avatar} alt="Sayed Kassem" className ={classes.avatar}/>
            </Grid> 
               <Typography  className={classes.title} variant="h4">
                <Typed strings={['Sayed Kassem']} typeSpeed={40} />
                </Typography>

                <Typography className={classes.subtitle} variant="h5h6">
                <Typed strings={['Web Design', 'Web Developer']} typeSpeed={40}  backSpeed={60} loop/>
                </Typography>
             
        </Box>
    )
}

export default Header
