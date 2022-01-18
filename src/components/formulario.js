import React from "react";


const Formulario = props => {

    const {inputs, setInputs} = props; 

    const onChange = (e) => {
        setInputs({ 
            ...inputs,
            [e.target.name]: e.target.value
        });

    };

    return (
        <form className="container">
            <div className="row">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">First Name</span>
                            <input onChange={onChange} type="text" name="firstName" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Last Name</span>
                            <input onChange={onChange} type="text" name="lastName"  class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                            <input onChange={onChange} type="text" name="email" class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Password</span>
                            <input onChange={onChange} type="password" name="password"  class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Confirm Password</span>
                            <input onChange={onChange} type="password" name="confirmPassword" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        
                        {/* <h5>Tu información de formulario</h5> */}


                    </div>
                </div>


            </div>
 

        </form >


    );
}

export default Formulario;