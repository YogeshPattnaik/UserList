import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import PathButton from "../components/PathButton";
import TableList from "../components/TableList";

const UserDataList = () => {
    const [userData, setUserData] = useState([])
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
        setUserData(result.data);
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
			<Header heading="user data" />
			<div className="Content">
				<PathButton name="Go to page 2" path="/userGraph" abortData={abortData}/>
                <TableList userData={userData} userLoading={userLoading}/>
			</div>
		</div>
	);
};

export default UserDataList;
