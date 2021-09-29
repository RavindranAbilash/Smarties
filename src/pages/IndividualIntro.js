import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';

import individualIntro1 from "../images/individualIntro1.png"
import individualIntro2 from "../images/individualIntro2.png"
import individualIntro3 from "../images/individualIntro3.png"
import Image from "../images/individualIntroBg.png";

const IndividualIntro = ({children}) => {


    return (
        <container>
           <Grid container item style={{backgroundImage: `url(${Image})`,
               backgroundPosition: 'center',backgroundSize:"60%",backgroundRepeat  : 'no-repeat',}}>
               <Grid container item style={{justifyContent: 'center',backgroundColor:"rgba(255, 255, 255, 0.6)",}}>
               <Typography style={{margin:50,fontSize:30,fontFamily: "papyrus",
                   fontWeight: "bold",}} >
                   Start Here
               </Typography>
               <Grid container item >
                   <Grid container item style={{marginLeft:40,marginRight:40}}>
                   <Grid container style={{height:200}} item md={3}  >
<img style={{height:200, border: "1px solid black"}} src={individualIntro1}/>
                   </Grid>
                   <Grid container item md={3} >

                   </Grid>
                   <Grid container style={{height:200}} item md={3}  >
                       <img style={{height:200, border: "1px solid black"}} src={individualIntro3}/>
                   </Grid>
                   <Grid container item md={3}>

               </Grid>
               </Grid>
               <Grid container item >
                   <Grid container item md={3}>

                   </Grid>
                   <Grid container style={{height:200}} item md={3}  >
                       <img style={{height:200, border: "1px solid black"}} src={individualIntro2}/>
                   </Grid>
                   <Grid container item md={3} >

                   </Grid>
                   <Grid container style={{height:200}} item md={3}  >
                       <img style={{height:200, border: "1px solid black"}} src={individualIntro2}/>
                   </Grid>

               </Grid>
               </Grid>
               </Grid>
           </Grid>
        </container>
    );
};

export default IndividualIntro;