import CardItem from "@/components/CardItem";

async function getTeachers(){
    const res = await fetch('http://127.0.0.1:8090/api/collection/teachers/records?page=1&perPage=5');
    const data = await res.json();
    return data?.asArray();
}

export default async function TeacherPage(){
    const teachers = await getTeachers();
    console.log(teachers);
    return (
        <div>
            <h1>teachers</h1>
            <div>
            </div>
        </div>
    )
}
