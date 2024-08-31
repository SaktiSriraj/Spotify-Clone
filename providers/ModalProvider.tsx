"use client";

import { useEffect, useState } from "react";
import AuthModal from '../components/AuthModal';

const ModalProvider = () => {

    const [isMounted, setIsmounted] = useState(false);

    // To avoid rendering errors
    useEffect(() => {
        setIsmounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
        </>
    );
}

export default ModalProvider;