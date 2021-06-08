import React from "react"
import { apiConstant } from "../../datacrud/datacrud"

export const BankContainer = (props) => {



    if (props.Banks.length == 0) {
        return (<div></div>)
    }
    return (

        props.Banks.map((item, key) => {
            return (
                <a key={key} href="#" style={{cursor:"pointer"}} className="col-2 banklist">
                    <img  style={{cursor:"pointer"}} src={ apiConstant + "/StaticF" +  item.logoUrl} style={{width:"100%"}}></img>
                </a>
            )

        })

    )
}