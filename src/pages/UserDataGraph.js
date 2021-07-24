import React, {useEffect, useState} from "react";
import Header from '../components/Header'
import PathButton from '../components/PathButton';
import PieChart from '../components/PieChart';

const UserDataGraph = () => {
    const [userDataGraph, setUserDataGraph] = useState([])
    const [userLoading, setUserLoading] = useState(true)

    const controller = new AbortController();
    const signal = controller.signal;

    const getUserData = async () => {
        const url = `https://api.npoint.io/a862fcddbcc21fea2d8a`
        const response = await fetch(url,{
            method: 'get',
            signal: signal
        })
        const result = await response.json()
        let data = result.data
        data = data.map((item) => {
            return({
                id: item.firstName,
                label: item.firstName,
                value: item.salary
            })
        })
        setUserDataGraph(data);
        setUserLoading(false)
    }

    const abortData = () => {
        controller.abort()
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div>
           <Header heading="user Graph"/>
           <div className="Content">
                <PathButton name="Go to page 1" path="/" abortData={abortData}/>
                <div className="pie-chart-container">
                    <div className= "pie">
                        <PieChart userLoading={userLoading} userDataGraph={userDataGraph}/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default UserDataGraph
