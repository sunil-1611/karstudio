import Layout from "../components/Layout/Layout"

const Login = () => {
    return(
        <Layout>

        <div className="right-product-sidebar">
        <div className="inner-right-product Register-page">

          <div className="upload-tittle">
            <h1>Register to View Instant Offer </h1>
            <p>Already a member? <a href="">Sign In</a>.</p>
          </div>

          <div className="social-icon">
            <a href="#"><img src="./images/Facebook.png" alt="img" /></a>
            <a href="#"><img src="./images/Google.png" alt="img" /></a>
          </div>

          <div className="sign-up-box">
            <p>Or Sign Up With</p>
          </div>

          
            <div className="row">

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Enter Your Name</label> 
                      <input type="text" className="form-control" placeholder="Name" />                 
                  </div>
                </div>    
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Enter Your Email ID</label> 
                      <input type="text" className="form-control" placeholder="Email" />                 
                  </div>
                </div>  
                <div className="col-md-12">
                  <div className="form-group mb-1">
                    <label>Enter Your Password</label> 
                      <input type="password" className="form-control" placeholder="Password" />                 
                  </div>
                </div>    
                <div className="inputbox col-md-12">
                
                    <div className=" label-web checkbox-wrapper-1 checkbox-black form-group" style={{paddingLeft: '14px'}}>  

                      <input id="Remember1" className="substituted" type="checkbox" name="check" value="check" checked="" />  
                      <label className="" for="Remember1">By clicking "REGISTER" you are registered for KarKiosk and to our <u> Terms and Conditions</u></label>      
                     </div>
                    <div className=" label-mob checkbox-wrapper-1 checkbox-black form-group" style={{paddingLeft: '14px'}}>  

                      <input id="Remember1" className="substituted" type="checkbox" name="check" value="check" checked="" />  
                       <label  className="label-mob" for="Remember1">By clicking "REGISTER" you are registered for KarKiosk and to <p style={{paddingLeft: '21px'}}>our <u> Terms and Conditions</u></p></label>      
                    </div>
                               
                  
                </div>   

                <div className="form-button ">
                    <a href="#"className="submit">Register</a>
    
                </div>  
                          
                
            </div>				




        </div>
      </div>
      </Layout>
    )
}

export default Login