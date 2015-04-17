# Fun node project

Tutorial: http://blog.modulus.io/nodejs-and-express-create-rest-api
Node and MySQL: https://www.npmjs.com/package/mysql#introduction

## Structure

- Only work on `dev`

- Push to `dev`

- `master` is only for pull requests from `dev` and deploying to the <b>live production server</b>

## To install

0. Make sure you have node installed 
1. Clone this repo
3. In the config folder, copy the `template.json` file and re-name your copy to `local.json`
4. Insert the secret credentials that only you know
5. Run `npm install`

## To run

1. `node app.js`
2. If nothing happens then it is running
3. In your browser go to `localhost:[PORT NUMBER]` [PORT NUMBER] being whatever port you specify
4. Check your terminal and you should see a success or failure message