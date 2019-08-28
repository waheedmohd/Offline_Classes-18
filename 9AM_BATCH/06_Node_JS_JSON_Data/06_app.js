const fs = require('fs');
const path = require('path');

let persons = [
    {id:1,first_name:"Artair",last_name:"Sackes",email:"asackes0@amazon.de",gender:"Male",ip_address:"199.147.189.59"},
    {id:2,first_name:"Hortensia",last_name:"Linford",email:"hlinford1@dmoz.org",gender:"Female",ip_address:"187.84.112.152"},
    {id:3,first_name:"Sasha",last_name:"Lewer",email:"slewer2@ucla.edu",gender:"Female",ip_address:"233.52.153.184"},
    {id:4,first_name:"Francklyn",last_name:"McAlpin",email:"fmcalpin3@drupal.org",gender:"Male",ip_address:"123.144.181.58"},
    {id:5,first_name:"Cordell",last_name:"Orring",email:"corring4@etsy.com",gender:"Male",ip_address:"62.56.30.248"}
];

// store array to json file
let stringPersons = JSON.stringify(persons);
fs.writeFile(path.join(__dirname , 'persons.json') , stringPersons , 'utf8' , (err) => {
    if(err) throw  err;
    console.log('data is saved');
});

// Read Data from JSON File
fs.readFile(path.join(__dirname, 'persons.json'),'utf8', (err,data) => {
    if(err) throw  err;
    let persons = JSON.parse(data);
    console.log(persons);
});

