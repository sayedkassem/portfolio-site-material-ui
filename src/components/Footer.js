import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {BottomNavigation ,BottomNavigationAction} from"@material-ui/core"


const useStyles = makeStyles({
        root:{
                "& .MuiBottomNavigationAction-root":{
                    minWidth:0,
                    maxWidth: 250,

                },
                " & .MuiSvgIcon-root":{
                    fill: "black",
                    "&:hover":{
                        fill: "white",
                        fontSize:"1.8rem",
                    }
                }
        }
    })
    
    
    
    const Footer = () => {

        const classes = useStyles()
    return (
        <div>
            <BottomNavigation width="auto" style={{background:"#ccc"}}>
                <BottomNavigationAction
                        style={{padding:0}} icon={<InstagramIcon/>} className={classes.root} onClick={() => window.location.assign("https://www.instagram.com/sayedkassemm")}
                />
                 <BottomNavigationAction
                        style={{padding:0}} icon={<LinkedInIcon/>} className={classes.root} onClick={() => window.location.assign("https://www.linkedin.com/in/sayed-kassem")}
                />

            </BottomNavigation>
        </div>
    )
}

export default Footer
