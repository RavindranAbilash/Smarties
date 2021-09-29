import React, {useContext, useEffect, useState} from "react";

import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";
import themeX from "../../theme";
import Button from "@material-ui/core/Button";
import ModalVideo from 'react-modal-video'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/tt.css"







import * as ml5 from "ml5";



function Draw(props) {
    console.log(props)
    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();
    let [predictions,setPredictions]=useState([])

    const [img,setImg]=useState('')
    const [img1,setImg1]=useState(null)
    const [test,setTest]=useState(false)

    let saveableCanvas = null;
    function onSave(event) {
        console.log("hhhh",event.target)
        var canvas = document.getElementById("mycanvas");
        let id = crypto.randomBytes(4);
        setImg(saveableCanvas.getSaveData())
        localStorage.setItem("savedDrawing-" + id, img);
        const d = saveableCanvas.canvasContainer.children[1].toDataURL();
        console.log("d:"+d)
        setImg1(d)
        items.push(id);
        const a = document.createElement("a");
        // a.download = "download.png";
        a.href = saveableCanvas.canvasContainer.children[1].toDataURL();
        a.click();
        setItems(items);
        saveableCanvas.clear();
        // Predict(img1)
        // setPhoto(img1)
        // const p =()=>{return <Predict name={img1} />}
        // p()
        const classifier = ml5.imageClassifier("MobileNet", modelLoaded);
        // When the model is loaded
        function modelLoaded() {
            console.log('Model Loaded!');
        }
        // Put the image to classify inside a variable
        const image = document.getElementById('image');
        // Make a prediction with a selected image
        classifier.predict(image, 5, function(err, results) {
            // Return the results
            return results;
        })
            .then((results) => {
                // Set the predictions in the state

                setPredictions(results[0].className)
                console.log("event",event.currentTarget)
                if(results[0].className==="matchstick") {

                    // toast(
                    //     <div style={{ height: "100%", borderLeft: "5px solid green" }}>
                    //         {/* insert your icon here */}
                    //         <span style={{ fontSize:"100",fontWeight: "bold", color: "#fff" , background:themeX.palette.primary.main,margin:200}}>Correct Answer</span>{" "}
                    //     </div>
                    // );
                    toast.success("Correct Answer", {
                        position: toast.POSITION.TOP_CENTER
                    });

                }
                else{
                    setOpen(true)
                }
                // if (predictions=="matchstick"){
                //     setAnchorEl(event.currentTarget);
                // }

                console.log("r",results)



            })

        // if(predictions.length > 0){
        //     predictions = predictions.map((pred, i) => {
        //         let { className, probability } = pred;
        //         // round the probability with 2 decimal
        //         probability = Math.floor(probability * 10000) / 100 + "%";
        //         return (
        //             <div key={ i + "" }>{ i+1 }. Prediction: { className } at { probability } </div>
        //         )
        //     })
        // }





    }

    useEffect(()=>{
        saveableCanvas.clear();
    },[props])

    const [isOpen, setOpen] = useState(false)






    return (
        <container>
            <ToastContainer style={{height:"400"}}/>

            <Grid container item>
                <Typography align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}}
                >{props.head}</Typography>
            </Grid>
            <Grid container item>
                <Grid container style={{justifyContent: 'center',height:"100%"}}>

                    <Grid container item md={6} style={{justifyContent: 'center'}}>

                        <div className="App">


                            <CanvasDraw
                                ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
                                canvasWidth={350}
                                canvasHeight={350}
                                hideGrid

                                brushRadius={8}
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

                    <Grid container item md={1} style={{justifyContent: 'left', paddingBottom: 150, paddingTop: 150}}>
                        <Button  variant="contained" color="primary" onClick={onSave}
                                 style={{color: 'white', backgroundColor: themeX.palette.primary.main}}>
                            Check
                        </Button>
                        <ModalVideo style={{width: '100%'}} channel='youtube' autoplay isOpen={isOpen}
                                    videoId={props.youtube} onClose={() => setOpen(false)}/>

                        <div className="App">

                            <img style={{display:"none"}} src={img1 } id="image" width="400" alt="" />
                            { predictions }

                            {(predictions=="matchstick")? "  correct ":  "wrong"}
                        </div>


                    </Grid>
                </Grid>
            </Grid>
        </container>
    );
}


export default Draw
