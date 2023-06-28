import express from 'express';

export const router = express.Router()

const dataStore = [
  { id: 1, name: 'John Doe', age: 33 },
  { id: 2, name: 'Jane Doe', age: 22 },
];

//Post Method
router.post('/notes', (req: any, res: any) => {
    //res.send('Post API')
    //res.send({
    //    type: "POST",
    //    name: req.body.name,
    //    age: req.body.age 
    //});
    
    // Validate request: name must exist
    if (!req.body.name) {
       return res.status(400).send({
           message: "Please ensure you include the name in your post."
       });
    }
    const newUser = {
    id: dataStore.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  
  // For safety, don't allow pushes on the outside world wide web (github pages)
  //dataStore.push(newUser);

  res.status(201).json(newUser);
});

//Get all Method
router.get('/notes', (req: any, res: any) => {
    //res.send('/notes API')
    //res.send({
    //    type: "GET",
    //    id: "ALL IDs"
    //});
    res.json(dataStore);
});

//Get by ID Method
router.get('/notes/:id', (req: any, res: any) => {
    const id = req.params.id;
    console.log(`id: ${id}`);
    //console.log("db: ", db);
    //res.send('/notes ID API')
    //res.send({
    //    type: "GET",
    //    id: id
    //});
    const record = dataStore[id-1];
    console.log("user details: ", record);
    res.send(record);
});

//Update by ID Method
//router.patch('/update/:id', (req: any, res: any) => {
//    res.send('Update by ID API')
//})

//Delete by ID Method
//router.delete('/delete/:id', (req: any, res: any) => {
//    res.send('Delete by ID API')
//})

