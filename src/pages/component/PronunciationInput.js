import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import MicIcon from '@material-ui/icons/Mic';

import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";

import useSpeechToText from "react-hook-speech-to-text";
import Button from "@material-ui/core/Button";
import themeX from "../../theme";
import ModalVideo from 'react-modal-video'
import {Popover} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
            height: 150,
            fontSize:50,

        },
    },
}));
function Draw(props) {
    //popup msg

    //popup msg
    const [isOpen, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        if(transcript === props.correctAns){
            setAnchorEl(event.currentTarget);
        }else{
            setOpen(true)
        }

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    console.log(props)
    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();
    const [img,setImg]=useState('')
    let saveableCanvas = null;
    function onSave() {
        var canvas = document.getElementById("mycanvas");
        let id = crypto.randomBytes(4);
        setImg(saveableCanvas.getSaveData())
        localStorage.setItem("savedDrawing-" + id, img);
        items.push(id);
        setItems(items);
        saveableCanvas.clear();
    }
    const classes = useStyles();



    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(()=>
        resetTranscript
    ,[props])

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });
    if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;


    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }



    return (
        <container>
            <Grid container style={{marginBottom:40}}>
                <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:40}}>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Addition</Typography>
                </Grid>

                <Grid container item>
                    <Grid container item md={1} ></Grid>
                    <Grid container item md={5}  >
                        <Grid container item>
                            <Typography align="center" style={{  maxWidth: "100%",opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}}
                            >{props.head}</Typography>
                        </Grid>
                        <Typography align="center" style={{  maxWidth: "100%",opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:50}}
                        >{props.word}</Typography>

                    </Grid>

                    <Grid container item md={4} style={{justifyContent: 'center' }}>
                        <Grid  item style={{width: "100%",}}>
                            <Typography  align="center" style={{  width: "100%",opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Answer</Typography>
                        </Grid>
                        <Grid container item style={{justifyContent: 'center' }}>
                            <Grid item md={3} style={{marginTop: 10}}>
                                <MicIcon fontSize="large"
                                         style={listening ? {fill:'green'} : {fill: ''}}
                                         onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening} />
                            </Grid>
                            <Grid item md={9}>
                                <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:20,padding:10,height:30, border: "1px solid black",opacity:0.6}} >{transcript}</Typography>
                                <Grid style={{paddingTop:20}}>
                                    <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}
                                            style={{color: 'white', backgroundColor: themeX.palette.primary.main}}>
                                        Check
                                    </Button>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorReference="anchorPosition"
                                        anchorPosition={{top: 300, left: 800}}
                                        anchorOrigin={{
                                            vertical: 'center',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        onClose={handleClose}

                                    >
                                        <Typography style={{
                                            maxWidth: "100%",
                                            margin: 15,
                                            fontFamily: "Comic Sans MS",
                                            fontStyle: "italic",
                                            fontSize: 50
                                        }}>Correct Answer</Typography>
                                    </Popover>
                                    <ModalVideo style={{width: '100%'}} channel='youtube' autoplay isOpen={isOpen} videoId={props.youtube} onClose={() => setOpen(false)} />

                                </Grid>
                            </Grid>

                        </Grid>


                    </Grid>


                </Grid>
            </Grid>
        </container>
    );
}

export default Draw
