import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardItem from "@/components/CardItem";
import Footer from '../components/Footer'


async function getTeachers(){
  const res = await fetch('http://127.0.0.1:8090/api/collection/teachers/records?page=1&perPage=5');
  const data = await res.json();
  console.log(data);
  return data?.asArray();
}
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardItem />
        <Footer/>
    </div>
  )
}
