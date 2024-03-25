/* In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'
//You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
import Head from 'next/head'


/* 
In the example belwo pay attention to these two important things: the props passpsed through to this component and how we style this components. 
====Props====
Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component.

====Style=====
In the example below we use CSS in JS styling. 
Definition of CSS in JS: According to React CSS-in-JS “refers to a pattern where CSS is composed using JavaScript instead of defined in external files.”

Next.js comes preloaded with a CSS in JS framework called styled-jsx. An example of how styled-js is used for writing style rules is shown in the example below
Notice in the example below that we use two different tags for style: <style jsx> and <style global jsx> tags. 
Rules written within <style jsx> tags have no effect on elements inside of a child component. 
If you need to change styles inside of a child component, use <style global jsx>.

Within the <style jsx> and <style global jsx> tags all style rules are written within a template string (`The key above the tag on most keyboards `). */
export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className="app">
            <header>
                <h1><Link href={{ pathname: '/' }}><a>gallery</a></Link></h1>
                <h2>Original art</h2> 
            </header>
            { children }
            <footer>
            
            </footer>
            <style global jsx>{`
            :root {
                --green:  #65C5D9; 
                --white: #F4F5F7;
                --light-gray: #EAEEEF;
            }
            @import url('https://fonts.googleapis.com/css?family=Oleo+Script');
            @import url('https://fonts.googleapis.com/css?family=Dancing+Script');
            @import url('https://fonts.googleapis.com/css?family=Changa:800');
            @media screen { * , *:after,*:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box;  box-sizing: border-box;	} }* {margin: 0; padding: 0;}
            html { font-size: 62.5%; height: 100%; } /*base sizee*/
            body { height: 100%;
                font-family: sans-serif;
              background: #AD0044; 
              color: #F7F7F7; 
              font-size: 1.4rem; } /* =14px all type sizes are relative to the base size*/
            .app{
                width: 80%;
                margin: auto;
                overflow: auto;

            }
        `}</style>
        <style jsx>{`
            header{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            header h1 a{
                font-family: 'Oleo Script', cursive;
                font-family: 'Changa', sans-serif;
                font-size: 25rem;
                color: #AD0044;
                text-shadow: #7F0D23 0px 0 40px;
                letter-spacing: -20px;
                display: inline-block;
                text-decoration: none;
            }
            h2{
                font-size: 3.5rem;
                color: white;
                text-shadow: none;
                letter-spacing: normal;
                font-weight: normal;
                font-family: 'Dancing Script', cursive;
                position: absolute;
                top: 50%;
                left: 50%;
            }
            footer {
                clear: both;
                display: inline-block;
                width: 100%;
                margin-top: 200px;
                text-align: center;
                padding: 4px 0;
            }
              
        `}</style>
        </div>
    </div>
)