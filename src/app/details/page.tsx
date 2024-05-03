// app/details.tsx
import React from 'react';
import Head from 'next/head';

export default function Details() {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Get in touch with us!" />
            </Head>
            <h1>Contact Us</h1>
            <p>If you need help, please email us at support@eventwithfriends.com.</p>
        </div>
    );
}
