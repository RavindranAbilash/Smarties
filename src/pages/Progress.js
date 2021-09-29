import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import Drawing from "../images/Drawing.png";
import speaking from "../images/speaking.png"
import math from "../images/math.png"
import {useHistory} from "react-router";

export default function Progress() {
    let history = useHistory()

    return (
        <Container>
            <Grid container item style={{justifyContent: 'center', height: "100%"}}>

                <Typography align="center" style={{
                    maxWidth: "100%",
                    margin: 15,
                    opacity: 0.6,
                    fontFamily: "Comic Sans MS",
                    fontStyle: "italic",
                    fontSize: 35
                }}>Start Here</Typography>

                <Grid item container style={{paddingTop: 40}}>
                    <Grid container onClick={
                        () => {
                            history.push({
                                pathname: '/reportKinderArt',
                            })

                        }
                    } item style={{justifyContent: "center"}} md={4}>
                        <Grid item style={{justifyContent: "center"}}>
                            <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Drawing}></img>
                        </Grid>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Kinder Art</Typography>

                    </Grid>

                    <Grid container onClick={
                        () => {
                            history.push({
                                pathname: '/reportSpeak',
                            })

                        }
                    } item style={{justifyContent: "center"}} md={4}>
                        <Grid item style={{justifyContent: "center"}}>
                            <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={speaking}></img>
                        </Grid>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Talk with Smart'es</Typography>

                    </Grid>
                    <Grid container onClick={
                        () => {
                            history.push({
                                pathname: '/reportMath',
                            })

                        }
                    } item style={{justifyContent: "center"}} md={4}>
                        <Grid item style={{justifyContent: "center"}}>
                            <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={math}></img>
                        </Grid>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Play with math</Typography>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}