import React, {useContext,useEffect, useState} from "react";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

import {useIsMobileOrTablet} from "./utils/isMobileOrTablet";
import themeX from "../../theme";
import Button from "@material-ui/core/Button";
import {Popover} from "@material-ui/core";
import {SelectionMarksContext} from "../../Context/SelectionMarksContext";
import {MathMarksContext} from "../../Context/MathMarks"

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
            height: 100,
            fontSize: 90

        },
    },
}));

function Draw(props) {

    useEffect(() => {
        setX('')
        setCurrentValue('')
    }, [props])

    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();
    const [img, setImg] = useState('')
    let saveableCanvas = null;
    let check = '';
    const [isOpen, setOpen] = useState(false)


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
    const [x, setX] = useState("")
    const [currentValue, setCurrentValue] = useState('')



    //popup msg

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {

        if(currentValue == props.correctAns){
            setAnchorEl(event.currentTarget);
            setMathMarks([mathMarks[0],(mathMarks[1]+1),(mathMarks[2]+1)])
        }else{
            setOpen(true)
            setMathMarks([mathMarks[0],mathMarks[1],(mathMarks[2]+1)])
        }

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [selectionMarks, setSelectionMarks]  = useContext(SelectionMarksContext);
    const [mathMarks,setMathMarks] = useContext(MathMarksContext)


    return (
        <container>
            <Grid container>
                <Grid item style={{width: "100%", justifyContent: "center", paddingBottom: 0}}>
                    <Typography align="center" style={{
                        maxWidth: "100%",
                        margin: 15,
                        opacity: 0.6,
                        fontFamily: "Comic Sans MS",
                        fontStyle: "italic",
                        fontSize: 35
                    }}>Addition</Typography>
                </Grid>
                <Grid container item>
                    <Typography align="center" style={{
                        maxWidth: "100%",
                        margin: 15,
                        opacity: 0.6,
                        fontFamily: "Comic Sans MS",
                        fontStyle: "italic",
                        fontSize: 35
                    }}
                    >{props.head}</Typography>
                </Grid>
                <Grid container item>
                    <Grid container item md={2}></Grid>
                    <Grid container item md={5}>

                        <Typography align="center"
                                    style={{
                                        fontFamily: "Comic Sans MS",
                                        fontSize: 100,
                                        margin: 1,
                                        opacity: 0.6
                                    }}>{props.a1} +
                            {props.a2} &nbsp; = </Typography>

                    </Grid>

                    <Grid container item md={4} style={{justifyContent: 'left', paddingBottom: 40, paddingTop: 20}}>

                        <TextField value={currentValue} onDrop={(event) => {
                            var data = event.dataTransfer.getData("Text");
                            setCurrentValue(data)


                        }} aria-dropeffect={true} style={{fontFamily: "Comic Sans MS", margin: 1, opacity: 0.8}}
                                   className={classes.root} id="filled-basic" variant="filled"/>

                    </Grid>
                    <Grid container item md={1} style={{justifyContent: 'left', paddingBottom: 60, paddingTop: 40}}>

                        <div>
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
                        </div>

                    </Grid>

                </Grid>

                <Grid container item>
                    <Grid container item md={4}></Grid>
                    <Grid container item md={5}>
                        {props.ans.map((x) => {
                            return (
                                <Grid item md={2} style={{justifyContent: "center"}}>
                                    <Typography onDragStart={(event) => {
                                        event.dataTransfer.setData("Text", event.target.id);
                                    }} draggable={true} id={x} align="center" value='4' style={{
                                        fontFamily: "Comic Sans MS",
                                        fontSize: 60,
                                        margin: 2,
                                        border: "1px solid black",
                                        opacity: 0.6
                                    }}>{x}</Typography>

                                </Grid>
                            )
                        })}


                    </Grid>
                </Grid>

            </Grid>

        </container>
    );
}

export default Draw
