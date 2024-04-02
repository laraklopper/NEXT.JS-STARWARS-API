import Head from "next/head";
import Link from "next/link";

export default ({children, title}) => (
    <div className="app">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className="app">
            <header id="header">
                <div className="row">
                    <div className="col">
                        <h1 className="h1">CITY API</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul id="navbar">
                            <li className="linkItem">
                                <Link href="/"><p>HOME</p></Link>
                            </li>
                            <li className="linkItem">
                                <Link href="/data"><p>DATA</p></Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </header>               
                {children}
         
        </div>
        <style jsx>{`
        body{
            background-color:cyan;
            display:grid;
            margin:0px;
            padding:0px
        }
        .app{
            background-color: olive;
            margin:0px;
            padding:0px;
            display:grid;
        }
        #header{
            background-color: OliveDrab;
                margin-top:10px;
                margin-bottom:10px
        }
        #navbar{
                display: flex;
                list-style-type: none;
                justify-content: center;
            }
            .linkItem{
                margin-left: 5px;
                margin-right: 5px;
                margin-top:10px;
                margin-bottom:10px
            }

        .content{
            background-color:cyan;
        }
        `}</style>
        <style global jsx>
            {`
             #header{
            background-color: OliveDrab;
                margin-top:10px;
                margin-bottom:10px;
                }
         .h1{
                text-align: center;
                
            }
        .h2{
            text-align: center;
        }
            `}

        </style>
    </div>

)