import React from "react";
import { useNavigate } from "react-router-dom";


const Users = () => {
    const navigate = useNavigate();
    const submithandler = (e) =>{
        e.preventDefault();
        console.log("from submitted")
        // code to submit data to database
        navigate("/")
    }

    return <div>
        <h1 className="text-2xl text-blue-300">Users</h1>
        <form onSubmit={submithandler}>
            <input className="border" type="text" />
            <br />
            <br />
            <button className="bg-red-300 py-2 px-4">submit</button>
        </form>
    </div>;
    
};

export default Users;
