import React, { useEffect, useState } from "react"
import { apiurl, GetNoneToken } from "../../datacrud/datacrud"

export const PopulerBankCampaing = () => {
    const [data, setData] = useState();
    useEffect(() => {
        start()

    }, [])
    const start = async () => {
        var d = await GetNoneToken("BankCampaigns/GetPopuler").then(x => { return x.data }).catch(x => { return false })
        setData(d)
    }
    var HtmlToReactParser = require('html-to-react').Parser;

    return (
        <> {data &&




            <div className="row mb-5 mt-2 campaign-container-master">
                <div className="col-12 p-0 m-0">
                    <div style={{
                        padding: 7,
                        background: "linear-gradient(45deg, rgb(87 231 255 / 21%), transparent)"
                    }}>
                        <small className="campaign-icon"><img style={{ filter: "hue-rotate(184deg)", width: 30 }} src={require("../../assets/images/campaigns.png").default}></img> Sponsorlu Kampanya</small>

                    </div>


                </div>
                <div className="col-12 pt-0 mt-2 mb-3">
                    <b className="home-title mt-0 campaign-title" >  {data?.title}</b>
                </div>
                <div className="col-12 p-0 m-0 row">
                    <div className=" col-12 col-lg-4 col-lg-4 p-4">

                        <img style={{ width: "95%" }} src={apiurl + data?.imageUrl} />
                    </div>
                    <div className="col-12  col-md-8 col-lg-8"  >
                        {new HtmlToReactParser().parse(data?.content)}



                        <img style={{
                            width: 240,

                        }} src={apiurl + data?.bankLogoUrl}></img>
                        <a style={{
                            fontSize: 18,
                            width: 150,
                            padding: 8,
                            textAlign: "center",
                            marginTop: 10,
                            float: "right",
                            color: "white",
                            display: "block",
                        }} className="default-button" href={data?.outerUrl}>Hemen Başvur</a>
                    </div>

                </div>
            </div>
        }  </>
    )
}