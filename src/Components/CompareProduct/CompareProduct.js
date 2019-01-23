import React, { Component } from "react";
import "./CompareProduct.css";

export default class CompareProduct extends Component {
  render() {
    const { compareProducts, data } = this.props;
    console.log(data);
    return (
      <div className="compareProduct">
        {compareProducts.length > 1 && (
          <table className="table">
            <thead>
              <tr className="table-heading">
                <th />
                {data.map((prod, index) => {
                  if (compareProducts.includes(prod.id))
                    return <th key={index}>{prod.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdNames">Price</td>
                {data.map((prod, index) => {
                  if (compareProducts.includes(prod.id))
                    return <td key={index}>{prod.price}</td>;
                })}
              </tr>
              <tr>
                <td className="tdNames">Colors</td>
                {data.map((prod, index) => {
                  if (compareProducts.includes(prod.id))
                    return (
                      <td key={index}>
                        {prod.colors.map((color, id) => (
                          <span className={`bg-${color}`} key={id} />
                        ))}
                      </td>
                    );
                })}
              </tr>
              <tr>
                <td className="tdNames">Condition</td>
                {data.map((prod, index) => {
                  if (compareProducts.includes(prod.id))
                    return <td key={index}>{prod.condition}</td>;
                })}
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
