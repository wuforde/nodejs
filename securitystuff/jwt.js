const jwt = require('jsonwebtoken');
const securityConfig = require('../../config/security_config.json');


jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1h' });


let token = jwt.sign({username:'wuforde'},securityConfig.securityToken,{ expiresIn: '5s' });

console.log(token);



let decoded = jwt.decode(token,securityConfig.securityToken);
let ticks = Math.floor(Date.now() / 1000);

console.log(ticks);

if(decoded.exp < ticks)
    console.error('expired');
else
    console.info('not expired');

console.log(decoded);

decoded = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoid3Vmb3JkZSIsImlhdCI6MTcyODAwNDA1MiwiZXhwIjoxNzI4MDA0MDU3fQ.-a83ZVUk5A_oGiUf0P9Xf4HOD1OdNJNg209VKNdbhOQ',securityConfig.securityToken);
ticks = Math.floor(Date.now() / 1000);

console.log(ticks);

if(decoded.exp < ticks)
    console.error('expired');
else
    console.info('not expired');

console.log(decoded);