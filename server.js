const express = require('express')
const dotenv = require("dotenv").config();
const backlog = 511
const cron = require('node-cron');
const { sendPayslipEmails}= require('./payslip')

const app = express()

const port = process.env.PORT || 3232

cron.schedule('*/1 * * * *', () => {
    console.log('Running the scheduled payslip email job...');
    sendPayslipEmails();
});

app.listen(port, backlog, () => {
    console.log(`server listening on  port ${port}`)
})

