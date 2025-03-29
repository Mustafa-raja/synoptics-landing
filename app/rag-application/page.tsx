'use client'

import RagHero from "./sections/hero";
import Features from "./sections/features";
import Ideas from "./sections/ideas";

export default function RagApplication() {
    return (
        <main className="w-full">
            <RagHero />
            <Features />
            <Ideas />
        </main>
    );
}
 