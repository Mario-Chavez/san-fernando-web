import React, { useEffect } from "react";

const FacebookComponents = () => {
    useEffect(() => {
        // Carga el SDK de Facebook después de que se monte el componente
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: "v15.0", // Reemplaza con la versión deseada
            });
        };

        // Carga el SDK de Facebook de forma asíncrona
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);

    return (
        <>
            <div className="">
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/CASFLEALES"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="600"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                >
                    <blockquote
                        cite="https://www.facebook.com/CASFLEALES"
                        className="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/CASFLEALES">verde</a>
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default FacebookComponents;