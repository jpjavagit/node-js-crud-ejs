var mongoose = require('mongoose');

module.exports = function(app){

    var model = app.models.modelUser;
   
    app.route('/')
      .get(function(req, res){
         res.render('index',{
           item:{
             _id: '',
             firstname:'',
             lastname:'',
             email:'',
             passport:'',
             birthplace:''
            }
        }); 
      }); 

    app.route('/users')
      .get(function (req, res, next){
          model.find().exec()
            .then(function(docs){
                res.render('users', {users: docs});
            });
      });  
    
    app.route('/save')
      .post(function(req, res, next){

        if(req.body._id != null){
          model.findById(req.body._id, function(err, doc){
            if(err){
              console.log(err)
            }else{
              doc.firstname = req.body.firstname;
              doc.lastname = req.body.lastname;
              doc.birthplace = req.body.birthplace;
              doc.email = req.body.email;
              doc.passport = req.body.passport;
              doc.save();
              res.redirect('/users');
            }
          });

        }else{
          req.body._id = new mongoose.Types.ObjectId;
          var item = new model(req.body);
          item.save(function (error){
            res.redirect('/users');
          });
        }
      
      })   

    app.route('/user/:id')
      .get(function(req, res){
        var id = req.params.id;
        model.findById(id).exec()
          .then(function(doc){
            res.render('index',{item : doc});
          });
          
      }); 

    app.route('/remove/:id')
      .get(function(req, res){
        var id = req.params.id;
        model.findByIdAndRemove(id).exec();
        res.redirect('/users');
      });   

};
