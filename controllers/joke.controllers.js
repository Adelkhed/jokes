const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allDataJokes) => {
            res.json({jokes: allDataJokes})
        })
        .catch((err) => { 
            res.json({message :"Something went wrong",error:err})
        });
}

module.exports.findOneSingleJoke = (req,res) => { 
    Joke.fondOne({id:req.params.id})
    .then(oneSingleJoke => {
        res.json({joke:oneSingleJoke})
    })
    .catch((err) => { 
        res.json({message :"Something went wrong",error:err})
    });
}
module.exports.createNewJoke = (req,res) => { 

    Joke.create(req.body)
      .then(newlyCreateJoke => {
            res.json({joke:newlyCreateJoke})
        })
      .catch((err) => { 
            res.json({message :"Something went wrong",error:err})
        });
}

module.exports.updateExistingJoke = (req,res) => { 
    Joke.updateOneAndUpdate({id:req.params.id},req.body,{new:true,runValidators:true})
        .then(updatedJoke => { 
           res.json({joke:updatedJoke})

   })
        .catch((err) => { 
           res.json({message :"Something went wrong",error:err})
    });
}

module.exports.deleteAnExistingJoke = (req,res) => { 
    Joke.deleteOne({id:req.params.id})
      .then(result => {
            res.json({result:result})
        })
      .catch((err) => { 
            res.json({message :"Something went wrong",error:err})
        });
}

