import { useState, useRef, useEffect } from "react";
import useToken from "../useToken";
import logo from "../assets/mbb_logo.svg";

const MenuItems = [
  {
    name: "Why Use My BillBook?",
    slug: "mybillbook",
  },
  {
    name: "Who is it for?",
    slug: "who",
  },
  {
    name: "Online Store",
    slug: "onlinestore",
  },
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "FAQs",
    slug: "faqs",
  },
];

const MenuItem = (props) => {
  const { item, selected = false, onItemSelect } = props;

  return (
    <div
      className={`menu-item ${selected ? "menu-item--selected" : ""}`}
      data-slug={item.slug}
      onClick={() => {
        onItemSelect(item);
      }}
    >
      {item.name}
    </div>
  );
};

const Menu = (props) => {
  const { items, onSelectedItem, initialItemSlug = null } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItemsRef = useRef();
  const selectedItemRef =
    menuItemsRef.current && selectedItem
      ? menuItemsRef.current.querySelector(`[data-slug=${selectedItem.slug}]`)
      : null;

  const calculateDashPosition = (element, dashWidth) => {
    return element.offsetLeft + element.offsetWidth / 2 - dashWidth / 2;
  };

  const calculateDashWidth = (element) => {
    return element.offsetWidth;
  };

  const dashWidth = selectedItemRef ? calculateDashWidth(selectedItemRef) : 0;

  const dashPosition = selectedItemRef
    ? calculateDashPosition(selectedItemRef, dashWidth)
    : 0;

  const selectItem = (item) => {
    setSelectedItem(item);
    onSelectedItem(item);
  };

  useEffect(() => {
    const initialItem = initialItemSlug
      ? items.find((item) => item.slug === initialItemSlug)
      : items[0];
    setSelectedItem(initialItem);
  }, []);

  const renderItems = items.map((item) => (
    <MenuItem
      item={item}
      selected={selectedItem && selectedItem.slug === item.slug}
      onItemSelect={selectItem}
    />
  ));

  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <div className="menu-items" ref={menuItemsRef}>
        {renderItems}
        <div
          className="menu-dash"
          style={{
            width: dashWidth,
            transform: `translate3d(${dashPosition}px, 0 , 0)`,
          }}
        />
      </div>
    </div>
  );
};
const LoggedInMenu = () => {
  const { userName, setToken } = useToken();
  const logOut = () => {
    window.location.reload(false);
    setToken({});
  };

  return (
    <div className="menu menu1">
      <div className="menu-items1">
        <div className={`menu-item`} id="username">
          {userName}
        </div>
        <div className={`menu-item`} onClick={logOut}>
          Log Out
        </div>
      </div>
    </div>
  );
};

const NavBar = ({ itemPage }) => {
  if (!itemPage) {
    return (
      <Menu
        items={MenuItems}
        onSelectedItem={(item) => {
          console.log("Selected item", item);
        }}
        initialItemSlug={MenuItems[0].slug}
      />
    );
  } else return <LoggedInMenu />;
};

export default NavBar;
