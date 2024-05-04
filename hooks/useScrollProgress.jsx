import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrolHeight = document.body.scrollHeight - window.innerHeight;

            if (scrolHeight) {
                setCompletion(Number(currentProgress / scrolHeight)
                    .toFixed(2) * 100);
            }
        };

        // event
        window.addEventListener('scroll', updateScrollCompletion);
        // clear event
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
}

export default useScrollProgress;
