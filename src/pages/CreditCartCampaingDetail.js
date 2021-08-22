import { StarTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { apiurl, GetNoneToken } from '../datacrud/datacrud';

const CreditCartCampaingDetail = (props) => {
    const [data, setData] = useState()
    useEffect(() => {
        start()
    }, [])

    const start = async () => {
        let prm = new URLSearchParams(props.location.search)
        var id = prm.get("src")
        let ccData = await GetNoneToken("CreditCartCampaigns/GetByCartUrlName?id=" + id).then(x => { return x.data }).catch(x => { return false })

        setData(ccData)
        console.log(ccData)

    }

    return (
        <div className="row">
            <div className="col-12 col-md-4 col-lg-4 row">
                <div className="col-12 row">
                    <img alt={data.cartName} src={apiurl + data.cartLogoUrl} style={{ width: "100%" }}></img>

                </div>
                <div className="col-12 row">
                    <img alt={data.cartUrlName} src={apiurl + data.bankUrlName} style={{ width: "60%" ,margin:"0 auto"}}></img>
                </div>



            </div>
            <div className="col-12 col-md-8 col-lg-8">

            </div>

        </div>
    );
}

export default CreditCartCampaingDetail;