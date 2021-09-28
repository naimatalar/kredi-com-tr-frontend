import React, { useEffect, useState } from "react"
import Image from "react-image-webp";
import { apiurl, GetNoneToken } from "../../datacrud/datacrud"
import Rimage from "../Rimage";

export const PopulerBankCampaing = (props) => {
    const [data, setData] = useState(props.data);
    const [loading, setLoanding] = useState(true)
    useEffect(() => {
        start()

    }, [props.loading])
    const start = async () => {
        
        if (!props.loading) {
            if (props.data) {
                setData(props.data)
            } else {
                var d = await GetNoneToken("BankCampaigns/GetPopuler").then(x => { return x.data }).catch(x => { return false })
                setData(d)
            }
            setLoanding(false)
        } else {
            setLoanding(true)

        }

    }
    var HtmlToReactParser = require('html-to-react').Parser;

    return (
        <> {!loading &&




            <div className="row mb-5 mt-2 campaign-container-master">
                <div className="col-12 p-0 m-0">
                    <div style={{
                        padding: 7,
                        background: "linear-gradient(45deg, rgb(87 231 255 / 21%), transparent)"
                    }}>
                        <small className="campaign-icon"><Image style={{ filter: "hue-rotate(184deg)", width: 30 }}
                            webp={require("../../assets/images/campaigns.webp").default}
                            src={require("../../assets/images/campaigns.png").default}></Image> Sponsorlu Kampanya</small>

                    </div>


                </div>
                <div className="col-12 pt-0 mt-2 mb-3">
                    <b className="home-title mt-0 campaign-title" >  {data?.title}</b>
                </div>
                <div className="col-12 p-0 m-0 row">
                    <div className=" col-12 col-lg-4 col-lg-4 p-4">

                        <Rimage style={{ width: "95%" }} src={data?.imageUrl} />
                    </div>
                    <div className="col-12  col-md-8 col-lg-8"  >
                        {new HtmlToReactParser().parse(data?.content)}



                        <Rimage style={{
                            width: 240,
                            height: 55
                        }} src={data?.bankLogoUrl}></Rimage>
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

        }     {loading &&

            <div className="row mb-5 mt-2 campaign-container-master">
                <div className="col-12 p-0 m-0 mb-3">
                    <div style={{
                        padding: 19,
                        background: "linear-gradient(45deg, rgb(87 231 255 / 21%), transparent)"
                    }}>


                    </div>


                </div>
                <div className="col-12 pt-0 mt-2 mb-3 ppts mt-4">
                    <b className="home-title mt-0 campaign-title" >  </b>
                </div>
                <div className="col-12 p-0 m-0 row">
                    <div className=" col-12 col-lg-4 col-lg-4 p-3">

                        <div className="pptsv" ></div>
                    </div>
                    <div className="col-12  col-md-8 col-lg-8  pspt"  >
                        <div style={{ height: 100 }}>

                        </div>



                        <div style={{
                            width: 240,
                            height: 55
                        }} ></div>
                        <div style={{
                            fontSize: 18,
                            width: 150,
                            padding: 8,
                            textAlign: "center",
                            marginTop: 10,
                            float: "right",
                            color: "white",
                            display: "block",
                        }} ></div>
                    </div>

                </div>
                <div className="col-12 pt-0 mt-2 mb-3 ppts mt-2">
                    <b className="home-title mt-0 campaign-title" >  </b>
                </div>
                <div className="col-12 pt-0 mt-2 mb-3 ppts mt-3">
                    <b className="home-title mt-0 campaign-title" >  </b>
                </div>
            </div>
            }  </>
    )
}