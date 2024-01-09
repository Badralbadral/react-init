const DummyData = [
  {
    title: "Уулзалтыг ингэж дуусгахгүй ээ хөө...",
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
      <Card data={DummyData[0]} />
      <Card data={DummyData[1]} />
      <Card data={DummyData[2]} />
      <Card data={DummyData[3]} />
    </div>
  );
}

import Card from "../components/Card";
import "../styles/container.css";
