import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components'
import themeX from '../theme/index'
import {Grid} from '@material-ui/core';
import bg from "../images/bg.jpeg";

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

class Chat extends React.Component {

    render() {
        return (
            <container>
                <Grid style={{
                    backgroundImage: `url(${bg})`,
                    backgroundOverlay: "black",
                    width: "85%",
                    backgroundPosition: "center",
                    backgroundSize: "100%"
                }}>
                    <Grid style={{justifyContent: 'center', backgroundColor: "rgba(255, 255, 255, 0.85)",}}>
                        <ThemeProvider theme={theme}>
                            <ChatBot style={{botFontColor: 'red'}}

                                     steps={[
                                         {
                                             id: '1',
                                             message: 'Hello sara! ' +
                                                 'How can I help you?',
                                             trigger: '2',
                                         },
                                         {
                                             id: '2',
                                             user: true,
                                             trigger: '3',
                                         },
                                         {
                                             id: '3',

                                             message: 'You are Welcome',
                                             trigger: '4',
                                         },


                                         {
                                             id: '4',
                                             user: true,
                                             trigger: '5',
                                         },
                                         {
                                             id: '5',
                                             message: 'http://www.example.com',

                                         }

                                     ]}
                            />
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </container>
        )
    }
}

export default Chat;
