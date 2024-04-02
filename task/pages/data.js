import React from 'react'
import Layout from '../components/Layout'
import { fetchData } from "../utilityFunctions/api";

export default function data({data}) {
  return (
    <Layout>
      <section className='section'>
        <div className='content'>
          <h1 className='h1'>DATA</h1>
          <div className='dataContainer'>
            <ul className='dataList'>
              {data.map(item => (
                <li className="listItem" key={item.id}>
                  <div className='data'>
                    <p>{item.name}</p>
                   
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
       <style jsx>
        {`
        .dataList{
           display:flex;
          flex-direction: wrap;
          list-style-type:none;
          border: 2px;
          border-style: solid;
          border-color: black;
        }
        .data{
          margin:10px;
        }
        .listItem {
          width:33.33%;
          // box-sizing: border-box
         margin-bottom: 10px; 
}
        `}


       </style>
    </Layout>
  )  
}

export async function getStaticProps() {
  const data = await fetchData()
  return {
    props: {
      data
    }
  };
}