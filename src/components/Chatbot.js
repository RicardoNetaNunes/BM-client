import React from 'react';
import { useEffect } from 'react';

function Chatbot() {

    useEffect(() => {
        (function(d, m){
            var kommunicateSettings = {"appId":"2c2fa4e26e2eeb25be8eda8abd0095b29","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default Chatbot
