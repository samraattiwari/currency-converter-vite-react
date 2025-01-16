import { useEffect, useState } from "react";

const useCurrencyInfo = (baseCurrency) => {
    const [currencyInfo, setCurrencyInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(
                    `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCurrencyInfo(data.rates);
            } catch (error) {
                console.error("Failed to fetch currency data:", error);
                setError("Failed to fetch currency data. Please try again later.");
            }
        };

        if (baseCurrency) fetchCurrencyData();
    }, [baseCurrency]);

    return { currencyInfo, error };
};

export default useCurrencyInfo;
