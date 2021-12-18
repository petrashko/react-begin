// /* eslint-disable */

import { useCallback } from "react";

export const useHttp = () => {
    //
    const jsonRequest = useCallback(
        async (
            url,
            headers = {'Content-Type': 'application/json'},
            method = 'GET',
            body = null
        ) => {
            try {
                const response = await fetch(url, {method, headers, body});

                if (!response.ok) {
                    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
                }

                const data = await response.json();

                return data;
            }
            catch(err) {
                console.log(err);
                throw err;
            }
        },
        // eslint-disable-next-line
        []
    );

    return {jsonRequest};
}
