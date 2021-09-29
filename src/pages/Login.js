import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import themeX from "../theme/index"
import bg from "../images/bg.jpeg"
import '../fonts/index.css'
import {useHistory} from "react-router";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(6),
        display: 'flex',
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
}));

export default function Login() {
    const classes = useStyles();
    let history = useHistory()

    return (
        <Container style={{justifyContent: 'center', height: "100%",}} component="main">
            <CssBaseline/>
            <Grid item container style={{
                backgroundImage: `url(${bg})`, backgroundHeight: 300, backgroundOverlay: "black",
                backgroundPosition: 'center', backgroundSize: 'cover'
            }}>
                <Grid item container style={{backgroundColor: "rgba(255, 255, 255, 0.8)",}}>
                    <Grid container md={3}>
                    </Grid>
                    <Grid container md={6}>

                        <Grid item style={{padding: 20}}>
                            <Typography style={{
                                fontFamily: "papyrus",
                                fontWeight: "bold",
                                fontSize: "30px",
                                margin: 40
                            }}> SignIn</Typography>
                            <Avatar fontSize="large" className={classes.avatar}>
                                <LockOpenOutlined/>
                            </Avatar>
                            <hr align="center" style={{width: "50%",}}/>
                            <form className={classes.form} noValidate>
                                <TextField
                                    color="white"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
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
                                <FormControlLabel
                                    control={<Checkbox value="remember" style={{color: themeX.palette.primary.main}}/>}
                                    label="Remember me"
                                />
                                <Button

                                    type="submit"
                                    fullWidth
                                    color="white"
                                    variant="contained"
                                    style={{
                                        backgroundColor: themeX.palette.primary.main,
                                        color: "white",
                                        fontFamily: 'jokerman-regular, sans-serif'
                                    }}
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item md={6} justifyContent="left"
                                    >
                                        <Link onClick={
                                            () => {
                                                history.push('/signup')
                                            }
                                        } variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Link onClick={
                                            () => {
                                                history.push('/signup')
                                            }
                                        } variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid container md={3}>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}