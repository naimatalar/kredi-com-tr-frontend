import React, { useEffect, useState } from "react"
import CurrencyInput from "react-currency-input"
export const DispositMatrixContainer = (props) => {
    useEffect(() => {
        var selectedData = props.selectedData
        var flip = true
        setInterval(() => {
            try {
                if (flip) {
                    document.getElementsByClassName("selectedval")[0]?.classList.add("jj-flp")
                    flip = false
                } else {
                    document.getElementsByClassName("selectedval")[0]?.classList.remove("jj-flp")
                    flip = true
                }
            } catch (error) {

            }

        }, 600)
        if (props.data) {
            createMatrix()
        }

    }, [props.data])
    const [matrixData, setMatrixData] = useState([])
    const createMatrix = () => {
        let data = props.data;
        let amount = ["Gün"]
        let term = []
        let MatrixTable = { header: [], value: [] }
        for (const item of data.dispositRates) {
            if (amount.filter(x => { return x == (item.minAmount + "-" + item.maxAmount) }).length == 0) {
                amount.push(item.minAmount + "-" + item.maxAmount)
            }
        }
        for (const item of data.dispositRates) {
            if (term.filter(x => { return x == (item.minTerm + "-" + item.maxTerm) }).length == 0) {
                term.push(item.minTerm + "-" + item.maxTerm)
            }
        }

        let mmVal = []
        for (const item of term) {
            let val = [item]
            for (const jitem of amount) {

                var d = data.dispositRates.find(x => { return (x.minAmount + "-" + x.maxAmount) == jitem && (x.minTerm + "-" + x.maxTerm) == item })

                if (d != undefined) {
                    val.push(d?.rate)

                }
            }
            mmVal.push(val)
        }
        MatrixTable.header = amount;
        MatrixTable.value = mmVal;

        setMatrixData(MatrixTable)

    }
    var Headers = matrixData?.header?.map((item, key) => {

        return (
            <div key={key}>
                {key == 0 &&
                    <div  className="div-table-col bg-0t" style={{ width: "10%" }}>
                        {item}
                    </div>

                }
                {key != 0 &&
                    <div className="div-table-col" style={{ width: (90 / (matrixData?.header.length - 1)) + "%" }}>
                        <CurrencyInput inputmode="numeric" style={{
                            padding: 0,
                            border: "none",
                            display: "inline",
                            float: "left",
                            background: "none",
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                            className="col-5"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            disabled
                            prefix={""}
                            value={item.split("-")[0]} />
                        <div style={{ float: "left", display: "block" }}>- </div>
                        <CurrencyInput inputmode="numeric" style={{
                            padding: 0,
                            border: "none",
                            display: "inline",
                            float: "left",
                            background: "none",
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                            className="col-5"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            disabled
                            prefix={""}
                            value={item.split("-")[1]} />
                    </div>
                }
            </div>
        )

    })


    return (
        <>

            <div className="div-table disposit-table ddr" >
                <div className="div-table-row div-table-header ">
                    {

                        Headers
                    }



                </div>
                {
                    matrixData?.value?.map((item, tkey) => {
                        var dd = props.selectedData;
                        var selectedTerm = false;
                        var isSelected = false
                        var maxAmount = 0;
                        var minAmount = 0;
                        return (
                            <div key={tkey} className="div-table-row" >
                                {

                                    item.map((jitem, jkey) => {

                                        if (jkey != 0) {
                                            var amountr = matrixData?.header[jkey].split("-")
                                            minAmount = parseInt(amountr[0])
                                            maxAmount = parseInt(amountr[1])

                                        }

                                        var terms = item[0].split("-")
                                        var minTerms = parseInt(terms[0]);
                                        var maxTerms = parseInt(terms[1]);
                                        if (maxTerms >= dd.term && minTerms <= dd.term) {
                                            selectedTerm = true;
                                        } else {
                                            selectedTerm = false
                                        }


                                        if (selectedTerm) {

                                            if (dd.rate == parseFloat(jitem) && maxAmount >= dd.amount && minAmount <= dd.amount) {
                                                isSelected = true;
                                            } else {
                                                isSelected = false;

                                            }
                                        }

                                        if (jitem == 0) {
                                            jitem = "-"
                                        }
                                        if (jkey == 0) {


                                            return (
                                                <div key={jkey + 2} className="div-table-col text-center bg-0t" style={{ width: "10%" }}>
                                                    {jitem}
                                                </div>
                                            )
                                        } else {

                                            return (
                                                <div key={jkey + 9} className={"div-table-col text-center " + (isSelected ? "selectedval" : "")} style={{ width: (90 / (matrixData?.header.length - 1)) + "%" }}>
                                                    {jitem}
                                                </div>
                                            )
                                        }



                                    })
                                }

                            </div>

                        )
                    })
                }
            </div>
        </>
    )


}