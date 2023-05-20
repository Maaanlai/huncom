import LeftDrawerInstruments from "../components/LeftDrawerInstruments"
import {useEffect} from "react";
import CardItemInstruments from "../components/CardItemInstruments";
import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
async function getTeachers(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/teachers/records?page=1&perPage=5');
    return await res.json();
}

export default function InstitutionsPage(){
    useEffect(() => {
        getTeachers()
            .then((data) => {
                console.log(data.items)
            });
    }, [])

    return (
        <div className="bg-[#dbd6e5]">
            <div className="bg-[#dbd6e5]">
                <Navbar/>
                <div className="content-right">
                    <div className="bg-[#dbd6e5]">
                        <CardItemInstruments/>
                        <CardItem/>
                    </div>
                </div>
            </div>
        </div>

    )
}