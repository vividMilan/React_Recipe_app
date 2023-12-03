import React from 'react'

const NewSkillsSection = () => {

    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write out own recipies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

  return (
    <div className='section improve-skills'>
        <div className="col img">
            <img src="./img/gallery/img_10.jpg" alt="" srcset="" />
        </div>
        <div className="col typography">
            <h1 className='title'>Improve Your Culinary Skills</h1>
            {list.map((item, index) => (
                <p key={index} className='skill-item'>{item}</p>
            ))}
            <button className="btn">signup now</button>
        </div>
    </div>  )
}

export default NewSkillsSection