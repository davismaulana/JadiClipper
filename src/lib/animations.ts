import type { Variants } from 'framer-motion';

// "Happy" & "Funny" usually implies spring physics with some bounce/overshoot
export const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 1,
} as const;

export const softSpringTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
} as const;

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const popUpVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 25 }
    },
};

export const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    },
};

export const funnyWiggleVariants: Variants = {
    hidden: { rotate: -10, scale: 0.8, opacity: 0 },
    visible: {
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, damping: 10 } // Low damping = more wiggle
    },
    hover: {
        rotate: [0, -5, 5, -5, 5, 0],
        scale: 1.1,
        transition: { duration: 0.5 }
    }
};

export const floatVariants: Variants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

export const viewportConfig = {
    once: true,
    amount: 0.3,
    margin: "-100px"
} as const;
