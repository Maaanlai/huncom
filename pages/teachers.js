import LeftDrawer from "../components/LeftDrawer"
import { useEffect } from "react";

async function getTeachers(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/teachers/records?page=1&perPage=5');
    const data = await res.json();
    return data;
}

export default function TeacherPage(){
    useEffect(() => {
        getTeachers()
        .then((data) => {console.log(data.items)});
    }, [])

    return (
        <div>
            <LeftDrawer/>
            <div className="content-right">

                <div>


                </div>
            </div>
        </div>
    )
}
