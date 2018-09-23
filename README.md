# Project & Portfolio 5
I took this opportunity to push myself and deliver more than required. Although it was a tough month I was able to finish most of the functionality and even though it does not contain an amazing style, I’m still proud of it. I would like to give special thanks to Brad Beltowski and Chris Tonucci, for helping me trouble shoot when I couldn't find an answer and to Stephen Grider for his amazing tutorials and diagrams that helped me understand what was happening behind the scene. I chose to do this project because I wanted to have a sense of what being a master full stack developer is. 

## Project name (Survey Fast)
Survey Fast is a full stack application that will allow the user to write survey questions, send them to a list of recipients and then record their feedback for future improvement on the company’s service or quality of their products. When you log in in Survey Fast you have a dashboard with all the surveys you’ve sent, from the most recent to the last survey the user has sent. Every time the user wishes to send a new survey, they will need to use 1 credit.  The user can buy 5 credits that will allow them to send 5 different surveys to as many recipients they want. 

### Project requirements
For this project, on the server side I used node.js and the express library to connect to the server. I used passport and passport Google OAuth Strategy to give my app the ability to login with Google. On the client side I used React.js for the interface, stripe API to be able to handle payments and finally sendgrid API to receive notifications and feedback from the users.  

### Credit card. Test stripe API (Payments)
        Any email would do!
        Credit card number:
        Visa: 4242 4242 4242 4242.
        Mastercard: 5555 5555 5555 4444.
        American Express: 3782 822463 10005.
        Exp date: any date in the future
        cvc number: any 3 digits would do.


### Getting Started
To test this application in the dev environment the user will need to create a file inside the config folder called dev.js and export from that file the following information: 

        
        googleClientID: '',
        googleClientSecret: '',
        mongoURI: '',
        cookieKey: '',
        stripePublishableKey: '',
        stripeSecretKey: '',
        sendGridKey: '',
        redirectDomain: 'http://localhost:3000'
        

You will need to:
- Generate credentials in Google and Google OAuth 2.0
- Create an account in mlab.com, generate a database with a administrator user
- Create a cookieKey that could be any type of random strings
- Create an account in stripe.com and generate credentials
- Create an account in sendgrid.com and change the email notification settings 

### Getting Started: 
> npm run dev

### Under the Hood
> Used Services for the project:

     - HEROKU:
     https://www.heroku.com/home
     - Mlab: 
     https://mlab.com/
     - Stripe:
     https://stripe.com/
     - Sendgrid:
     https://sendgrid.com
     https://app.sendgrid.com/settings/mail_settings
     - MaterializeCSS:
     https://materializecss.com/icons.html

> Used Libraries Modules and Frameworks for the project:

     - Express:
        npm install --save express
        https://github.com/expressjs/express

     - Passport:
        npm install --save passport 
        https://github.com/jaredhanson/passport-github

     - Passport Google OAuth Strategy
        npm install --save passport passport-google-oauth20 
        https://github.com/jaredhanson/passport-google-oauth2

     - Nodemon:
        npm install --save nodemon
        https://github.com/remy/nodemon

     - Mongoose
        npm install --save mongoose
        https://github.com/Automattic/mongoose

     - Cookie-Session
        npm install --save cookie-session
        https://github.com/expressjs/cookie-session

     - Create-React-App
        sudo npm install -g create-react-app
        https://github.com/facebook/create-react-app

     - Create-React-App client(name of the folder containing the app)
        create-react-app client
    
     - Lodash
        comes with create react app
        https://github.com/lodash/lodash
     
     - WithRouter
        https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md

     - Currently:
        npm install --save concurrently
        https://github.com/kimmobrunfeldt/concurrently
        
     - Redux:
        npm install --save redux
        https://github.com/reduxjs/redux

     - React-Redux
        npm install --save react-redux
        https://github.com/reduxjs/react-redux

     - React-Router-Dom
        npm install --save react-router-dom
        https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

     - Materialize
        npm install --save materialize-css
        https://github.com/Dogfalo/materialize

     - Axios
        npm install --save axios
        https://github.com/axios/axios 

     - Redux-Thunk
        npm install --save redux-thunk
        https://github.com/reduxjs/redux-thunk

     - React-Stripe-Checkout
        npm install --save react-stripe-checkout
        https://github.com/azmenak/react-stripe-checkout

     - Stripe
        npm install --save stripe
        https://stripe.com/docs/api/node#create_charge

     - Body-Parser
        npm install --save body-parser
        https://www.npmjs.com/package/body-parser
    
     - SendGrid:
        npm install --save sendgrid
        https://sendgrid.com
    
     - Redux-Form
        npm install --save redux-form
        https://github.com/erikras/redux-form
        https://redux-form.com/7.4.2/

     - Localtunnel
        npm install -save localtunnel
        https://localtunnel.github.io/www/

     - Lodash path-parser
        npm install --save lodash path-parser
        https://github.com/troch/path-parser

### Extra Info

- Heroku URL: https://stormy-headland-31614.herokuapp.com
  Customizing the build process:
- devDependencies:
  https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process
 
- Git Projects URL: https://github.com/araqueheinz/AraqueHeinz_WD5/projects/

- Error Protocol Reference: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html 

### REMINDER:

To Commit to HEROKU: git push heroku master

To Commit to GITHUB: git push -u origin master

### Special Thanks
I would like to give special thanks to Brad Beltowski and Chris Tonucci, for helping me trouble shoot when I couldn't find an answer and to Stephen Grider for his amazing React, Redux and node tutorials and diagrams that helped me understand what was happening behind the scene.

#### Try my app:
Heroku Url: https://stormy-headland-31614.herokuapp.com


 