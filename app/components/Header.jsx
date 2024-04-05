"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Header() {

    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogoutClick = async () => {
        try {
            await signOut(auth);
            window.alert("Successfully logged out");
            // Redirect to home page after logout
            router.push("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                <Link href={"/dashboard"} className="navbar-brand">Task Management</Link>
                    {isLoggedIn && (
                        <button className="btn btn-outline-success mx-2" onClick={handleLogoutClick}>Logout</button>
                    )}
                </div>
            </nav>
        </div>
    )
}