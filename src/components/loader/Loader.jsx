'use client';
import './Loader.css';
import { useState, useEffect } from 'react';

export default function PageLoader({ children }) {
    const [done, setDone] = useState(false);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const finish = () => {
            setTimeout(() => {
                setExit(true);
                setTimeout(() => setDone(true), 600);
            }, 1200);
        };

        if (document.readyState === 'complete') finish();
        else window.addEventListener('load', finish, { once: true });
    }, []);

    if (done) return children;

    return (
        <>
            <div className={`pl${exit ? ' pl--out' : ''}`}>
                <div className="pl__box">
                    {/* Animated logo mark */}
                    <div className="pl__mark">
                        <span className="pl__mark-line pl__mark-line--h" />
                        <span className="pl__mark-line pl__mark-line--v" />
                        <span className="pl__mark-dot" />
                    </div>

                    {/* Sliding text lines */}
                    <div className="pl__lines">
                        <div className="pl__line pl__line--1" />
                        <div className="pl__line pl__line--2" />
                        <div className="pl__line pl__line--3" />
                    </div>
                </div>
            </div>
        </>
    );
}
