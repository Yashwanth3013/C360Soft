import React from 'react'
import Aws from '../../components/Insights/Aws'
import Footer from '../../Footer'
import Header1 from '../../Header1'
import Transform from '../../Transform'


const Awspage = () => {
    return (
        <div>
            <Header1 />
            <Aws />
            <Transform />
            <Footer />
            
        </div>
    )
}

export default Awspage
