const https = require('https')

const options = {
    hostname: 'github.com',
    port: 443,
    path: '/i-marsh',
    method: 'GET'
  }

  // const req = https.request(options, res => {
  //   console.log(`statusCode: ${res.statusCode}`)
  
  //   res.on('data', d => {
  //     process.stdout.write(d)
  //   })
  // })
  
  // req.on('error', error => {
  //   console.error(error)
  // })
  
  // req.end()

  async function f() {

    let promise = new Promise((resolve, reject) => {
      console.log('in an asynchronous function right now');
      setTimeout(()=> resolve('done'),2000)
    })
    
    let result = await promise
    console.log(result)
    
    
  }
  
  f().then(console.log('back'))   

  console.log('end of code')  