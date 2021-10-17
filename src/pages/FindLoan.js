import React, { useEffect, useState } from 'react';
import FindLoand2Page from '../Components/find-loan-pages/FindLoand2Page';
import FindLoanIndex from '../Components/find-loan-pages/FindLoanIndex';
import Seo from '../Components/Seo';

function FindLoan(props) {

    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        let pgNumber = 0
        for (let index = 0; index < window.location.pathname.split("/").length; index++) {
            const e = window.location.pathname.split("/")[index];
            if (e !== "") {
                pgNumber = pgNumber + 1
            }
        }
        if (pgNumber > 1) {
            setPageNumber(pgNumber)
        }

    }, [props])

    return (
        <>
            {pageNumber === 1 &&
                <FindLoanIndex Banks={props.Banks}></FindLoanIndex>

            }
            {pageNumber === 2 &&
                <FindLoand2Page Banks={props.Banks}></FindLoand2Page>

            }
        </>
    );
}

export default FindLoan;