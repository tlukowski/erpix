import Layout from "./components/layout";
import Faq from "./components/Faq";
import { HeroBanner } from "./components/HeroBanner";
import {HeroForm} from "./components/HeroForm";
import { HeroBanner2 } from "./components/HeroBanner2";
import { ProductList } from "./components/ProductList";
import { getProducts } from "./helpers/getProducts";
import ProductFilter from "./components/ProductFilter";
const faqItems = [
  {
    id: 1,
    title: "Które akcesoria są kompatybilne z moim urządzeniem?",
    description: "Te informacje możesz znaleźć w instrukcji obsługi lub na naszej stronie internetowej. Ważne: akcesoria dla urządzeń domowych nie są kompatybilne z akcesoriami przewidzianymi dla urządzeń profesjonalnych."
  },
  {
    id: 2,
    title: "Co zrobić gdy akumulator szybko się rozładowuje?",
    description: "Nie trzymaj na stałe urządzenia podłączonego do ładowarki i nie przekraczaj maksymalnego czasu ładowania, bo może to obniżyć żywotność akumulatora. Rozładowany akumulator podłącz do ładowarki na 14 godzin. Jeżeli po tym czasie, urządzenie nadal słabo pracuje, bądź w krótkim czasie się rozładowuje, odwiedź nasz najbliższy punkt serwisowy lub skontaktuj się z Biurem Obsługi Klienta."
  },
  {
    id: 3,
    title: "Co zrobić gdy akumulator szybko się rozładowuje?",
    description: "Nie trzymaj na stałe urządzenia podłączonego do ładowarki i nie przekraczaj maksymalnego czasu ładowania, bo może to obniżyć żywotność akumulatora. Rozładowany akumulator podłącz do ładowarki na 14 godzin. Jeżeli po tym czasie, urządzenie nadal słabo pracuje, bądź w krótkim czasie się rozładowuje, odwiedź nasz najbliższy punkt serwisowy lub skontaktuj się z Biurem Obsługi Klienta."
  },
  {
    id: 4,
    title: "Co zrobić gdy akumulator szybko się rozładowuje?",
    description: "Nie trzymaj na stałe urządzenia podłączonego do ładowarki i nie przekraczaj maksymalnego czasu ładowania, bo może to obniżyć żywotność akumulatora. Rozładowany akumulator podłącz do ładowarki na 14 godzin. Jeżeli po tym czasie, urządzenie nadal słabo pracuje, bądź w krótkim czasie się rozładowuje, odwiedź nasz najbliższy punkt serwisowy lub skontaktuj się z Biurem Obsługi Klienta."
  },
  {
    id: 5,
    title: "Co zrobić gdy akumulator szybko się rozładowuje?",
    description: "Nie trzymaj na stałe urządzenia podłączonego do ładowarki i nie przekraczaj maksymalnego czasu ładowania, bo może to obniżyć żywotność akumulatora. Rozładowany akumulator podłącz do ładowarki na 14 godzin. Jeżeli po tym czasie, urządzenie nadal słabo pracuje, bądź w krótkim czasie się rozładowuje, odwiedź nasz najbliższy punkt serwisowy lub skontaktuj się z Biurem Obsługi Klienta."
  },
]

export default async function Home() { 
  // const products = await getProducts();
  return (
    <Layout>
      <HeroBanner/>
      <HeroForm/>
      <HeroBanner2/>
      {/* <ProductList products={products.products}/> */}
      {/* <ProductFilter /> */}
      <Faq items={faqItems} />
    </Layout>
  );
}
