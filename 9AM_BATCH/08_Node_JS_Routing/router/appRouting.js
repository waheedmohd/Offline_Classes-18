const fs = require('fs');
const path = require('path');

let mapRoutes = (url , response) => {

    // for home page
    if(url === '/'){
        fs.readFile(path.join(__dirname,'..' , 'views','index.html'),'utf8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    // for About page
    else if(url === '/about'){
        fs.readFile(path.join(__dirname,'..' , 'views','about.html'),'utf8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    // for Profile page
    else if(url === '/profile'){
        fs.readFile(path.join(__dirname,'..' , 'views','profile.html'),'utf8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    // for Services page
    else if(url === '/services'){
        fs.readFile(path.join(__dirname,'..' , 'views','services.html'),'utf8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    // for Contact page
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname,'..' , 'views','contact.html'),'utf8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    // for 404 page
    else{
        fs.readFile(path.join(__dirname,'..' , 'views','404.html'),'utf8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
};

module.exports = {
    mapRoutes
};