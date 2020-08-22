import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography,Box} from '@material-ui/core'

import Navbar from "./Navbar"

const useStyles =makeStyles(theme=>({
    mainContainer:{
        background:"#233"
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position: "absolute",
            height:"100%",
            border:"1px solid tan",
            right: "40px",
            top:0,
        },
         "&:after":{
                content:"''",
                display:"table",
                clear:"both"

        },

        [theme.breakpoints.up("md")]:{
                padding:"2rem",
                "&:before":{
                    left: "calc(50%)",
                    right:"auto",
            },
        },
    },
    timeLineItem:{
        
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"absolute",
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50%)",
            borderStyle:"solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)",

        },
        [theme.breakpoints.up("md")]:{
            width:"34%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tan",
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato",
            },
            
        }
    },
   
    timeLineYear:{
        textAlign: "center",
        maxwidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        width:"10%",
        padding: "0.5rem 0 1rem",
        "&:before":{
            display:"none",

        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&nth-of-type(2n)":{
                float: "none",
                margin:"0 auto",
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            },
        }

    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        textTransform:"uppercase"
    },
    subHeading:{
        color:"tomato",
        padding:"0",
        textTransform:"uppercase"
    }
}));
const Resume = () => {
    const classes = useStyles()
    return (
        <>
                
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h3" align="center" className={classes.heading}>
                    Resumé
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}> 
                        2019
                    </Typography>


                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            HTML5/CSS3

                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Freelance

                        </Typography>
                        <Typography variant="subtitle1" align="left"  style={{color:"white"}}>
                            expertise in HTML5/CSS3 (Bootstrap 3 and 4), CSS (Materialize) and SCSS

                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLine}`}> 
                        2019
                    </Typography>

                    
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            PHP

                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Freelance

                        </Typography>
                        <Typography variant="subtitle1" align="left"  style={{color:"white"}}>
                        Good knowledge in PHP (MySQL). Creating websites using PHP , HTML5 and CSS

                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}> 
                        2020
                    </Typography>

                    
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                        Javascript(ReactJS)

                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Freelance

                        </Typography>
                        <Typography variant="subtitle1" align="left"  style={{color:"white"}}>
                             
                            Good Knowledge in JavaScript and its framework ReactJS (Hooks, Class Components , APIs and some libraries as react-bootstrap , Material-ui)

                        </Typography>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Resume
