import React from "react";
import NavBar from "./NavBar";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Profile = () => {
    const profiles = ['Stephen', 'Amira', 'Caroline', 'Clinton', 'Lucy','Ian','Damaris','Abel']
    const params = useParams()
    console.log(params)

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-md-5">
                    {
                        profiles.map((profile, index) => {
                            return (
                                <h1>
                                    <Link to={'/profile/'+ profile} className="mr-4 nav-link">{profile}</Link>
                                    <br/>
                                </h1>
                            )
                        })

                    }
                    <div className="col-md-6">
                    <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;