import express from 'express'
import data from './data.js'
const app = express()
app.get('/api/status', (req, res) => {
    res.send(data.status)
});
app.get('/',(req,res)=>{
    res.send('Hellow World')
})
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log('server conect', port)
})