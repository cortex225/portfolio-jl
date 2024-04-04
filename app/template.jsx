"use client";

import useScrollProgress from "@/hooks/useScrollProgress";
import {motion} from "framer-motion";

//variants
const variants = {
    hidden: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
};

const Template = ({children}) => {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{type: "linear", delay: "0.2", duration: 0.4}}>
                {children}
            </motion.main>
            {/* completion bar */}
            <span
                style={{transform: `translateY(${completion - 100}%)`}}
                className="fixed z-50 top-0 right-0 bottom-0 w-1 bg-primary transition-all duration-700" />
        </>
    );
};

export default Template;
