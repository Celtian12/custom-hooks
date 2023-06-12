import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: false
    })

    const getFetch = async function() {
        const resp = await fetch(url);
        const data = await resp.json();
        setstate(
            {
                data,
                hasError: false,
                isLoading: false
            }
        )
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
  return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
