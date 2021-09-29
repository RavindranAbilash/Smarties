import React, { useEffect, useState} from 'react';
import {Typography, Button,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import RobotIcon from '../images/RobotIcon.png'
import slogo from '../images/slogo.png'
import {useHistory} from "react-router";
import themeX from '../theme/index'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    headerBar: {
        display: 'flex',
        marginTop: '6rem'
    },
    main: {
        display: 'flex',
        minHeight: window.innerHeight
    }
}));

const MainLayout = ({children}) => {
    const classes = useStyles();
    let history = useHistory()

    const loginUserData = sessionStorage.getItem('user');
    const [loginUser, SetLoginUser] = useState(false);

    useEffect(() => {
        if (loginUserData !== null) {
            SetLoginUser(true);
        } else {
            SetLoginUser(false);
        }
    }, [loginUserData]);

    return (
        <container>
            <Grid item>
                {/*Header*/}
                <Grid container item>
                    <Grid container item style={{padding: 10, margin: 20, height: 80, border: "1px solid black"}}>
                        <Grid item md={5}>
                            <Grid item md={4}    style={{justifyContent: "center"}}>
                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/home')

                                        }
                                    }
                                    align="center"


                                        style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '4%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0,
                                            border: "1px solid black"

                                }}>Home</Button>
                            </Grid>

                        </Grid>
                        <Grid item style={{height: 60}} md={2}>
                            <img style={{padding: 5, margin: 2, maxWidth: "80%", opacity: 0.8}} src={slogo}></img>
                        </Grid>
                        <Grid container item md={5}>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/home')
                                        }
                                    }
                                    align="center"

                                        style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '4%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0,
                                    border: "1px solid black"
                                }}>Courses</Button>
                            </Grid>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/login')
                                        }
                                    }
                                    align="center"
                                        style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '4%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0,
                                    border: "1px solid black"
                                }}>Login</Button>
                            </Grid>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/signup')
                                        }
                                    }
                                    align="center"
                                        style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '4%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0,
                                    border: "1px solid black"
                                }}>SignUp</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item style={{paddingTop: 0, height: window.innerHeight * 0.755}}>
                    {/*Sidebar Section*/}

                    <Grid container item md={2} style={{justifyContent: "center"}}>
                        <Grid container item style={{justifyContent: "center", backgroundColor: themeX.palette.primary.main, margin: 20}}>
                            <Grid align="center" item style={{justifyContent: "center",paddingTop: 0, width: "100%", marginBottom: 0}}>

                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/profile')
                                        }
                                    }
                                    align="center"
                                        style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '12%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0
                                }}>Profile</Button>

                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/progress')
                                        }
                                    }
                                    align="center"
                                        style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '4%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0
                                }}>Parent</Button>

                                <Grid align="center"
                                      style={{fontFamily: "papyrus", fontWeight: "bold", padding: 20, margin: 15}}>

                                </Grid>
                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/selectAge')
                                        }
                                    }
                                    align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '64%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0
                                }}>Select Age</Button>
                                <Button
                                    onClick={
                                        ()=>{
                                            history.push('/selectGrade')
                                        }
                                    }
                                    align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 20,
                                    paddingBottom: 20,

                                    marginLeft: '8%',
                                    marginRight: '8%',
                                    marginTop: '4%',
                                    marginBottom: '4%',
                                    width: '84%',
                                    backgroundColor: "white",
                                    borderRadius:0
                                }}>Select Grade</Button>


                            </Grid>


                        </Grid>
                    </Grid>

                    {/*Page Section*/}
                    <Grid container item md={10} style={{justifyContent: "center"}}>

                        <Grid container item align="center" style={{justifyContent: "center"}}>
                            <Grid align="center" item style={{
                                margin: 'auto',
                                alignItems: "center",
                                width: "100%",
                                justifyContent: "center",
                            }}>
                                <Grid style={{margin: 'auto'}} item backgroundColor="black">
                                    {children}

                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                {/*Footer*/}
                <Grid container item>
                    <Grid container item style={{
                        justifyContent: "flex-end",
                    }}>
                        <img style={{ width:60 }} src={RobotIcon} onClick={
                            ()=>{
                                history.push('/chatEnter')
                            }
                        }/>

                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid container item style={{
                        justifyContent: "center",
                        padding: 10,
                        margin: 20,
                        height: 40,
                        border: "1px solid black"

                    }}>
                        <Typography align="center">Copyright 2021, SMARTIES', All Rights Reserved</Typography>

                    </Grid>
                </Grid>
            </Grid>
        </container>
    );
};

export default MainLayout;