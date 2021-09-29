import React, {useEffect, useState} from "react";

import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";


function Draw(props) {
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

    useEffect(()=>{
        saveableCanvas.clear();
    },[props])

    return (
        <container>
            <Grid container>
<Grid container item md={3}></Grid>
            <Grid container item md={3}>
                <Grid container style={{height:400,width:350}} item md={3}  >
                    <Grid container item style={{justifyContent: 'center'}}>

                        <Grid style={{justifyContent: 'center'}} >
                            <Typography align="center" style={{
                                fontFamily: "papyrus",
                                fontWeight: "bold",
                                width:350
                            }}>{props.head}</Typography>
                        <img style={{height:400,width:350, border: "1px solid black"}} src={props.img}/>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid container item md={2}></Grid>
            <Grid container item md={3} style={{justifyContent: 'center'}}>
             <Typography align="center" style={{
                    fontFamily: "papyrus",
                    fontWeight: "bold",
                }}>Draw the number</Typography>
                <div className="App">

                    <CanvasDraw
                        ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
                        canvasWidth={350}
                        canvasHeight={400}
                        hideGrid

                        brushRadius={5}
                        style={{
                            boxShadow:
                                "0 3px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
                        }}
                    />
                    {/*<button onClick={onSave}>Save</button>*/}
                    {/*<ul>*/}


                    {/*            <CanvasDraw*/}
                    {/*                disabled*/}
                    {/*                saveData={localStorage.getItem("savedDrawing-" + items[items.length-1])}*/}
                    {/*                canvasWidth={200}*/}
                    {/*                canvasHeight={100}*/}
                    {/*                hideGrid*/}
                    {/*                style={{*/}
                    {/*                    boxShadow:*/}
                    {/*                        "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"*/}
                    {/*                }}*/}
                    {/*            />*/}
                    {/*    */}

                    {/*</ul>*/}
                </div>

            </Grid>
            <Grid container item md={1}></Grid>
            </Grid>
        </container>
    );
}

export default Draw
