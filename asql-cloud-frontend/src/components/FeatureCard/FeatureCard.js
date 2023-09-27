import React from 'react'
import './FeatureCard.css'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
const FeatureCard = (props) => {
    return (
        <Card
            sx={
                {
                    padding: '1%',
                    flex: '20%',
                    height: '40vh',
                    margin: '2%',
                }}>
            <CardMedia>
                {props.icon}
            </CardMedia>
            <CardContent>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="body2">{props.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default FeatureCard