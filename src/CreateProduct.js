import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProductCreate(props) {
    const history = useHistory()
    
  const [ProductName, setProductname] = useState("");
  const [Price, setPrice] = useState("");
  const [isLoading,setLoading] = useState(false)

  let handleSubmit = async (e) => {
e.preventDefault()
    try {
        setLoading(true)
     await axios.post( "https://60efffc0f587af00179d3c19.mockapi.io/users",{ProductName,Price})
    
     setLoading(false)
     
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
    history.push("/product")
  }
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                value={ProductName}
                onChange={(e) => {
                  setProductname(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                value={Price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary mt-3 "
                  disabled={isLoading}
                />
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;
