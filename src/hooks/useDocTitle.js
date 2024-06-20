import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - i-tunes`;
        } else {
            document.title = 'i-tunes | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
