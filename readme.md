Info:
    1.  This is an API can be used to apply CRUD operations on a products databse.
    2.  id, name and quantity are thre fields for a product.

    
Setup in local system for usage :
    1.  Install Mongo DB server.
    2.  Install node js.
    3.  Copy code in your local machine (there shouldn't be any change in directory structure in main folder).
    4.  use command  "node index.js" to start server and use postman or any other frontend framework to use API.


Usage:
    Get products :      http://localhost:8000/api/v1/products                                            req type: get
    Delete one :        http://localhost:8000/api/v1/products/product_id                                 req_type : delete
    Create new :        http://localhost:8000/api/v1/products/create                                     req_type: post

                            body{
                                name: product_name,
                                quantity : quantity
                            }
    update quantity :   http://localhost:8000/api/v1/products/product_id/updateQuantity?number=quantity  req_type:post