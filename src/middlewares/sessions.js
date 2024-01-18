import session from 'express-session'
import connectMongo from 'connect-mongo'
//import { MONGODB_CNX_STR} from '../config.js'
import { CNX_STR } from '../config.js'

const MongoStoreConstructor = connectMongo(session);
const store = new MongoStoreConstructor({
  mongoUrl: CNX_STR,
  ttl: 60 * 60 * 24, // 1d
});


export const sessions = session({
  store: store,
  secret: 'MySecret',
  resave: false,
  saveUninitialized: false,
});

/*
const store = connectMongo.create({
  //mongoUrl: MONGODB_CNX_STR,
  mongoUrl: CNX_STR,
  ttl: 60 * 60 * 24 // 1d
})

export const sessions = session({
  store,
  secret: 'MySecret',
  resave: false,
  saveUninitialized: false
})*/


