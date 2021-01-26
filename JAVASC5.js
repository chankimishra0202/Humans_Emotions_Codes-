<script>

alert( "!!!!! WELCOME !!!!!");
/////////////////////// Human Emotions Codes ////////////////////////

class eventdetails
{
         concert(BookingNumber)
         {
           this.BookingNumber = BookingNumber
           if(this.BookingNumber == "IS151110080016")
             {
              document.writeln("Your Booking is confirm !<br>")
              tx.concertDetails()
              tx.visitorDetails()
             }
           else
            {
              document.writeln("Your Ticket has not been booked<br>");
            }
       }
 
               concertDetails()
                {
                   this.Date = "Dec 1st";
                   this.Day  = "Tuesday";
                   this.Time  = "3:30 AM";
                   this.NumberOfPerson  = 1;
                   this.NameOfSeva = "Archana";
                  this.Privilges = "Two Small Laddu";
                  document.writeln("Date :"+this.Date, "<br>Day :"+ this.Day,"<br>Name Of Seva :"+this.NameOfSeva);
                 }
             visitorDetails()
                {
                   this.VisitorName  = "venkatesh";
                   this.TicketType  = "Special Entry Ticlet";
                   this.ReportingTime  = "11:36:46";
                   this.EmailId = "venkatesh.db@gmail.com";
                   document.writeln("<br>EmailID :"+ this.EmailId);
                   document.writeln("<br><br>")
               }
}
let tx = new eventdetails()
tx.concert("IS151110080016")

/////////////////////// Human Emotions Codes ///////////////////////////////

class EMail
{
       MailFrom(senderid )
        {
         this.senderid = senderid
         if(this.senderid == "kasi.sivap@gmail.com")
          {
           cin.MailTo("venkatesh.db@gmail.com<br>");
          }
       else
         {
          document.writeln("Not Authorized to send mail<br>");
         }
       }
        MailTo(receiverid)
         {
         this.receiverid = receiverid
         document.writeln("<br>Mail successfully sent to " +this.receiverid)
        }     
}
let cin = new EMail()
cin.MailFrom("kasi.sivap@gmail.com")

/////////////////////////// Human Emotions Codes ////////////////////////////////////////////////////

class creditdetails
{
             creditcard(creditnum )
              {
               this.creditnum = creditnum
               if(this.creditnum == 61524376263782 )
                 {
                    this.outstandvalue = experian.outstanding();
                    this.minimumval =   experian.minimum();
                    document.writeln(this.outstandvalue);
                    document.writeln(this.minimumval);
                 }
             else
              {
                document.writeln("Invalid Credit card number");
              }
           }
             outstanding()
              {
                document.write("<br> Your current amount is : ")
                this.outstandingvalue = 571.36;
                return this.outstandingvalue;
              }
             minimum()
              {
              document.write("<br> Your current  minimum balance is : ")
               this.minimumbalance = 272.36;
               return this.minimumbalance
              }
}
let experian = new creditdetails()
    experian.creditcard(61524376263782)
    experian.creditcard(15263787365243)

///////////////////////////////// Human Emotions Codes ///////////////////////////////////////////////////////////////

class creditdetails1
{
      creditcardverification(cnumber)
       {
        this.cnumber = cnumber
         if(this.cnumber == 62627382738)
           {
            this.utilization= 3;
            valuable.showoutstanding(571.36,0);
            valuable.showlastpaymentmade(300,"11Jan2021");
            valuable.showcreditlimit(18000,17428.64);
            this.balance = valuable.showlimit(3600,3600);
            document.writeln("<br>Available Cash :" + this.balance);
          }
        else
         {
          document.writeln("<br>Invalid Credentials");
         }
       }
    showoutstanding(TotalOutstanding , unbilled)
    {  
    this.TotalOutstanding = TotalOutstanding
    this.unbilled = unbilled
    document.writeln("<br>Total Outstanding :"+ this.TotalOutstanding);   
    document.writeln("<br>Unbilled "+ this.unbilled);
   }
    showlastpaymentmade(lastamountmade, PaymentMadeOn )
     {
       this.lastamountmade = lastamountmade
       this.PaymentMadeon = PaymentMadeOn
       document.writeln("<br>Last Payment made on "+this.PaymentMadeon)
       document.writeln("<br>Last Amount Made"+ this.lastamountmade);
     }
     showcreditlimit(TotalCredit, Availcred)
      {
         this.TotalCredit = TotalCredit
         this.Availcred = Availcred
         if(this.TotalCredit > 20000)
          {
             document.writeln("<br>Credit Limit Disabled");
          }
        else
         {
           this.rem  = 20000 - this.TotalCredit;
          document.writeln("Remained Credits "+ this.rem);
        }
      }
     showlimit(totalcash, cashavailable )
      {    
         this.totalcash= totalcash
         this.cashavailable = cashavailable
         return this.cashavailable;
      }
}
let valuable = new creditdetails1()
    valuable.creditcardverification(62627382738)
    valuable.creditcardverification(35362736273)
    
