import React from 'react'
import ChefCard from './ChefCard'

const ChefSection = () => {

    const chefs = [
        {
            name: "Juan Carlos",
            image: '/img/top-chefs/img_1.jpg',
            recipiesCount: "10",
            cuisine: "Mexican"

        },
        {
            name: "John Doe",
            image: '/img/top-chefs/img_2.jpg',
            recipiesCount: "05",
            cuisine: "Japanese"
        },
        {
            name: "Erich Maria",
            image: '/img/top-chefs/img_3.jpg',
            recipiesCount: "13",
            cuisine: "Italian"
        },
        {
            name: "Chris Brown",
            image: '/img/top-chefs/img_4.jpg',
            recipiesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            image: '/img/top-chefs/img_5.jpg',
            recipiesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            image: '/img/top-chefs/img_6.jpg',
            recipiesCount: "04",
            cuisine: "Indian"
        },
    ]

  return (
    <div className='section chefs'>
        <h1 className='title'>Our Top Chefs</h1>
        <div className="top-chefs-container">
            {chefs.map((chef, index) => (
                <ChefCard 
                    key={index}
                    chef={chef}
                />
            ))}
        </div>
    </div>
  )
}

export default ChefSection