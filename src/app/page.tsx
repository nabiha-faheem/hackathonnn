import Hero from "@/components/Hero";
import Location from "@/components/Location";
import PopularCar from "@/components/PopularCar";
import Recommended from "@/components/Recommended";
import Page from "./admin/page";
import Det from "./detailed/page";
import Payment from "./payment/page";

export default function Home() {
  return (
<div>
  <Hero/>
  <Location/>
  <PopularCar/>
  <Recommended/>


<Det/>
<Payment/>
  <Page/>
</div>
  );
}
