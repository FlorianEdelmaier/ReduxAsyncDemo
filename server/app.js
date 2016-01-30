import express from 'express';
import compress from 'compress';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';

const app = express();
//app.use(compress());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'async-redux', resave: true, saveUninitialized: true }));

app.use(express.static(__dirname + '/../client/dist'));

let port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Application is listening on port ${port} ...`);
});

export default app;
