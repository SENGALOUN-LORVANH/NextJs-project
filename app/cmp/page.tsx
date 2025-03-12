import React from 'react';
import Link from 'next/link';

const CampPage = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return (
        <div>
            <header>
                <h1>Camp Page</h1>
            </header>
            <main>

            </main>
        </div>
    );
};

export default CampPage;
