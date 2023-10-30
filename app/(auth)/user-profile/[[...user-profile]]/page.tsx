"use client"
import React from 'react'
import { UserProfile, useUser } from "@clerk/nextjs";


const UserProfilePage = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    return (
        <div className="h-full flex items-center justify-center p-9">
            <UserProfile path="/user-profile" routing="path" />
        </div>
    )
}


export default UserProfilePage;