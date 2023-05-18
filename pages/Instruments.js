import LeftDrawerInstruments from "../components/LeftDrawerInstruments"

async function getInstrument(){
    const res = await fetch('http://127.0.0.1:8090/api/collection/instruments/records?page=1&perPage=5');
    return await res.json();
}

export default function InstitutionsPage(){
    // const Instruments = await getInstrument();
    return (
        <div>
            <LeftDrawerInstruments/>
            <div className="content-right">
                <div>
                </div>
            </div>
        </div>
    )
}