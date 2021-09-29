import React, {useEffect, useState} from "react";

import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "../modal-video.scss"


import themeX from "../../theme";
import Button from "@material-ui/core/Button";

import apple from "../../images/1.jpg"
import {Popover} from "@material-ui/core";
import {useIsMobileOrTablet} from "./utils/isMobileOrTablet";
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


function Draw(props) {
    console.log(props)
    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();

    const [img, setImg] = useState(null)
    const [img1, setImg1] = useState(null)


    let saveableCanvas = null;

    function onSave(event) {


        var canvas = document.getElementById("mycanvas");
        let id = crypto.randomBytes(4);
        setImg(saveableCanvas.getSaveData())
        localStorage.setItem("savedDrawing-" + id, img);
        const d = saveableCanvas.canvasContainer.children[1].toDataURL();
        console.log("d:" + d)
        setImg1(d)
        items.push(id);
        const a = document.createElement("a");
        // a.download = "download.png";
        a.href = saveableCanvas.canvasContainer.children[1].toDataURL();
        a.click();
        setItems(items);
        saveableCanvas.clear();


    }

    useEffect(() => {
        saveableCanvas.clear();
    }, [props])

    const [isOpen, setOpen] = useState(false)

    //popup msg

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


}


return (
    <React.Fragment>
        <container>
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
                <Grid container style={{justifyContent: 'center', height: "100%"}}>

                    <Grid container item md={6} style={{justifyContent: 'center'}}>

                        <div className="App">

                            <CanvasDraw
                                ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
                                canvasWidth={350}
                                canvasHeight={350}
                                hideGrid

                                brushRadius={5}
                                style={{
                                    boxShadow:
                                        "0 3px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
                                }}
                            />

                            {/*<img src={img1}  alt="k"/>*/}
                            {/*<button onClick={onSave}>Save</button>*/}
                            {/*<ul>*/}


                            {/*            <CanvasDraw*/}
                            {/*                ref={(canvasDraw) => (saveableCanvas = canvasDraw)}*/}
                            {/*                saveData={localStorage.getItem("savedDrawing-" + items[items.length-1])}*/}
                            {/*                canvasWidth={200}*/}
                            {/*                canvasHeight={100}*/}
                            {/*                hideGrid*/}
                            {/*                brushRadius={5}*/}
                            {/*                style={{*/}
                            {/*                    boxShadow:*/}
                            {/*                        "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"*/}
                            {/*                }}*/}
                            {/*            />*/}


                            {/*</ul>*/}
                        </div>

                    </Grid>

                    <Grid container item md={1}
                          style={{justifyContent: 'left', paddingBottom: 150, paddingTop: 150}}>
                        {/*<Button  variant="contained" color="primary" onClick={onSave}*/}
                        {/*        style={{color: 'white', backgroundColor: themeX.palette.primary.main}}>*/}
                        {/*    Check*/}
                        {/*</Button>*/}
                        <Button aria-describedby={id} variant="contained" color="primary" onClick={onSave}
                                style={{color: 'white', backgroundColor: themeX.palette.primary.main}}>
                            Check
                        </Button>


                        <div>{props.correctAns}</div>
                        <ModalVideo style={{width: '100%'}} channel='youtube' autoplay isOpen={isOpen}
                                    videoId={props.youtube} onClose={() => setOpen(false)}/>
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
                        {/*<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>*/}
                    </Grid>
                </Grid>
            </Grid>
        </container>
    </React.Fragment>
);
}

export default Draw
