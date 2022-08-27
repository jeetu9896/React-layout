import React from 'react'
import Headding from './Headding'
import Listitem from './Listitem'

const Card = () => {
    const data = [{
        title: "Mobile Operating System",
        list: ["Android", "Blackberry", "iPhone", "Windows Phone"]

    },
    {
        title: "Mobile Manufactures",
        list: ["Samsung", "HTC", "Micromax", "Apple"]
    }]
    return (<div>
        {
            data.map((item,index) => {

                return <div key={index}>

                <Headding title={item.title} />
                <Listitem list= {item.list} />
            </div>
            }
            )
        }
    </div>
    )
}

export default Card