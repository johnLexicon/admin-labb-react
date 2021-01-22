import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const usingStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1546177461-2d708782f5d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    title:{
        fontSize: '5rem',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',
        }
    }
}))

const Home = () => {
    const classes = usingStyles()
    return (
        <Box className={classes.hero}>
            <Typography className={classes.title}>React Blogger</Typography>
        </Box>
    )
}

export default Home
