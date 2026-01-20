import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // Mock User State
    // Set to { displayName: "Test User", email: "test@example.com", photoURL: "" } to test logged-in state
    // Set to null to test logged-out state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Mock Functions
    const createUser = (email, password) => {
        console.log("Mock Create User:", email, password);
        return Promise.resolve({ user: { email } });
    }

    const signInUser = (email, password) => {
        console.log("Mock Sign In:", email);
        // Simulate login
        setUser({
            displayName: "Demo User",
            email: email,
            photoURL: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            uid: "mock-uid-123"
        });
        return Promise.resolve({ user: { email } });
    }

    const signInWithGoogle = () => {
        console.log("Mock Google Sign In");
        setUser({
            displayName: "Google User",
            email: "google@example.com",
            photoURL: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            uid: "mock-uid-google"
        });
        return Promise.resolve({ user: { email: "google@example.com" } });
    }

    const signOutUser = () => {
        console.log("Mock Sign Out");
        setUser(null);
        return Promise.resolve();
    }

    const updateUserProfile = (name, photo) => {
        console.log("Mock Update Profile:", name, photo);
        if (user) {
            setUser({ ...user, displayName: name, photoURL: photo });
        }
        return Promise.resolve();
    }

    const updateUserEmail = (email) => {
        console.log("Mock Update Email:", email);
        return Promise.resolve();
    }

    const updateUserPassword = (newPassword) => {
        console.log("Mock Update Password");
        return Promise.resolve();
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
        updateUserEmail,
        updateUserPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
