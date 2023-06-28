
# Simple node js server API

A simple node.js server with routes and an API 

# Initial setup

https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/

Instead of npm init I used the following (the first one creates package.json):

```bash
will@zen npm i typescript --save-dev

will@zen myserver % npx tsc --init

Created a new tsconfig.json with:
                                                                            TS
"compilerOptions": {
    "target": "es2016",
    "module": "es2015",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true  ,
    "moduleResolution":"node"
}

will@zen myserver %
```

Note: All commands below are executed from the following pwd:

```bash
will@zen myserver % pwd
/Users/will/dev/repos_github_mine/myserver
```

By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json  When input files are specified on the command line, tsconfig.json files are ignored.
See TypeScript Documentation: 
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson%5D

e.g.
```bash
npx tsc
```
and the .js files will appear in the ./build directory. Note: the directory
build will get created automatically the first time this command is run.

To compile a single ts file in the pwd, creating the js file in the pwd, issue:

```bash
npx tsc server.ts
```

# Running the node server

```bash
npm run dev 
```
or if you didn’t install Nodemon:

```bash
node server.js
```

# Testing with cURL (or Postman)

## cURL (use http not https)

### POST

will@zen myserver % curl -X POST \
    -H 'content-type:application/json' \
    -d '{"name":"Betsy Doe", "age":"7"}' \
    http://localhost:8000/notes 

{"id":5,"name":"Betsy Doe","age":"7"}%
will@zen myserver %

### GET

will@zen myserver % curl -X GET http://localhost:8000/notes 
[{"id":1,"name":"John Doe","age":33},{"id":2,"name":"Jane Doe","age":22},{"id":3,"name":"Will","age":"52"},{"id":4,"name":"Will","age":"52"},{"id":5,"name":"Betsy Doe","age":"7"}]%
will@zen myserver % 

will@zen myserver % curl -X GET http://localhost:8000/notes/3
{"id":3,"name":"Will","age":"52"}%
will@zen myserver % 

## Postman

Choose Body tab then select radio button * x-www-form-urlencoded
and just enter Key name with Value Will and Key age with value 52.



