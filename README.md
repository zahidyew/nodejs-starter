## Node.js Starter 

1. Initialize npm
```npm init```

2. Install express and other dependencies 
```npm i express dotenv node-fetch ...etc```

3. Install dev dependencies (nodemon to auto reload)
```npm i -D nodemon ...etc```

4. Alter scripts accordingly in package.json, eg:
```
   "scripts": {
      "start": "node index",
      "dev": "nodemon index",
      "deploy": "gh-pages -d myFolder"
   }  
```
*index refers to your entry point

5. Create index.js & write this in index.js as a start
```
   const express = require('express');
   const dotenv = require('dotenv');
   const fetch = require('node-fetch');

   // Load config
   dotenv.config({ path: './config/config.env' })

   const app = express();

   // route/endpoint for the server
   app.get('/test', (req, res) => {
      // do something here
      fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response => response.json())
         .then(json => res.json(json))
   });

   // define port for the server
   const PORT = process.env.PORT || 5000;

   app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
   });
```

6. Run the server
```npm run dev```

7. Test server using Postman at http://localhost:5000/test

8. Create .gitignore if you want to use git. <br>
Add node_modules & config to the list