import React from "react";
import '../../App.css';

export default function signup(){
    return(
        <ul className='signup'>
             <div>
                <h1>Sign up here</h1>
                <form >

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <textarea type="password"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <input type="submit" value="Sign Up"
                            className="btn"></input>
                    </div>
                </form>
            </div>             
        </ul>
    );
}