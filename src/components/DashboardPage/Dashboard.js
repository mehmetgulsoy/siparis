import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import styles from "./style.module.css";
import Part from "../PartPage/Part";

function Dashboard(props) {
  const [hideClass, set_hideClass] = useState("");
  const [activeItem, set_activeItem] = useState("");

  function handleMuneClick(e) {
    hideClass === "" ? set_hideClass(styles.hideNavbar) : set_hideClass("");
  }

  function handleItemClick(e, { name }) {
    set_activeItem(name);
    props.history.push("/dashboard/" + name);
  }

  function menuItem(name, component) {
    return (
      <Menu.Item
        name={component}
        active={activeItem === component}
        onClick={handleItemClick}
      >
        {name}
      </Menu.Item>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header>
        <Icon name="bars" size="large" onClick={handleMuneClick} />
        <Icon name="coffee" size="large" />
        <span>Siparişler</span>
      </header>
      <nav className={hideClass}>
        <Menu pointing secondary vertical>
          {menuItem("Ana Sayfa", "HomePage")}
          <Menu.Item>
            Ürünler
            <Menu.Menu>
              {menuItem("Ürünler", "Meclis")}
              {menuItem("Ürün Ekle", "part")}
              {menuItem("Ürün Sil", "Tanımlamalar")}
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            Siparişler
            <Menu.Menu>
              {menuItem("Stok İşlemleri", "Tanımlamalar")}
              {menuItem("Gider/Masraf İşlemleri", "Tanımlamalar")}
              {menuItem("Zayiat İşlemleri", "Tanımlamalar")}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </nav>
      <main>
        <Switch>
          <Route exact path="/dashboard/part" component={Part} />
          {/*<Route exact path="/dashboard/menuler" component={MenuList} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default Dashboard;