//////////////////////////// Humans Codes Emotions //////////////////////////////////////////////////////////////

class passengerfaredetails
{
  
  constructor(name,age,gender,birth,distance,tname)
  {
   this.passengername = name;
   this.passengerage = age;
   this.gender = gender;
   this.seatnumber = birth;
   this.distancecovered = distance;
   this.trainname = tname;
  }
  calculatefare() 
  {
     if(this.trainname == "Rajdhani")
     {
       if(this.distancecovered > 200 && this.distancecovered < 350)
       {
         this.ticketfare = 420;
         this.tariffcharge = 23;
         this.totalfare = this.ticketfare + this.tariffcharge;
         document.writeln("<br><br>Total Fare :" + this.totalfare);

       }
       else if(this.distancecovered > 350 && this.distancecovered <500)
       {
         this.ticketfare = 800;
         this.tariff = 35;
         this.totalfare = this.ticketfare + this.tariff;
         document.writeln("<br>Total Fare :" + this.totalfare);
       }
       else
       {
         document.writeln("<br> Rajdhani fare is dynamic ");
       }
     }
     else if(this.trainname == "Vande Bharat Express")
     {
       if(this.distancecovered > 400 && this.distancecovered < 700)
       {
         this.ticketfare = 1500;
         this.tariff = 70;
         this.totalfare = this.ticketfare + this.tariff;
         document.writeln("<br>Total Fare :" + this.totalfare);
       }
       else if(this.distancecovered >700 && this.distancecovered <1200)
       {
         this.ticketfare = 2800;
         this.tariff = 100;
         this.totalfare = this.ticketfare + this.tariff;
         document.writeln("<br>Total Fare :" + this.totalfare);
       }
       else
       {
         document.writeln("<br>Assigned only on two routes depend on ammenities this will charge ");
       }
     }
     else
     {
       document.writeln(" <br>Try Mail Trains ");       
     }
  }
  
}
let ashnil = new passengerfaredetails("Ashnil",24,"Male",7,323,"Rajdhani");
    ashnil.calculatefare();
let bhavesh = new passengerfaredetails("Bhavesh",25,"Male",34,1100,"Vande Bharat Express");
   bhavesh.calculatefare();
let chanki = new passengerfaredetails("Chanki",25,"Male",19,500," Delux ");
    chanki.calculatefare();

////////////////////////// HUMANS EMOTIONS CODES /////////////////////////////////////////////////////////////////////////

class payslip_archive
 {
     constructor(name,company,role,framework,location,gross)
   {
     this.employeename = name;
     this.organization = company;
     this.jobrole = role;
     this.framework = framework;
     this.location = location;
     this.grosssalary = gross;
   }
   calculatepayslip()
   {
      this.basic = (40 * this.grosssalary)/100;
      this.hra = (40 * this.basic)/100;
      this.emplpf = (12 * this.basic)/100;
   }
   showpayslip()
   {
     document.writeln("<br><br>Basic salary :"+this.basic+"<br>HRA :"+this.hra+"<br>Emplr PF :"+this.emplpf);
   }
 }
 let check1 = new payslip_archive("Chanki Mishra","Intimetec","Trainee","Angular","Bangalore",550000);
 check1.calculatepayslip();
 check1.showpayslip();
 
//////////////////////////////////// HUMAN EMOTIONS CODES //////////////////////////////////////////////////////////// 

class onlineshopping
{
  
