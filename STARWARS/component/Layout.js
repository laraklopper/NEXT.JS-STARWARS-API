import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <div className='row'>
                    <div className='col'>
                        <h1 className='h1'>STAR WARS</h1>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <ul>
                            <li>
                                <Link href="/">
                                    <p className="linkText">HOME</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/data">
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
            h1{
                text-align: center;
            }
            `}
          </style>
        </div>
    );
};

export default Layout;
