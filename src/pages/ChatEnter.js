import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components'
import themeX from '../theme/index'
import {Button, Grid} from '@material-ui/core';
import bg from "../images/bg.jpeg";
import Typography from '@material-ui/core/Typography';
import bot from '../images/bot.png'
import {useHistory} from "react-router";

const theme = {
    background: 'transparent',
    fontFamily: 'Comic Sans MS',
    headerBgColor: themeX.palette.primary.main,
    headerFontColor: '#fff',
    headerFontSize: '35px',
    botBubbleColor: 'transparent',
    botFontColor: '#000',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

class ChatEnter extends React.Component {

    handleClick = e => {
        this.props.history.push("/chat");
    };

    render() {

        return (
            <container>
                <Grid container style={{
                    backgroundImage: `url(${bg})`,
                    backgroundOverlay: "black",
                    width: "85%",
                    backgroundPosition: "center",
                    backgroundSize: "100%"
                }}>
                    <Grid container style={{justifyContent: 'center', backgroundColor: "rgba(255, 255, 255, 0.85)",}}>
                        <Grid container item style={{justifyContent: 'center'}}>
                            <Grid container item style={{
                                height: 520,
                                width: 350,
                                border: "1px solid black",
                                borderRadius: 10,
                                paddingBottom: 50
                            }}>
                                <Grid container item style={{
                                    height: 56,
                                    backgroundColor: themeX.palette.primary.main,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    justifyContent: 'center'
                                }}>

                                    <Typography variant='h5' style={{
                                        fontFamily: 'Comic Sans MS',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        paddingTop: 16
                                    }}>
                                        Welcome to ChatBot

                                    </Typography>

                                </Grid>
                                <Grid container item style={{justifyContent: 'center'}}>
                                    <Grid item md={3}></Grid>
                                    <Grid item md={6}>
                                        <Typography variant="h3" style={{fontFamily: 'Comic Sans MS'}}>
                                            Hello

                                        </Typography>
                                    </Grid>
                                    <Grid item md={3}></Grid>

                                    <Grid item md={3}></Grid>
                                    <Grid item md={6}>
                                        <Typography variant="h5" style={{fontFamily: 'Comic Sans MS'}}>
                                            <Typography variant="h6" lign="center"
                                                        style={{fontFamily: 'Comic Sans MS'}}>
                                                I'm Chatty

                                            </Typography>

                                        </Typography>
                                    </Grid>
                                    <Grid item md={3}></Grid>
                                    <Grid container item>
                                        <Grid item md={3}></Grid>
                                        <Grid item md={6} style={{justifyContent: 'center'}}>
                                            <img align='center' src={bot} style={{height: 100, width: 100}}/>


                                        </Grid>
                                        <Grid item md={3}></Grid>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant="h5" lign="center" style={{fontFamily: 'Comic Sans MS'}}>
                                            <Typography variant="h6" lign="center"
                                                        style={{fontFamily: 'Comic Sans MS'}}>
                                                How can I help you?

                                            </Typography>

                                        </Typography>
                                    </Grid>


                                    <Grid item>
                                        <Typography variant="h5" style={{fontFamily: 'Comic Sans MS'}}>
                                            <Button variant="h6"
                                                    onClick={this.handleClick}
                                                    style={{fontFamily: 'Comic Sans MS', border: "1px solid black"}}>
                                                I want to know...

                                            </Button>

                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </container>
        )
    }
}

export default ChatEnter;
