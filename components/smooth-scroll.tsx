"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
    children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                autoRaf: true,
                anchors: {
                    offset: -90,
                },
                lerp: 0.08,
                smoothWheel: true,
                wheelMultiplier: 0.9,
                touchMultiplier: 1,
                overscroll: true,
                respectReducedMotion: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}