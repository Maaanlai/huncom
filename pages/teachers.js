import LeftDrawer from "../components/LeftDrawer"
import Navbar from "../components/Navbar";
import {useEffect} from "react";
import LeftDrawerInstruments from "../components/LeftDrawerInstruments";
import CardItemTeachers from "../components/CardItemTeachers";

async function getTeachers(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/teachers/records?page=1&perPage=5');
    return await res.json();
}

export default function TeacherPage(){
    useEffect(() => {
        getTeachers()
        .then((data) => {console.log(data.items)});
    }, [])

    return (
        <div className="bg-[#dbd6e5]">
            <div className="bg-[#dbd6e5]">
                <LeftDrawerInstruments/>
                <Navbar/>
                <div className="content-right">
                    <div className="bg-[#dbd6e5]">
                        <CardItemTeachers/>
                    </div>
                </div>
            </div>
        </div>

    )
}
