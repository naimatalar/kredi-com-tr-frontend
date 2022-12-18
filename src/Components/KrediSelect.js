import React, { useEffect, useState } from 'react';
import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';

// for default styles...
import 'react-responsive-select/dist/react-responsive-select.css';
function KrediSelect(props) {
    const [terms, setTerms] = useState([])
    const [refreshD, setRefreshD] = useState()

    useEffect(() => {

        let termsList = [];

        props.options?.map((item, key) => {
            termsList.push({ value: item.value || item, text: <b>{item.label || item.text || item}</b> })
        })
        setRefreshD([{ value: 0, text: "" }])
        setRefreshD(termsList)

        setTerms(termsList)

       
    }, [props.options,props.value])

    return <>

        {
            terms.length > 0 && <Select
                modalCloseButton={<ModalCloseButton />}
                options={terms}
                caretIcon={<CaretIcon />}
                prefix={props?.prefix}
                selectedValue={props?.value}
                onChange={props?.onChange}
                style={props.style}

            />
        }
        {
            !terms.length > 0 && <Select
                modalCloseButton={<ModalCloseButton />}
                options={terms}
                caretIcon={<CaretIcon />}
                prefix={props?.prefix}
                selectedValue={props?.value}
                onChange={props?.onChange}
                style={props.style}

            />
        }
    </>

}

export default KrediSelect;