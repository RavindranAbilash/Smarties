import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {useHistory} from "react-router";

import bg from '../images/bg.jpeg'


export default function Home() {
    let history = useHistory()

    return (
        <container >
            <Grid container  style={{backgroundImage: `url(${bg})`,backgroundOverlay:"black",width:"85%",backgroundPosition:"center",backgroundSize:"100%"}}>
            <Grid container  item style={{backgroundColor:"rgba(255, 255, 255, 0.7)",height:500}} >
                    <Grid container item>
                        <Grid container md={3}>
                        </Grid>
                        <Grid item md={6}>
                            <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:0}}>
                                <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Join Smarties</Typography>
                            </Grid>
                            <Grid  item style={{paddingTop:35,width:"100%",justifyContent:"center",paddingBottom:0}}>
                                <Button onClick={
                                    () => {
                                        history.push({
                                            pathname: '/home',
                                        })


                                    }
                                }  align="center" style={{borderRadius:0,  width: "80%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",padding:15,fontSize:30,margin:5,backgroundColor:"#1986aa",opacity:0.6}} >Grade 1</Button>
                                <Button onClick={
                                    () => {
                                        history.push({
                                            pathname: '/home',
                                        })


                                    }
                                } align="center" style={{ borderRadius:0,  width: "80%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",padding:15,fontSize:30,margin:5,backgroundColor:"#1986aa",opacity:0.6}} >Grade 2</Button>
                                <Button onClick={
                                    () => {
                                        history.push({
                                            pathname: '/home',
                                        })

                                    }
                                } align="center" style={{ borderRadius:0,  width: "80%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",padding:15,fontSize:30,margin:5,backgroundColor:"#1986aa",opacity:0.6}} >Grade 3</Button>


                            </Grid>

                        </Grid>
                        <Grid container md={3}>
                        </Grid>
                    </Grid>

            </Grid>
            </Grid>
        </container>
    );
}