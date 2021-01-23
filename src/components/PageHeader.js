import React from 'react'
import { Card, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    pageHeader: {
        padding: '24px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: theme.palette.primary.main
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '&.MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))

const PageHeader = ({title, subtitle, icon}) => {
    const classes = useStyles()
    return (
        <Paper elevation={1} square>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div">{title}</Typography>
                    <Typography variant="subtitle2" component="div">{subtitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
