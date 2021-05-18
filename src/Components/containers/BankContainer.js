import React from "react"

export const BankContainer = () => {
    const bankArray = [
        { url: require("../../assets/images/logo500/akbank.png").default },
        { url: require("../../assets/images/logo500/garanti.png").default },
        { url: require("../../assets/images/logo500/denizbank.png").default },
        { url: require("../../assets/images/logo500/halkbank.png").default },
        { url: require("../../assets/images/logo500/hsbc.png").default },
        { url: require("../../assets/images/logo500/ing.png").default },
        { url: require("../../assets/images/logo500/isbankasi.png").default },
        { url: require("../../assets/images/logo500/kuveytturk.png").default },
        { url: require("../../assets/images/logo500/qnbfinansbank.png").default },
        { url: require("../../assets/images/logo500/sekerbank.png").default },
        { url: require("../../assets/images/logo500/teb.png").default },
        { url: require("../../assets/images/logo500/yapikredi.png").default },
        { url: require("../../assets/images/logo500/ziraatbankasi.png").default },


    ]


    if (bankArray.length == 0) {
        return (<></>)
    }
    return (

        bankArray.map((item, index) => {
            return (
                <a key={index} href="#" className="col-2 banklist">
                    <img src={item.url} style={{width:"100%"}}></img>
                </a>
            )

        })

    )
}