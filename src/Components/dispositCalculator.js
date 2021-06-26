import React from "react"

 const dispositCalculator = ( tutar,  faizOrani,  vade,  DovizMi=false) => {
    let d = vade
        let stopaj = 0;
        let totalMount = d / 30;
debugger
        if (totalMount <= 6)
        {
            if (DovizMi)
            {
                stopaj = 20;
            }
            else
            {
                //stopaj = 15;
                stopaj = 5;

            }
        }
        if (totalMount >= 7 && totalMount == 12)
        {
            if (DovizMi)
            {
                stopaj = 20;
            }
            else
            {
                //stopaj = 12;
                stopaj = 3;
            }

        }
        if (totalMount > 12)
        {
            if (DovizMi)
            {
                stopaj = 18;

            }
            else
            {
                //stopaj = 10;
                stopaj = 1;
            }

        }

        var ss = ((tutar * vade * faizOrani) / 365) / 100;
        var sonuc = ss * stopaj / 100;
        
        return  {netResult:ss-sonuc };
    
}
export default dispositCalculator;