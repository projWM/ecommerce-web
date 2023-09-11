import CardComponents from "../../components/products/CardComponents.tsx";
import { products } from "../../data/index.tsx";
import "./home.css";

const HomePages = () => {
  return (
    <div className="container">
      <div className="seasonitems">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <CardComponents
                source={item.source}
                title={item.title}
                categories={item.categories}
                cost={"$" + item.cost}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePages;