  constructor(uname,pwd,mail,mobilenum,location)   
  {
    this.username = uname;
    this.password = pwd;
    this.emailid = mail;
    this.mobilenumber = mobilenum;
    this.location = location;
  }
  logincredentialscheck(logname,logpwd) 
  {
    this.loginname = logname;
    this.loginpwd = logpwd;
    if(this.loginname == this.username && this.loginpwd == this.password)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
  productdetails(brand,color,material,occassion,size,gender)
  {
    this.productbrand = brand;
    this.productcolor = color;
    this.fabric = material;
    this.occassion = occassion;
    this.size = size;
    this.gender = gender;
    document.writeln("<br><br>Product details saved successfully");   
  }
  shippingdetails(arrival,repolicy)
  {
     this.estimatedarrival = arrival;
     this.returnpolicy = repolicy;
     document.writeln("<br>Shipping details saved successfully");
  }
}
let qwe = new onlineshopping("Chanki Mishra","12345","chankimishra0202@gmail.com",9453637357,"Bangalore");
 var result  = qwe.logincredentialscheck("Chanki Mishra","12345");
     if(result == 1)
     {
      qwe.productdetails("scott inernational","black","cotton","casual","s","Men");
       qwe .shippingdetails("Estimated arrival 9 days","15 days return policy");
     }
     else
     {
       document.writeln("Invalid username or password");
     }
let rty = new onlineshopping("Akshat Shukla","987123","akshat@gmail.com",67289389,"Jaipur");
var see = rty.logincredentialscheck("Akshat Shukla","akshat@gmail.com");
if(see == 1)
{
  emilia.productdetails("scott inernational","black","cotton","casual","s","Men");
  emilia.shippingdetails("Estimated arrival 9 days","15 days return policy");
}
else
{
  document.writeln("Invalid username or password");
}

/////////////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////

class Emi
{
 
  constructor(amount,rate,duration)
  {
    this.loanamount = amount;
    this.rateofinterest = rate;
    this.duration = duration;
  }
  emicalculation()
  {
    this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.duration))/(((Math.pow(1+this.rateofinterest,this.duration))-1));
    document.writeln(this.emival);
  }
}
let paisa = new Emi(5000000,10.5,240);
    paisa.emicalculation();
    
//////////////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////////////////
class EMI
{
 
  constructor(loan,amount)
  {
     this.typeofloan = loan;
     this.loanamount = amount;
  }
  emicalculation()
  {
     if(this.typeofloan == "Home Loan")
     {
       this.rateofinterest = 10.5;
       this.loantenure = 240;
       this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1));
       return this.emival;
     } 
     else if(this.typeofloan == "Personal Loan")
     {
       this.rateofinterest = 17.5;
       this.loantenure = 36;
       this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1));
       return this.emival;
     }
     
     {
       return 0;
     }
  }
}
let MDH = new EMI("Home Loan",5000000);
   var emivalue = MDH.emicalculation();
   if(emivalue != 0)
   {
     document.writeln("<br><br>EMI :" + emivalue);
   }
   else
   {
     document.writeln("<br>No schemes available");
   }
let LG = new EMI("Personal Loan",5003400);
var emiamount = LG.emicalculation();
   if(emiamount != 0)
   {
     document.writeln("<br>EMI :" + emiamount);
   }
   else
   {
     document.writeln("<br>No schemes available");
   }

/////////////////////////////////// HUMAN EMOTIONS CODES //////////////////////////////////////////

function AccountCreation(FirstName,LastName,username ,pwd ,cpwd,Date,Gender, MobileNumber,Emailid)
 {
   var verify  = passwordverify(pwd,cpwd);      
   if(verify == 1)
   {
       document.writeln("<br><br>Account Created Successfully");
       ProfileDetails(FirstName,LastName,username,pwd,Gender,MobileNumber,Emailid);
   }             
   else
   {
       document.writeln("<br>Password and confirm password does not match");
   }  
 }
 function passwordverify(password, confirmpassword)
 {
     if(password == confirmpassword)
     {
         return 1;
     }
     else
     {
         return 0;
     }
 }
 function ProfileDetails(Fname, Lname,uname,password,gender,MobileNumber,EmailID)
 {
   document.writeln("first Name :" + Fname,"Last Name :"+Lname,"UserName"+ uname,"Password "+ password,"Mobile Number"+MobileNumber);
 }
 AccountCreation("venkatesh","d b","jvt","balu","balu","2-6-1986","Male",8897382992,"venkatesh.db@gmail.com")
 
///////////////////////////////////// HUMAN EMOTIONS CODES //////////////////////////////////////////////////////////

