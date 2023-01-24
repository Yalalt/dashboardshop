import React, { useEffect, useState } from "react";
import "../../style/controlpanel.css";
import productsData from "../../utils/db/db.json";

const ControlPanel = () => {
  let [products, setProducts] = useState([productsData.products]);


  useEffect(() => {
    console.log(products[0]);
  }, [products]);

  return (
    <div className="controlPanel-bgColor">
      <div>
        <p>Хянах самбар</p>
      </div>
      <div className="lastSold">
        <p>Сүүлд зарагдсан</p>
        <div className="controlPanel-cardContainer">
          <div className="controlPanel-cardBody">
            <div className="controlPanel-cardImage">
              
              <img src={products[0][0].image} alt="Product zaragdsan 1" />
            </div>
            <div>
              <span>{`${products[0][0].name} ${products[0][0].id}`}</span>
            </div>
          </div>

          <div className="controlPanel-cardBody">
            <div className="controlPanel-cardImage">
              
              <img src={products[0][8].image} alt="Product zaragdsan 1" />
            </div>
            <div>
              <span>{`${products[0][8].name} ${products[0][8].id}`}</span>
            </div>
          </div>

          <div className="controlPanel-cardBody">
            <div className="controlPanel-cardImage">
              
              <img src={products[0][9].image} alt="Product zaragdsan 1" />
            </div>
            <div>
              <span>{`${products[0][9].name} ${products[0][9].id}`}</span>
            </div>
          </div>

          <div className="controlPanel-cardBody">
            <div className="controlPanel-cardImage">
              
              <img src={products[0][3].image} alt="Product zaragdsan 1" />
            </div>
            <div>
              <span>{`${products[0][3].name} ${products[0][3].id}`}</span>
            </div>
          </div>

          <div className="controlPanel-cardBody">
            <div className="controlPanel-cardImage">
              
              <img src={products[0][4].image} alt="Product zaragdsan 1" />
            </div>
            <div>
              <span>{`${products[0][4].name} ${products[0][4].id}`}</span>
            </div>
          </div>

          <div className="controlPanel-cardBody">
            <div className="controlPanel-cardImage">
              
              <img src={products[0][5].image} alt="Product zaragdsan 1" />
            </div>
            <div>
              <span>{`${products[0][5].name} ${products[0][5].id}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ControlPanel;
