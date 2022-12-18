import React, { useEffect, useState } from 'react';
import { BankContainer } from '../Components/containers/BankContainer';
import FindLoand2Page from '../Components/find-loan-pages/FindLoand2Page';
import FindLoanIndex from '../Components/find-loan-pages/FindLoanIndex';

function FindLoan(props) {

    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(true)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(0));

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

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
        setLoading(false)
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    


        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [props])

    return (
        <>{
            !loading &&
            <>
                {pageNumber === 1 &&
                    <FindLoanIndex Seo={props.Seo} Loans={props.Loans} Banks={props.Banks}></FindLoanIndex>

                }
                {pageNumber === 2 &&
                    <FindLoand2Page  Loans={props.Loans} Banks={props.Banks}></FindLoand2Page>

                }
            </>
        }
        <div className="row" style={{ justifyContent: "center", marginTop: 100 }}>
            {windowDimensions.width > 800 &&
                <BankContainer Banks={props.Banks}></BankContainer>
            }

        </div>
        </>
    );
}

export default FindLoan;