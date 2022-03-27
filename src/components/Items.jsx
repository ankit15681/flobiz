import React from "react";
import { useState } from "react";
import searchIcon from "../assets/icn_search.svg";
import noItemsIcon from "../assets/no_items.svg";
import useItem from "../useItem";
import NavBar from "./NavBar";

export default function Items() {
  const { items, setItems } = useItem();
  const [selected, setSelected] = useState({});
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    sprice: "",
    pprice: "",
    munit: "pcs",
    sdate: "",
  });

  console.log(items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(Object.keys(selected).length === 0 && selected.constructor === Object)
    ) {
      const newItems = items.filter((item) => selected !== item);
      setItems([...newItems, formData]);
    } else {
      if (items) {
        const newItems = [...items, formData];
        setItems(newItems);
      } else {
        setItems([formData]);
      }
    }
    setFormData({});
    setSelected({});
    window.location.reload(false);

  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const editItem = (item) => {
    setSelected(item);
    setFormData(item);
  };

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
    setSelected({});
  };

  return (
    <>
      <NavBar itemPage={true} />
      <div className="items-container">
        <div className="item-list">
          <h4>Items</h4>
          <div className="itemsListContainer">
            <div className="searchContainer">
              <img src={searchIcon} alt="icon" />
              <input id="search" type="search" placeholder={"Search Items"} />
            </div>
            <table id="tableItems">
              <thead>
                <tr>
                  <th>ITEM NAME</th>
                  <th>ITEM CODE</th>
                  <th>SELLING PRICE</th>
                  <th>PURCHASE PRICE</th>
                  <th>UNIT</th>
                  <th>DATE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items && items.length > 0 ? (
                  items.map((item, key) => {
                    return (
                      <>
                        <tr
                          key={key}
                          onClick={() => {
                            editItem(item);
                          }}
                        >
                          <td>{item.itemName}</td>
                          <td>{item.itemCode}</td>
                          <td>{item.sprice}</td>
                          <td>{item.pprice}</td>
                          <td>{item.munit}</td>
                          <td>{item.sdate}</td>
                          <td>
                            <button
                              onClick={() => removeItem(item)}
                              style={{ color: "red" }}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            {items && items.length < 1 && (
              <div className="nodataIcon">
                <img src={noItemsIcon} alt="nodata" />
                <p>You do not have any data to display</p>
              </div>
            )}
          </div>
        </div>
        <div className="item-create">
          <h4>Create/Edit Items</h4>
          <div className="createItemContainer">
            <form onSubmit={handleSubmit}>
              <div className="itemNameCode">
                <label>
                  <p>Item Name*</p>
                  <input
                    required
                    type="text"
                    name="itemName"
                    value={formData?.itemName}
                    placeholder="Enter Item Name"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <p>Item Code*</p>
                  <input
                    required
                    value={formData?.itemCode}
                    type="text"
                    name="itemCode"
                    placeholder="Enter Item Code"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <h3>Stock & Pricing Table(Optional)</h3>
              <div className="itemNameCode">
                <label>
                  <p>Sales Price</p>
                  <input
                    type="text"
                    name="sprice"
                    value={formData?.sprice}
                    placeholder="₹ 0"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <p>Purchase Price</p>
                  <input
                    type="text"
                    name="pprice"
                    value={formData?.pprice}
                    placeholder="₹ 0"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="itemNameCode">
                <label>
                  <p>Measuring UNIT</p>
                  <select
                    name="munit"
                    value={formData?.munit}
                    placeholder="Select Unit"
                    onChange={handleChange}
                  >
                    <option value="pcs">pcs</option>
                    <option value="boxes">boxes</option>
                    <option value="gms">gms</option>
                    <option value="kgs">kgs</option>
                    <option value="lts">lts</option>
                  </select>
                </label>
                <label>
                  <p>Opening Stock Date</p>
                  <input
                    type="date"
                    name="sdate"
                    value={formData?.sdate || ""}
                    // placeholder="Select Date"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="saveItemButton">
                <input type="submit" value={"Save"} className="submitButton" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
