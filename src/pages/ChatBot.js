import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components'
import themeX from '../theme/index'
import {Grid} from '@material-ui/core';
import bg from "../images/bg.jpeg";
import ChartMath from './component/ChartMath'
import ChartKiderArt from "./component/ChartKiderArt";
import ChartSpeak from "./component/ChartSpeak";

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
                                             message: 'What is your name?',
                                             trigger: '2',
                                         },
                                         {
                                             id: '2',
                                             user: true,
                                             trigger: '3',
                                         },
                                         {
                                             id: '3',
                                             message: 'Hi {previousValue}, what would you like to know?',
                                             trigger: '4',
                                         },
                                         {
                                             id: '4',
                                             options: [
                                                 { value: 1, label: 'Report of Play with Math', trigger: '5' },
                                                 { value: 2, label: 'Report of Speak with SMARTE\'s', trigger: '6' },
                                                 { value: 3, label: 'Report of Kinder Art', trigger: '7' },
                                             ],
                                         },
                                         // {
                                         //     id: '4',
                                         //     user: true,
                                         //     trigger: '5',
                                         // },
                                         {
                                             id: '5',
                                             component: (
                                                 <div>  <ChartMath/> </div>
                                             ),
                                             trigger: '8',
                                         },
                                         {
                                             id: '6',
                                             component: (
                                                 <div> <ChartSpeak/> </div>
                                             ),
                                             trigger: '8',
                                         },
                                         {
                                             id: '7',
                                             component: (
                                                 <div> <ChartKiderArt/></div>
                                             ),
                                             trigger: '8',
                                         },
                                         {
                                             id: '8',
                                             message: 'Do you need more report?',
                                             trigger: '9',
                                         },
                                         {
                                             id: '9',
                                             options: [
                                                 { value: 1, label: 'Yes', trigger: '4' },
                                                 { value: 2, label: 'No', trigger: '10' },
                                             ],
                                         },
                                         {
                                             id: '10',
                                             message: 'Thank You, Bye...',
                                             end:true,
                                         },
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
