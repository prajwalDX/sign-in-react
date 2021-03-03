import React from 'react'
import './Card.css'

export default function Card({info}) {
    return (
        <>
            <div className="card flx-row jus-sp-ard">
                    <div className="flx-row al-cntr w-20">
                        <span className="card-img" style={{background:info.avatar}} alt=""/>
                        <h2 className="card-data">{info.name}</h2>
                    </div>
                    <div className="flx-row w-12">
                        <span></span>
                        <h2 className="card-data">{info.location}</h2>
                    </div>
                    <div className="flx-row w-8">
                        <span></span>
                        <h2 className="card-data">Post: {info.post}</h2>
                    </div>
            </div>
        </>
    )
}
