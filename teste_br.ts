import { Application, Request, Response } from 'express';
import express from 'express';
const app: Application = express();
const port: number = 3000

//import { v4 as uuidv4 } from 'uuid'

//import postgres from 'postgres'
const postgres = require('postgres')

const sql = postgres('postgres://username:password@host:port/database', {
  host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
  port                 : 5432,          // Postgres server port[s]
  database             : 'hehe',            // Name of database to connect to
  username             : 'postgres',            // Username of database user
  password             : 'postgres',            // Password of database user
})

const retorno = async () =>  await sql`SELECT * FROM HOSPEDAGEM`

console.log(retorno)
