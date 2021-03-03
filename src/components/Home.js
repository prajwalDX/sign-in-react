import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Home.css'
import Chart from 'react-apexcharts'


export default function Home() {

    const [data , setData] = useState([])
    const [show , setShow] = useState(false)

    const [users, setUsers] = useState(Number(data.length))
    const [posts, setPosts] = useState(Number(data.reduce((a, c) => a + c.post , 0 )))
    const [comments, setComments] = useState(Number(data.reduce((a, c) => a + c.comments , 0 )))
    
    useEffect(async () => {
        let {data} = await axios.get(`https://603df34848171b0017b2e258.mockapi.io/api/users`)
        setData(data)
        setUsers(data.length)
        setPosts(data.reduce((a, c) => a + c.post , 0 ))
        setComments(data.reduce((a, c) => a + c.comments , 0 ))
    }, [])

    const showHandler = () => {
        setShow(prev => !prev)
    }

    const series= [posts,comments]
    
        const options= {
              chart: {
                width: 300,
                type: 'pie',
              },
              labels: ['posts', 'comments'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    show: false,
                    
           
                  }
                }
              }],
              legend: {
                offsetY: 0,
                labels: {
                    position: 'right',
                    offsetY: 0,
                    colors: "#f0f0f0"
                },
              }
            }

    return (
        <>
        <div className="home-wrapper">
            <div className="container bk-grey pd-2-1 flx-column">
                <div className="flx-row jus-sp-ard">
                    <div className="flx-column stat small-stat">
                        <h2 className="stat-label">Users</h2>
                        <h2 className="al-end stat-data">{users}</h2>
                    </div>
                    <div className="flx-column stat small-stat">
                        <h2 className="stat-label">Posts</h2>
                        <h2 className="al-end stat-data">{ posts}</h2>
                    </div>
                    <div className="flx-column stat small-stat">
                        <h2 className="stat-label">Comments</h2>
                        <h2 className="al-end stat-data">{ comments}</h2>
                    </div>
                </div>

                <div className="graph flx-column al-sl-cntr">
                    <Chart options={options} series={series} type="pie" height={300}  />
                </div>

                <div className="checkbox-container jus-sp-ard flx-row al-end pd-1">
                    <input className="checkbox" type="checkbox" name="" id="" onClick={showHandler}/>
                    <label htmlFor="">show all users</label>
                </div>
                {show ?
                
                    data.map((info,index) =>  
                        <Card key={index} info={info} />
                
                    
                    // "jayant.singh123@gmail.com"
                    
                    )
                        
                :
                " "
                }
                
                
            </div>
        </div> 
        </>
    )
}