function creditcardverify(crenumber)
 {
    if(crenumber == 62627382738)
    {
        var utilization = 3;
        showoutstand(571.36,0);
        showlastpaymentmade(300,"11Jan2021");
        showcreditlimit(18000,17428.64);
       var balance = showlimit(3600,3600);
       document.writeln("<br><br>Available Cash" + balance);
    }
    else
    {
        document.writeln("<br>Invalid Credentials");
    }
 }
 function showoutstand(TotalOutstanding , unbilled )
 {  
    document.writeln("<br>Total Outstanding :"+ TotalOutstanding);   
    document.writeln("<br>Unbilled "+unbilled);
 }
 function showlastpaymentmade(lastamountmade, PaymentMadeOn)
 {
     document.writeln("<br>Lat Payment made on "+PaymentMadeOn)
     document.writeln("<br>Last Amount Made"+ lastamountmade);
 }
 function showcreditlimit(TotalCredit, Availcred)
 {
    if(TotalCredit > 20000)
    {
        document.writeln("<br>Credit Limit Exhausted");
    }
    else
    {
        var rem  = TotalCredit - 20000;
        document.writeln("<br>Left over Credits "+ rem);
    }
 }
    function showlimit(totalcash, cashavailable)
    {
         return cashavailable;
    }
 
 creditcardverify(62627382738);
 creditcardverify(112233);

///////////////////////////////// HUMAN EMOTIONS CODE ///////////////////////////////////////////////

class employee
{  
    constructor(ename,degr,birthdate,IT)
    {
       this.employeename = ename;
       this.highestdegree = degr;
       this.dateofbirth = birthdate;
       this.experience = IT;
    }
    displayemployeedetails()
    {
        document.writeln("<br><br>",this.employeename,this.highestdegree,this.experience);
    }
}
class contactemployee extends employee
{
   
    constructor(name ,degree ,dob ,it ,addres ,homenumber,phonenumber,email)
    {
        super(name,degree,dob,it);
        this.address = addres;
        this.residencenumber = homenumber;
        this.personalnumber = phonenumber;
        this.emailid = email;
    }
    displayemployeecontactdetails()
    {
        document.writeln("<br>",this.address,this.residencenumber,this.personalnumber,this.emailid);
    }
}
let serenity = new contactemployee("Jai venkateshwara","B.tech","2/6/1988","1 years","Jantha colony,dodakannali",98262871827,98822538299,"venkatesh@gmail.com");
    serenity.displayemployeedetails();
    serenity.displayemployeecontactdetails();
    
//////////////////////////////// HUMAN EMOTIONS CODES /////////////////////////////////////////////
    
class Employee
{
    constructor(empfname,emplname,empcomp,designation,contactnumb,location)
    {
      this.firstname = empfname;
      this.lastname = emplname;
      this.organization = empcomp;
      this.jobrole = designation;
      this.contactnumber = contactnumb;
      this.location = location;
    }
}
class employeepayslip extends Employee
{   
    constructor(fname,lname,comp,desig,contact,location,gross)
    {
      super(fname,lname,comp,desig,contact,location);
      this.grosssalary = gross;
    }
    calculatepayslip()
    {
         this.basic = (40 * this.grosssalary)/100;
         this.hra = (40 * this.basic)/100;
         this.emplpf = (12 * this.basic)/100;
    }
    displaypayslip()
    {
      document.writeln("<br><br>First Name : " + this.firstname ," Last Name : "+this.lastname +"Basic :"+this.basic +"HRA :"+this.hra +"EmplPF :"+ this.emplpf);
    }
}
let willow = new employeepayslip("Chanki","Mishra","Intimetec","Trainee",4537382829,"Bangalore",75000);
    willow.calculatepayslip();
    willow.displaypayslip();

////////////////////////////////// HUMAN EMOTIONS CODES /////////////////////////////////////

class EMPLOYEE
{   
    constructor(efname,elname,ecompany,elocation,designation)
    {
        this.employeefirstname = efname;
        this.employeelastname = elname;
        this.organization = ecompany;
        this.companylocation = elocation;
        this.jobrole = designation;
    }
}
class employe extends EMPLOYEE
{  
    constructor(fname,lname,company,location,desig,loan,rate,time)
    {
        super(fname,lname,company,location,desig);
        this.loanamount = loan;
        this.rateofinterest = rate;
        this.duration = time;
    }
    calculateemi()
    {
        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.duration))/(((Math.pow(1+this.rateofinterest,this.duration))-1));
    }
    displaydetails()
    {
        document.writeln("<br><br>First Name :"+this.employeefirstname+"Last Name :"+this.employeelastname,"EMI :"+this.emival);
    }
}
let everly = new employe("CHANKI","MISHRA","Intimetec","Bangalore","Trainee",5000000,10.5,240);
    everly.calculateemi();
    everly.displaydetails();

