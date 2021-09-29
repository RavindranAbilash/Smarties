import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';


import mainImag from "../../images/mainImag.jpg"
import themeX from "../../theme";
import {useHistory} from "react-router";



export default function  LetStart(props){
    let history = useHistory()
    console.log(props.location.state.detail)
    const url = props.location.state.detail;
    const val = props.location.state.val?props.location.state.val:null;
    const correctAns = props.location.state.correctAns?props.location.state.correctAns:null;
    const youtube = props.location.state.youtube?props.location.state.youtube:null;
    return(
        <Container>
            <Grid item>
                <Grid container item>
                    <Grid container md={6}>
                        <img style={{padding:5,margin:2,maxWidth: "100%",opacity:0.8}}  src={mainImag}></img>
                    </Grid>
                    <Grid container md={6} >

                        <Grid container item style={{width:"100%",height:"10%",justifyContent:"center" , paddingTop:150}}>
                            <Button
                                onClick={
                                    ()=>{
                                        history.push({
                                            pathname: url,
                                            state: { detail: val,answer:correctAns,youtube:youtube }
                                        })
                                    }
                                }
                                align="center" style={{  maxWidth: "100%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",borderRadius:0,paddingLeft:100,paddingBottom:30,paddingTop:30,paddingRight:100,fontSize:30,margin:15,backgroundColor:themeX.palette.primary.main}} >Let's Start</Button>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}