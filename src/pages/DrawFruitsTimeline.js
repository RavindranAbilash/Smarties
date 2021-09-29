import React, {useState} from 'react';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DrawFruit from "./component/DrawFruit";
import level1 from '../images/level1.jpg'
import level2 from '../images/level2.jpg'
import themeX from "../theme";

import {Popover} from "@material-ui/core";

const theme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: themeX.palette.primary.main,
                },
                '&$active': {
                    color: themeX.palette.primary.main,
                },
            },
            active: {},
            completed: {},
        }
    }
})
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
let val=[]
let answer=[]
let youtube=[]


function getSteps() {
    return ["Question 1","Question 2","Question 3","Question 4","Question 5","Level 1 Completed","Question 1","Question 1","Question 3","Question 4","Question 5"];
}
//Question 1
function q1(){
    return( <DrawFruit head={val[0]} correctAns={answer[0]} youtube={youtube[0]}/>);
}
function q2(){
    return( <DrawFruit head={val[1]}  correctAns={answer[1]} youtube={youtube[1]}/>);
}
function q3(){
    return( <DrawFruit head={val[2]}  correctAns={answer[2]} youtube={youtube[2]}/>);
}
function q4(){
    return( <DrawFruit head={val[3]}  correctAns={answer[3]} youtube={youtube[3]}/>);
}
function q5(){
    return( <DrawFruit head={val[4]} correctAns={answer[4] } youtube={youtube[4]}/>);
}
function q6(){
    return( <DrawFruit head={val[5]} correctAns={answer[5]} youtube={youtube[5]}/>);
}
function q7(){
    return( <DrawFruit head={val[6]}  correctAns={answer[6]} youtube={youtube[6]}/>);
}
function q8(){
    return( <DrawFruit head={val[7]}  correctAns={answer[7]} youtube={youtube[7]}/>);
}
function q9(){
    return( <DrawFruit head={val[8]}  correctAns={answer[8]} youtube={youtube[8]}/>);
}
function q10(){
    return( <DrawFruit head={val[9]}  correctAns={answer[9]} youtube={youtube[9]}/>);
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return q1();
        case 1:
            return q2();
        case 2:
            return q3();
        case 3:
            return q4();
        case 4:
            return q5();
        case 6:
            return q6();
        case 7:
            return q7();
        case 8:
            return q8();
        case 9:
            return q9();
        case 10:
            return q10();
        default:
            return 'Unknown stepIndex';
    }
}

export default function DrawFruitTimeline(props) {
    const classes = useStyles();

    const [steps1,setSteps1]=useState([{lab:"Question 1",num:1}, {lab:"Question 2",num:2}, {lab:"Question 3",num:3}, {lab:"Question 4",num:4}, {lab:"Question 5",num:5}])


    val = (props.location.state.detail)
    answer=(props.location.state.answer)
    youtube=(props.location.state.youtube)



    const [activeStep, setActiveStep] = React.useState(0);
    const [checkStep, setCheckStep] = React.useState(0);

    const steps = getSteps()


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCheckStep((prevCheckStep) => prevCheckStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setCheckStep((prevCheckStep) => prevCheckStep - 1);

    };

    const handleReset = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCheckStep((prevCheckStep) => prevCheckStep + 1);

        setSteps1([{lab:"Question 1",num:6}, {lab:"Question 2",num:7}, {lab:"Question 3",num:8}, {lab:"Question 4",num:9}, {lab:"Question 5",num:10}])
        setActiveStep(0);
    };

    const handleFinish = () => {

        setActiveStep(0);
        setCheckStep(0);
    };

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


    return (
        <div className={classes.root} >
            <div style={{justifyContent: 'center',backgroundColor:"rgba(255, 255, 255, 0.6)",}}>
                <div>
                    {checkStep === 5 ? (
                        <div>
                            <img src={level1}/>
                            <Typography className={classes.instructions}>Level 1 completed</Typography>
                            <Button onClick={handleReset}>Next Level</Button>
                            <Button onClick={handleClick}>suggestion</Button>


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
                                }}>You can do 5th level</Typography>
                            </Popover>
                        </div>
                    ) : (
                        checkStep === 11 ? (
                            <div>
                                <img src={level2}/>
                                <Typography className={classes.instructions}>Level 2 completed</Typography>
                                <Button onClick={handleFinish}>Finish</Button>
                                <Button onClick={handleClick}>suggestion</Button>


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
                                    }}>You can do 5th level</Typography>
                                </Popover>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(checkStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" style={{color:'white',backgroundColor:themeX.palette.primary.main}} color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )

                    )}
                </div>
                {/*{activeStep === 5 ? (*/}
                {/*    <Stepper activeStep={activeStep} alternativeLabel>*/}
                {/*        {steps.map((label) => (*/}
                {/*            <Step key={label}>*/}
                {/*                <StepLabel>{label}</StepLabel>*/}
                {/*            </Step>*/}
                {/*        ))}*/}
                {/*    </Stepper>*/}
                {/*):(*/}
                <MuiThemeProvider theme={theme}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps1.map((index,label) => (
                            <Step key={index['num']}>
                                <StepLabel style={{color:'red'}}>{index['lab']}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </MuiThemeProvider>
                {/*)}*/}

            </div>
        </div>
    );
}
