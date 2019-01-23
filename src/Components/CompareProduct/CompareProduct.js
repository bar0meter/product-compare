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
              <tr>
                <td />
                {data.map((prod, index) => {
                  if (compareProducts.includes(prod.id))
                    return <td key={index}>{prod.name}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {data.map((prod, index) => {
                  if (compareProducts.includes(prod.id))
                    return <td key={index}>{prod.price}</td>;
                })}
              </tr>
              <tr>
                <td>Colors</td>
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
                <td>Condition</td>
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
