
import { StarTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { creditCartRedirect } from '../Components/RedirectComponent';
import Rimage from '../Components/Rimage';
import { apiurl, GetNoneToken } from '../datacrud/datacrud';

const CreditCartCampaignModal = (props) => {
    const [data, setData] = useState()
    var HtmlToReactParser = require('html-to-react').Parser;

    useEffect(() => {
        start()
    }, [])

    const start = async () => {
        let prm = new URLSearchParams(props.location.search)
        var id = prm.get("src")


        setData(props.data)
    }

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="row col-12 mb-3 justify-content-center text-center">



                </div>
                <div className="col-12 col-md-8 col-lg-8 text-center row">
                    <div className="row justify-content-center col-12">
                        <h2><b>{data?.title}</b></h2>

                    </div>
                    <div className="row justify-content-center col-12">
                        <Rimage alt={data?.cartUrlName} src={ data?.imageUrl} style={{ width: 160, margin: "0 auto" }}></Rimage>

                    </div>
                    <div className="row justify-content-center col-12 mt-3">

                        {new HtmlToReactParser().parse(data?.content)}

                    </div>
           <div className="row justify-content-center col-12 mt-3">

                        {new HtmlToReactParser().parse(data?.creditCartDescription)}

                    </div>
                    
                </div>
                <div className="col-12 col-md-4 col-lg-4 ">

                    <div className="col-12 row mb-3">
                        <Rimage alt={data?.cartUrlName} src={data?.cartLogoUrl} style={{ width: "100%", margin: "0 auto" }}></Rimage>
                    </div>
                    <div className="col-12 row justify-content-center mt-2 mb-2">
                        <Rimage src={ data?.bankLogoUrlName} alt={data?.title} style={{ width: "80%" }}></Rimage>

                    </div>
                    <div className="col-12 row mb-3 row justify-content-center mt-3">
                        <div className=" col-12 col-md-6 col-lg-6 row mr-1" >
                            <a className="default-button col-12  text-center "
                                onClick={() => creditCartRedirect(null,
                                    data?.redirectUrl,
                                    data?.bankId,
                                    data?.creditCartId,
                                    {
                                        bankName: data?.bankName,
                                        creditCartName: data?.cartName
                                    })}

                                style={{
                                    fontSize: 15, color: "white",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    padding: "2px 8px 4px 10px"
                                }}>Başvur</a>
                        </div>
                        <div className=" col-12 col-md-6 col-lg-6 row">
                            <a className="default-button col-12  text-center "
                               href={"/" + data?.bankUrlName + "/" + data?.cartUrlName} 

                                style={{
                                    fontSize: 15, color: "white",
                                    background: "#585858",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    padding: "2px 8px 4px 10px"
                                }}>Detay</a>
                        </div>
                        <div className="col-12 row row justify-content-center mt-3">
                            <b style={{ color: "grey" }}>Yıllık Kullanım Ücreti</b>
                          
                        </div>
                        <div className="col-12 row mb-3 row justify-content-center ">
                            <b style={{ color: "black" }}>{data?.yearlyUsingAmount} Tl</b>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default CreditCartCampaingDetail;