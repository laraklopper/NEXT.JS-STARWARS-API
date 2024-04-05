import Head from 'next/head';
import Link from 'next/link';
// import React from 'react';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header id='header'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='h1'>STAR WARS</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ul id='navbar'>
                            <li className='link'>
                                <Link href="/" className='pageLink'>
                                    <p className="linkText">HOME</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/data" className='pageLink'>
                                    <p className="linkText">DETAILS</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div>{children}</div>
          <style global jsx>
            {`
            body{
                background-color: #272b30;
                margin:0px;
                padding:0px;
                font-family: Helvetica, sans-serif;
            }
            .h1{
                text-align: center;
                font-family: Helvetica, sans-serif;
                font-weight: bold;
                color:yellow;
            }
            .h2{
                text-align: center;
                color: yellow;
                font-weight:bold;
                font-size:24px;
            }
            #header{
                background-color: #5C5C5C;
                padding:10px;
                margin-top: 10px;
                margin-bottom:10px;
                margin-left: 5px;
                margin-right: 5px;
            }
            #navbar{
                list-style-type: none;
                display: flex;
                justify-content: center;
            }
            .link:hover{
                background-color: #yellow;
            }
            .linkText{
                text-decoration: none;
                font-weight: bold;
                margin-left:5px;
                margin-right: 5px;
                margin-top:10px;
                margin-bottom: 10px;
                padding:5px;
                color:white
            }


            `}
          </style>
        </div>
    );
};

export default Layout;
