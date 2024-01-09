export default function Card({ data }) {
  return (
    <div className="eachCard">
      <h2>{data.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nobis optio
        impedit deserunt alias, dolores dignissimos iste sequi nam aperiam,
        provident id distinctio! Corporis delectus nihil ipsum dicta laborum
        sapiente.
      </p>
    </div>
  );
}

import "../styles/card.css";
