import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import NumberIdentification from "../images/Numbers.png"
import Addition from "../images/Addition.png"
import {useHistory} from "react-router";
import bg from "../images/bg.jpeg";

export default function PlayWithMath() {
    let history = useHistory()
    return (
        <Container>
            <Grid container item style={{
                backgroundImage: `url(${bg})`,
                backgroundOverlay: "black",
                width: "85%",
                backgroundPosition: "center",
                backgroundSize: "100%"
            }}>
                <Grid container item style={{backgroundColor: "rgba(255, 255, 255, 0.8)", justifyContent: "center"}}>

                    <Typography style={{
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
                                    pathname: '/letStart',
                                    state: {detail: '/numberIdentify'}
                                })

                            }
                        } item style={{justifyContent: "center"}} md={6}>
                            <Grid item style={{justifyContent: "center"}}>
                                <img style={{padding: 5, margin: 20, maxWidth: "50%"}} src={NumberIdentification}></img>
                            </Grid>
                            <Typography align="center" style={{
                                maxWidth: "100%",
                                margin: 15,
                                opacity: 0.6,
                                fontFamily: "Comic Sans MS",
                                fontStyle: "italic",
                                fontSize: 35
                            }}>Number Identification</Typography>

                        </Grid>

                        <Grid container onClick={
                            () => {
                                history.push({
                                    pathname: '/letStart',
                                    state: {detail: '/additionSelect'}
                                })

                            }
                        } item style={{justifyContent: "center"}} md={6}>
                            <Grid item style={{justifyContent: "center"}}>
                                <img style={{padding: 5, margin: 20, maxWidth: "50%"}} src={Addition}></img>
                            </Grid>
                            <Typography align="center" style={{
                                maxWidth: "100%",
                                margin: 15,
                                opacity: 0.6,
                                fontFamily: "Comic Sans MS",
                                fontStyle: "italic",
                                fontSize: 35
                            }}>Addition</Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}