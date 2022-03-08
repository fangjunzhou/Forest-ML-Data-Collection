import { Grid, Stack, Typography } from '@mui/material'
import { Box, height } from '@mui/system'
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Box sx={{
                    margin: 0,
                    padding: 0,
                    height: "100vh"
                }}>
                    <Grid container layout={"horizontal"} columns={12}>
                        <Grid item xs={12}>
                            <Typography variant="h2" align="center">Home</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}
