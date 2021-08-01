var cron = require('node-cron');
const PORT = process.env.PORT || 5000

cron.schedule('* * * * * *', () => {
  console.log('running a task every minute');
});