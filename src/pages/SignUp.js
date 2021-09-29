import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {ThemeProvider} from 'styled-components'
import {useHistory} from "react-router";

import Box from '@material-ui/core/Box';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import themeX from "../theme/index"
import bg from "../images/bg.jpeg"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),

        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: themeX.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    inputLabel: {
        color: "lightgray",
        "&.Mui-focused": {
            color: themeX.palette.primary.main
        },
        outline: 'red',
        borderColor: 'red'
    },
    input: {
        color: "#2EFF22"
    },

}));

export default function SignUp() {
    const classes = useStyles();
    let history = useHistory()

    return (
        <ThemeProvider theme={useStyles}>
            <Container style={{justifyContent: 'center', height: "100%",}} component="main">
                <CssBaseline/>
                <Grid item container style={{
                    backgroundImage: `url(${bg})`, backgroundHeight: 300, backgroundOverlay: "black",
                    backgroundPosition: 'center', backgroundSize: "cover"
                }}>
                    <Grid item container style={{backgroundColor: "rgba(255, 255, 255, 0.8)",}}>
                        <Grid container md={2}>
                        </Grid>
                        <Grid container md={8}>

                            <Grid container item style={{padding: 20, justifyContent: 'center',}}>
                                <Typography style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                    margin: 40
                                }}> SignUp</Typography>

                                <form className={classes.form} noValidate>
                                    <Grid container>
                                        <Grid container item md={6}>
                                            <Grid item style={{padding: 20}}>
                                                <TextField

                                                    autoFocus='false'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="username"
                                                    label="Username"
                                                    type="text"
                                                    id="username"
                                                    autoComplete="current-password"
                                                    borderColor="black"
                                                    InputProps={{
                                                        className: classes.inputLabel
                                                    }}
                                                    sty
                                                />
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="firstname"
                                                    label="First Name"
                                                    type="firstname"
                                                    id="firstname"

                                                    borderColor="black"
                                                />
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                    borderColor="black"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container item md={6}>
                                            <Grid item style={{padding: 20}}>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="email"
                                                    label="E-mail"
                                                    type="email"
                                                    id="email"

                                                    borderColor="black"
                                                />
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="lastname"
                                                    label="Last Name"
                                                    type="lastname"
                                                    id="lastname"
                                                    borderColor="black"
                                                />
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="re-password"
                                                    label="Retype Password"
                                                    type="re-password"
                                                    id="re-password"
                                                    autoComplete="current-password"
                                                    borderColor="black"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <FormControlLabel
                                        control={<Checkbox value="remember"
                                                           style={{color: themeX.palette.primary.main}}/>}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        color="white"
                                        variant="contained"
                                        style={{backgroundColor: themeX.palette.primary.main, color: "white"}}
                                        className={classes.submit}
                                    >
                                        <span fontColor="white"> Sign Up</span>
                                    </Button>
                                    <Grid container>
                                        <Grid item md={6} justifyContent="left"
                                        >
                                            <Link onClick={
                                                () => {
                                                    history.push('/login')
                                                }
                                            } variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Link onClick={
                                                () => {
                                                    history.push('/login')
                                                }
                                            } variant="body2">
                                                {"Do you have an account? Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                        <Grid container md={2}>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}