import type React from "react";
import Script from "next/script";

export default function NestedLayout({
                                         children,
                                     }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Script id="marquiz-init" strategy="beforeInteractive">
                {`
            (function(w, d, s, o){
  var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
    if (document.readyState !== 'loading') Marquiz.init(o);
    else document.addEventListener("DOMContentLoaded", function() {
      Marquiz.init(o);
    });
  };
  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, 'script', {
    host: '//quiz.marquiz.ru',
    region: 'ru',
    id: '68c13bcf07f07f0019f1efa2',
    autoOpen: false,
    autoOpenFreq: 'once',
    openOnExit: false,
    disableOnMobile: false
  }
);

          `}
            </Script>

            <Script id="marquiz-widget" strategy="afterInteractive">
                {`
            (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '68c13bcf07f07f0019f1efa2', position: 'left', delay: 10, autoOpen: 10, disableOnMobile: false, disableIfClosed: false, gradientEnabled: true, gradientColor: '#303537', gradientIntensity: 40, hiddenArrowOnMobile: false})
          `}
            </Script>
            {children}
        </>
    )
}