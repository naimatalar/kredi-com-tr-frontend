import React, { useEffect } from 'react';


function Loading(props) {
    useEffect(() => {

        start()
    }, [])
    function start() {
        // setTimeout(() => {
            
        //     window.location.replace("/")
        // }, 3000);

    }

    return (
        <div className="row">
            <img style={{
                width: "50%",
                margin: " 0 auto"
            }} src={require("../assets/images/loading.gif").default}></img>
        </div>
    );
}

export default Loading;