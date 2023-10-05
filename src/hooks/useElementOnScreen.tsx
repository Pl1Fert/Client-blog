import { RefObject, useEffect, useRef, useState } from "react";

interface Options {
    threshold: number;
    reappear?: boolean;
}

export const useElementOnScreen = (options: Options): [RefObject<HTMLDivElement>, boolean] => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const makeAppear = (entries: any): void => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    };

    const makeAppearRepeating = (entries: any): void => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const callBack = options.reappear ? makeAppearRepeating : makeAppear;

    useEffect(() => {
        const containerRefCurrent = containerRef.current;
        const observer = new IntersectionObserver(callBack, options);

        if (containerRefCurrent) {
            observer.observe(containerRefCurrent);
        }

        return () => {
            if (containerRefCurrent) {
                observer.unobserve(containerRefCurrent);
            }
        };
    }, [containerRef, options, callBack]);

    return [containerRef, isVisible];
};