/////////////////////////////// HUMAN EMOTIONS CODES //////////////////////////////////////

class driverdetails
{
    constructor(lastname ,firstname ,middlename ,jobrole ,birthdate ,birthstate )
    {
      this.driverlastname = lastname;
      this.driverfirstname = firstname;
      this.drivermiddlename = middlename;
      this.jobprofile = jobrole;
      this.dateofbirth = birthdate;
      this.stateofbirth = birthstate;
    }
    showdriverdetails()
    {
      document.writeln("<br><br>Last Name : "+this.driverlastname+"First Name :"+this.driverfirstname+" Middle Name : "+this.drivermiddlename);
    }
}
class licensedetails extends driverdetails
{
   
    constructor(lname ,fname ,mname ,designation ,dob ,birth ,licnumber,licstate ,liccountry )
    {
    super(lname,fname,mname,designation,dob,birth);
    this.licensenumber = licnumber;
    this.licensestate = licstate;
    this.licensecountry = liccountry;

    }
    showlicensedetails()
    {
     document.writeln("<br><br>License Number :"+this.licensenumber+" License State :"+this.licensestate);
    }
}
let cora = new licensedetails("Kumar","Pavan","Bijjavaram","software engineer","12-07-1992","rajampet","ka502012632689","karnataka","India");
    cora.showdriverdetails();
    cora.showlicensedetails();

//////////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////////////

class onlineshop
{   
    constructor(fname ,username ,password ,confirmpassword ,email ,contactnumber ,location )
    {
      this.customerfirstname = fname;
      this.customerusername = username;
      this.signuppassword = password;
      this.signupconfirmpassword = confirmpassword;
      this.emailid = email;
      this.customercontactnumber = contactnumber;
      this.location = location;
    }
    signuppasswordvalidation()
    {
        if(this.signuppassword == this.signupconfirmpassword)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}
class shipping extends onlineshop
{
   
    constructor(name ,uname ,pwd ,cpwd ,email ,contactnumber ,location )
    {
       super(name,uname,pwd,cpwd,email,contactnumber,location);
    }
    login(loginuname , loginpwd )
    {
       this.loginusername = loginuname;
       this.loginpassword = loginpwd;
       if(this.loginpassword == this.signuppassword)
       {
           return 1;
       }
       else
       {
           return 0;
       }
    }
    productdetails(brand ,colour ,fabric ,occassion ,size,gender )
    {   
        this.productbrand = brand;
        this.productcolour = colour;
        this.material = fabric;
        this.occassion = occassion;
        this.productsize = size;
        this.gender = gender;
      
    }
    showproductdetails()
    {
        document.writeln("<br><br>Brand : "+this.productbrand+"Material : "+this.material+"Size : "+this.productsize);
    }
    shippingdetails(delivery ,returnpol )
    {
      this.expecteddelivery = delivery;
      this.returnpolicy = returnpol;
    }
    showshippingdetails()
    {
        document.writeln("<br>Expected Delivery :",this.expecteddelivery);
        document.writeln("<br>Return Policy :"+this.returnpolicy);
    }
}
let ok = new shipping("Chanki","chankimishra","hgfug","hgfug","chankimishra0202@gmail.com",9824367268,"Bangalore");
   var check = ok.signuppasswordvalidation();
   if(check == 1)
   {
       document.writeln("Signed Up successfully");
      var logincheck = ok.login("chankimishra","hgfug");
       if(logincheck == 1)
       {
           document.writeln("Log in successfully");
           ok.productdetails("scott inernational","black","cotton","casual","s","Men");
           ok.showproductdetails();
           ok.shippingdetails("Expected delivery 9 days","Return within 15 days of product delivery");
           ok.showshippingdetails();
       }
       else
       {
           console.log("Invalid password");
       }
   }
   else
   {
       console.log("Password and confirm password does not match");
   }
  
</script>
