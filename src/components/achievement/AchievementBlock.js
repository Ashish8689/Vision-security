import React from 'react'

const AchievementBlock = ({ data: { title, count } }) => {
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className="achievement-block">
                <div className="achievement-content-container">
                    <h1 className="achievement-stats">{count}</h1>
                    <h2 className="achievement-title">{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default AchievementBlock
