import React, { useEffect } from 'react';


function Loading(props) {
    useEffect(() => {

        start()
    }, [])
    function start() {
       var pat= window.location.pathname.toString().split("/");
       console.log(pat[pat.length-1])
    }

    return (
        <div className="container">
            <div className="col-12">
                <img style={{
                    width: "50%",
                    margin: " 0 auto"
                }} src={require("../assets/images/loading.gif").default}></img>

            </div>
        </div>
    );
}

export default Loading;