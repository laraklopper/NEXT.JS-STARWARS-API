import React from 'react'
import Layout from '../components/Layout'


//data page
function data() {

    //=======JSX RENDERING==========

  return (
   <Layout>
    <div>
        <section className='section1'>
            <div className='row'>
                <div className='col'>
                    <button className="apiButton">
                        FETCH DATA
                    </button>
                </div>
            </div>
        </section>
    </div>
   </Layout>
  )
}

//Export default data page
export default data;