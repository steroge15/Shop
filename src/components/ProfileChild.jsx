import React from "react";
import { useParams } from "react-router-dom";

const ProfileChild = () => {
    // Logic goes here
    const params = useParams()

    return (
        <>
        <h1>Profile {params.profileId}</h1>
        </>
    )
}

export default ProfileChild