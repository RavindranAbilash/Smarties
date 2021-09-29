import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import Fruit from "../images/Fruits.png";
import Animals from "../images/Animals.png"
import Shapes from "../images/Shapes.png"
import {useHistory} from "react-router";
import bg from "../images/bg.jpeg";


export default function KiderArt() {
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
                <Grid container style={{
                    width: "100%",
                    justifyContent: "center",
                    paddingBottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                }} item>
                    <Grid item style={{width: "100%", justifyContent: "center", paddingBottom: 0}}>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            paddingBottom: 90,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Start Here</Typography>
                    </Grid>
                    <Grid item container style={{paddingTop: 40, paddingBottom: 50}}>
                        <Grid container onClick={
                            () => {
                                history.push({
                                    pathname: '/letStart',
                                    state: {
                                        detail: '/drawFruitTimeline',
                                        val: ['Draw an apple', 'Draw a  banana', 'Draw Grapes', 'Draw a Pineapple', 'Draw a mango',
                                            'Draw an orange', 'Draw a strawberry', 'Draw an avocado', 'Draw Cherries',
                                            'Draw a Papaya'],
                                        correctAns: ['apple', 'banana', 'grapes', 'pineapple', 'mango',
                                            'orange', 'strawberry', 'avocado', 'cherries',
                                            'papaya'],
                                        youtube: ['tMjALn2rPU4', '77Qfj2wEexM', 'VKIrg0HB-xg', 'BK3MSK1hYj0', 'tMjALn2rPU4', '77Qfj2wEexM', 'VKIrg0HB-xg', 'BK3MSK1hYj0', 'tMjALn2rPU4', '77Qfj2wEexM']
                                    }
                                })

                            }
                        } item style={{justifyContent: "center"}} md={4}>
                            <Grid item style={{justifyContent: "center"}}>
                                <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Fruit}></img>
                            </Grid>
                            <Typography align="center" style={{
                                maxWidth: "100%",
                                margin: 15,
                                opacity: 0.6,
                                fontFamily: "Comic Sans MS",
                                fontStyle: "italic",
                                fontSize: 35
                            }}>Draw Fruits</Typography>

                        </Grid>

                        <Grid container onClick={
                            () => {
                                history.push({
                                    pathname: '/letStart',
                                    state: {
                                        detail: '/drawFruitTimeline',
                                        val: ['Draw a circle', 'Draw a rectangle', 'Draw a square',
                                            'Draw a triangle', 'Draw a heart', 'Draw an arrow', 'Draw a cross', 'Draw a star',
                                            'Draw a crescent', 'Draw a rhombus'],
                                        correctAns: ['circle', 'rectangle', 'square',
                                            'triangle', 'heart', 'arrow', 'cross', 'star',
                                            'crescent', 'rhombus'],
                                        youtube: ['tMjALn2rPU4', '77Qfj2wEexM', 'VKIrg0HB-xg', 'BK3MSK1hYj0', 'tMjALn2rPU4', '77Qfj2wEexM', 'VKIrg0HB-xg', 'BK3MSK1hYj0', 'tMjALn2rPU4', '77Qfj2wEexM']
                                    }
                                })

                            }
                        } item style={{justifyContent: "center"}} md={4}>
                            <Grid item style={{justifyContent: "center"}}>
                                <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Shapes}></img>
                            </Grid>
                            <Typography align="center" style={{
                                maxWidth: "100%",
                                margin: 15,
                                opacity: 0.6,
                                fontFamily: "Comic Sans MS",
                                fontStyle: "italic",
                                fontSize: 35
                            }}>Draw Shapes</Typography>

                        </Grid>
                        <Grid container onClick={
                            () => {
                                history.push({
                                    pathname: '/letStart',
                                    state: {
                                        detail: '/drawFruitTimeline',
                                        val: ['Draw a dog', 'Draw a cat', 'Draw a monkey',
                                            'Draw a lion', 'Draw a rabbit', 'Draw a parrot', 'Draw a fish', 'Draw a mouse',
                                            'Draw a cow', 'Draw a pig'],
                                        correctAns: ['dog', 'cat', 'monkey',
                                            'lion', 'rabbit', 'parrot', 'fish', 'mouse',
                                            'cow', 'pig'],
                                        youtube: ['tMjALn2rPU4', '77Qfj2wEexM', 'VKIrg0HB-xg', 'BK3MSK1hYj0', 'tMjALn2rPU4', '77Qfj2wEexM', 'VKIrg0HB-xg', 'BK3MSK1hYj0', 'tMjALn2rPU4', '77Qfj2wEexM']


                                    }
                                })

                            }
                        } item style={{justifyContent: "center"}} md={4}>
                            <Grid item style={{justifyContent: "center"}}>
                                <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Animals}></img>
                            </Grid>
                            <Typography align="center" style={{
                                maxWidth: "100%",
                                margin: 15,
                                opacity: 0.6,
                                fontFamily: "Comic Sans MS",
                                fontStyle: "italic",
                                fontSize: 35
                            }}>Draw Animals</Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}