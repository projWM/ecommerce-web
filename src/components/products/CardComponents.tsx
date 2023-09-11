import "./card.css";

interface props {
  source: string;
  title: string;
  categories: string;
  cost: string;
  link?: string;
}

const CardComponents = ({ source, title, categories, cost }: props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="product-images" src={source} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{categories}</p>
        <p className="card-text">{cost}</p>
      </div>
    </div>
  );
};

export default CardComponents;
