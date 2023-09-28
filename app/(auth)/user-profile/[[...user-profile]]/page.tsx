import React from 'react'
import { UserProfile } from "@clerk/nextjs";


const UserProfilePage = () => {
    return (
        <div className="flex justify-center py-[7rem]">
            <UserProfile path="/user-profile" routing="path" />
        </div>
    )
}


export default UserProfilePage;