/* requiring Schema to read or write data*/

let Products = require('../../models/ProductsSchema');



/* Function to create a new entry in database from body */

module.exports.createNew =async function(req, res){
    try{
        /* awaiting for changes in DB */
        let newProduct = await Products.create({
            name: req.body.name,
            quantity: req.body.quantity
        });
        /* Returning success response */
        return res.status(200).json({
            data: {
                product: {
                  name: newProduct.name,
                  quantity: newProduct.quantity
                },
                message:"Product created successfully"
            }  
        })

    }catch(err){
        /*Returning failed response */
        return res.status(500).json({
            data: {
                message:"Product creation failed "+err
            }  
        }) 
    }
    
}


/* Function to get all products available in database */

module.exports.getProducts =async function(req, res){
    try{
        /* awaiting to read data from DB */
        let products = await Products.find({}).select('name quantity').exec();
        /* Returning success response */
        res.status(200).json({
        Products:products,
        message: "Received all products"
    });
    }catch(err){
        /*Returning failed response */
        res.status(500).json({
        Products:[],
        message: "Error getting products from database "
    });
    }
    
}

/* Function to delete one object by id */

module.exports.deleteOne = async function(req, res){
    console.log(req.params.id);
    try{
        /* awaiting for changes in DB */
        await Products.findByIdAndDelete(req.params.id);
        /* Returning success response */
        res.status(200).json({
        data: {
            message: "product deleted"
        }   
    });
    }catch(err){
        /*Returning failed response */
        res.status(500).json({
            data: {
                message: "Unable to delete products"
            }   
        });
    }
    

}
/* Function to update quantity of any object */

module.exports.updateQuantity =async function(req, res){
    console.log(req.query);
    try{
        /* awaiting for changes in DB */
        await Products.findByIdAndUpdate(req.params.id,{quantity:req.query.number});
        let thisProduct = await Products.findById(req.params.id).select('name quantity').exec();
        /* Returning success response */
        res.status(200).json({
            data: {
                product: thisProduct,
                message: "updated successfully"
              }
        });
    }catch(err){
        /*Returning failed response */
        res.status(500).json({
            data: {
                product: thisProduct,
                message: "Error updatng values"
              }
        });
    }
    
}