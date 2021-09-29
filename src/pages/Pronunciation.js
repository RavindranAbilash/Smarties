import React, {useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PronunciationInput from "../pages/component/PronunciationInput"
import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";
import themeX from "../theme";

import {Popover} from "@material-ui/core";

//new import
import {MuiThemeProvider} from '@material-ui/core/styles'

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

function getSteps() {
    return ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
}

//Question 1
function q1() {
    return (<PronunciationInput head={"1.Pronounce this word"} word={"Cat"} correctAns={"cat"} youtube={""}/>);
}

function q2() {
    return (<PronunciationInput head={"2.Pronounce this word?"} word={"Dog"} correctAns={"dog"} youtube={""}/>);
}

function q3() {
    return (<PronunciationInput head={"3.Pronounce this word"} word={"Lion"} correctAns={"lion"} youtube={""}/>);
}

function q4() {
    return (<PronunciationInput head={"4.Pronounce this word"} word={"Tiger"} correctAns={"tiger"} youtube={""}/>);
}

function q5() {
    return (<PronunciationInput head={"5.Pronounce this word"} word={"Snake"} correctAns={"snake"} youtube={""}/>);
}

function q6() {
    return (<PronunciationInput head={"6.Pronounce this word"} word={"Cat"} correctAns={"cat"} youtube={""}/>);
}

function q7() {
    return (<PronunciationInput head={"7.Pronounce this word?"} word={"Dog"} correctAns={"dog"} youtube={""}/>);
}

function q8() {
    return (<PronunciationInput head={"8.Pronounce this word"} word={"Lion"} correctAns={"lion"} youtube={""}/>);
}

function q9() {
    return (<PronunciationInput head={"9.Pronounce this word"} word={"Tiger"} correctAns={"tiger"} youtube={""}/>);
}

function q10() {
    return (<PronunciationInput head={"10.Pronounce this word"} word={"Snake"} correctAns={"snake"} youtube={""}/>);
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

export default function Pronunciation() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [checkStep, setCheckStep] = React.useState(0);

    const steps = getSteps();
    const [steps1, setSteps1] = useState([{lab: "Question 1", num: 1}, {lab: "Question 2", num: 2}, {
        lab: "Question 3",
        num: 3
    }, {lab: "Question 4", num: 4}, {lab: "Question 5", num: 5}])

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

        setSteps1([{lab: "Question 1", num: 6}, {lab: "Question 2", num: 7}, {
            lab: "Question 3",
            num: 8
        }, {lab: "Question 4", num: 9}, {lab: "Question 5", num: 10}])
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
        <div className={classes.root}>
            <div style={{justifyContent: 'center', backgroundColor: "rgba(255, 255, 255, 0.6)",}}>
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
                                    <Button variant="contained"
                                            style={{color: 'white', backgroundColor: themeX.palette.primary.main}}
                                            onClick={handleNext}>
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
                        {steps1.map((index, label) => (
                            <Step key={index['num']}>
                                <StepLabel style={{color: 'red'}}>{index['lab']}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </MuiThemeProvider>
                {/*)}*/}

            </div>
        </div>
    );
}
