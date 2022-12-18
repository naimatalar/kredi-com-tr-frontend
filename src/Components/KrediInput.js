
import * as React from 'react';
import CurrencyInput from 'react-currency-input';

export const KrediInput = (props) => {
    const [htmlVal,setHtmlVal]=React.useState()
    // const Rtn = () => 
    React.useEffect(() => {
         
        setHtmlVal(<CurrencyInput type="tel" {...props}
            onChange={(x) => { props.onChange(x.replace("₺", "").replace(/\./g, "")) }}
            value={props.value}

        />)
        
    }, [props.value])

    return <>{htmlVal}</>
};