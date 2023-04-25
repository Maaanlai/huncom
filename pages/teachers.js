import LeftDrawer from "../components/LeftDrawer"

async function getTeachers(){
    const res = await fetch('http://127.0.0.1:8090/api/collection/teachers/records?page=1&perPage=5');
    return await res.json();
}

export default function TeacherPage(){
    // const teachers = await getTeachers();
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
