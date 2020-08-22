import React from 'react'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles'
import project1 from '../assets/taskManager.png'
import project2 from '../assets/WeatherApp.png'
import project3 from '../assets/bootstrap.png'

import {Box,Grid,Card,CardActionArea,CardActions,CardContent,CardMedia,Typography} from"@material-ui/core"
import Link from '@material-ui/core/Link'

const useStyles= makeStyles({
    container:{
        background:"#233",
        height:"100%",

    },
    cardContainer:{
            maxWidth:345,
            margin:"4rem auto",
            padding:"5rem auto",
            

    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <>
        <Box component="div" className={classes.container}>
            <Navbar/>
            <Grid container justify="center" >
                {/* Project1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project1" height="240" image={project1}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                    Task Manager
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="div">
                                A simple task manager created using react js Hooks (use State,useEffect, useReducer...) The user adds tasks, clear all or delete one by one. The list is also stored in local storage.
                            </Typography>
                        </CardContent>

                   </CardActionArea>   
                    
                     <CardActions>
                     <Link component="button" variant="body2" onClick={() => window.location.assign("https://task-manager-dfbd0.web.app/") }>See Project</Link>
                    </CardActions>

                    
                </Card>
            </Grid>

            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project1" height="240" image={project2}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                    Weather App
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="div">
                                     A simple Weather App using API to fetch weather of any city around the world.The background changes depending on the temperature. It gives you the temperature and date.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                      
                        <CardActions>
                        <Link component="button" variant="body2" onClick={() => window.location.assign("https://weather-app-1df71.web.app/") }>See Project</Link>
                        </CardActions>

                   
                </Card>
            </Grid>


            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project1" height="240" image={project3}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                   Portfolio React-Bootstrap
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="div">
                                     A simple ReactJS Portfolio Website. Used Bootstrap designed for react to create the template. It consists of three pages linked using React Router technique. The contact form is still under work to be able to send me email directly.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                       
                        <CardActions>
                        <Link component="button" variant="body2" onClick={() => window.location.assign("https://awesome-booth-36cdf7.netlify.app/") }>See Project</Link>

                        </CardActions>

                    
                </Card>
            </Grid>

           



            </Grid>
        </Box>
            

        </>
    )
}

export default Portfolio
