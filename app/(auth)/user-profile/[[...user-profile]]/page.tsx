"use client"
import React from 'react'
import { UserProfile } from "@clerk/nextjs";


const UserProfilePage = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <UserProfile path="/user-profile" routing="path" />
        </div>
    )
}


export default UserProfilePage;