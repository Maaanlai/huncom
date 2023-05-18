import LeftDrawer from "../components/LeftDrawer"

async function getInstitutions(){
    const res = await fetch('http://127.0.0.1:8090/api/collection/institutions/records?page=1&perPage=5');
    return await res.json();
}

export default function InstitutionsPage(){
    // const Institutions = await getInstitutions();
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