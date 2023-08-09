import { Inter } from 'next/font/google';
import React from 'react';

import Login from './login';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main>
            <Login />
        </main>
    );
}
