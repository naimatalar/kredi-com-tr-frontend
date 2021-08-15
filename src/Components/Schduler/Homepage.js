import { useEffect } from "react"
import { GetNoneToken, PostNoneToken } from "../../datacrud/datacrud"


function Homepage(props) {

    useEffect(() => {
        start()
    },[])
    // const writeJsonFile = require('write-json-file');

    const start = async () => {
        var Bank = await GetNoneToken("Banks/GetAllBankSite").then(x => { return x.data }).catch(x => { return false })
        var loanType = await GetNoneToken("LoanTypes/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        var blogs = await GetNoneToken("Blogs/GetAlUrlName").then(x => { return x.data }).catch(x => { return false })
        var creditCarts = await GetNoneToken("CreditCarts/GetCreditCartName").then(x => { return x.data }).catch(x => { return false })
        var sysData=JSON.stringify({Bank:Bank,loanType:loanType,blogs:blogs,creditCarts:creditCarts})
        
        var data = await PostNoneToken("HomePageData/update",{data:sysData}).then(x => { return x.data }).catch(x => { return false })

    }


    return (<div>
        recorded
    </div>)

}

export default Homepage;