const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000
app.get( '/' ,(req, res) => {
res.type( 'text/plain' )
res.send( 'hello bit software solution. it is simple server. get request' )
})
app.post( '/form', ( req, res ) => {
res.type( 'text/plain' )
res.send( 'post request')
})
app.use( ( req, res ) => {
res.type( 'text/plain' )
res.status( 404 )
res.send('404 Not')})
