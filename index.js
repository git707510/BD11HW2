let express = require('express');
let app = express();
let port = 3000;

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})

app.get('/custom-commit',(req,res)=>{
  let type = req.query.type;
  let message = req.query.message;
  res.send(type +": "+message);
})

app.get('/certificate',(req,res)=>{
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;

  let certificateForStudent = "This certification is awarded to " +firstName +" "+lastName+" for completing the course"+courseName;
  res.send(certificateForStudent);
})

app.get('/autoreply',(req,res)=>{
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let autoReplyMessage = "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from" + startMonth + "till" + endMonth+". Your enquiry will be resolved by another collegue."
  res.send(autoReplyMessage);
})


app.get('/secureurl',(req,res)=>{
  let domain = req.query.domain;
  let secureDomain = "https://"+domain;
  res.send(secureDomain);
})



app.get('/sendotp',(req,res)=>{
  let otpCode = req.query.otpCode;
  let otpMessage = "our OTP for account verification is "+ otpCode +". Do not share this with anyone";
  res.send(otpMessage);
})


app.get('/welcome',(req,res)=>{
  let firstName = req.query.firstName;
  let email = req.query.email;
  let emailMessage = "Hey "+firstName+". We're excited to have you here, we'll send future notifications to your registered mail ("+email+")"
  res.send(emailMessage);
})


app.get('/github-profile',(req,res)=>{
  let userName = req.query.userName;
  let githubProfile = "https://github.com/"+userName;
  res.send(githubProfile);
})


app.get('/text-to-csv',(req,res)=>{
  let id, email, rollNumber;
  id = req.query.id;
  email=req.query.email;
  rollNumber=req.query.rollNumber;
  let csvData = id+","+email+","+rollNumber;
  res.send(csvData);
});