import { useEffect } from 'react';

const useInjectedAssets = (assets) => {
    useEffect(() => {
        const elements = [];

        assets.forEach(asset => {
            let el;
            if (asset.endsWith('.css')) {
                el = document.createElement('link');
                el.rel = 'stylesheet';
                el.href = asset;
                document.head.appendChild(el);
            } else if (asset.endsWith('.js')) {
                el = document.createElement('script');
                el.src = asset;
                el.async = true;
                document.body.appendChild(el);
            }
            if (el) elements.push(el);
        });

        // Cleanup function: Removes the tags when the user leaves this layout
        return () => {
            elements.forEach(el => el.remove());
        };
    }, [assets]);
};

export default useInjectedAssets