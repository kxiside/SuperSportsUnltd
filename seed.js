require('dotenv').config()
require('./config/database')

const Super = require('./models/super')

const data = require('./data')


(async function() {
    // Save the promises (or call right in the array if feeling frisky)
    const p1 = Super.deleteMany({});
   
    
    // Promise.all will return a single promise that resolves
    // only after all of the array's promises resolve
    let results = await Promise.all([p1]);
    // results will be an array of result objects!
    console.log(results);
  
    // This time, provide the array of promises in-line
    results = await Promise.all([
      Super.create(data.supers),
    ]);
    console.log('Created supers:', results[0]);
  
    // Associate Mark Hamill with Star Wars - A New Hope
    results = await Promise.all([
      // Using regular expressions allows a partial match
      Movie.findOne({ make: /Kawa / })
    ]);
    // One day we'll destructure results like this:
    // const [starWars, mark] = results;
    const kawasaki = results[0];
    
    kawasaki.model.push(h2r_id);
    await kawasaki.save();
    console.log('asdf', kawasaki);
  
    // Lastly, use process.exit() to "cleanly" shut down the Node program
    process.exit();
  })();
  