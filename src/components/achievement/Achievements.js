import React from 'react'
import AchievementBlock from './AchievementBlock'

const Achievements = () => {
    const achievements = [
        {
            title: 'Years of Experience',
            count: '15+',
        },
        {
            title: 'Service Worker',
            count: '25+',
        },
        {
            title: 'Loyal Customer',
            count: '4,000+',
        },
        {
            title: 'Service Provided',
            count: '20,000+',
        },
    ]
    return (
        <div className="achievementContainer">
            <div className="container">
                <div className="row">
                    {achievements.map((data) => (
                        <AchievementBlock key={data.title} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achievements
