const DummyData = [
  {
    title: "Уулзалтыг ингэж дуусгахгүй ээ хө.",
  },
  {
    title: `2024 оны Алтан бөмбөрцөг наадмын ШИЛДЭГ КИНО "Оппенхаймер"`,
  },
  {
    title: "Тогтвортой аялал жуулчлалын хэрэгцээ ба эко гэрчилгээ",
  },
  {
    title: `ФОТО: "Алтан бөмбөрцөг" наадмын алдартнуудын гоёл`,
  },
];

export default function Cards() {
  return (
    <div className="container">
      {DummyData.map((e) => (
        <Card data={e} />
      ))}
    </div>
  );
}

import Card from "../components/Card";
import "../styles/container.css";
