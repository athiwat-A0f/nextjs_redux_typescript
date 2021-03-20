import React, { ReactElement,Component } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { wrapper } from "../redux";

interface Props {
 
}

function _app({Component,pageProps}: AppProps) {
  console.log("heyyy");
  return (
    <>
      <Component {...pageProps} />
    </>
  );

}

export default wrapper.withRedux(_app);


