import React, { Component } from "react";
import "./Bebold.css";

class Bebold extends Component {
  constructor(props) {
    super(props);
  }

  card_items = [
    { image: "https://images-static.nykaa.com/uploads/75223f87-05e2-4df2-97e2-fb5aa810e68d.jpg?tr=w-600,cm-pad_resize", offer: "Upto 35% Off", description: "Expert Skincare Validated By Dermats" },
    { image: "https://images-static.nykaa.com/uploads/a8a8ea5d-f1e6-4da6-a917-f717179ac034.jpg?tr=w-600,cm-pad_resize", offer: "Upto 40% Off", description: "On Best Sellers" },
    {
      image: "https://images-static.nykaa.com/uploads/81a498f9-7e68-4a91-b06c-2f0a8ddc65d5.jpg?tr=w-600,cm-pad_resize",
      offer: "Upto 30% Off + Free Perfume",
      description: "Worth Rs. 299 on Rs. 799 ",
    },
    {
      image: "https://images-static.nykaa.com/uploads/9f924092-e9b3-48ab-b637-4359a0546355.jpg?tr=w-600,cm-pad_resize",
      offer: "Explore Luxe New Launches +",
      description: "Exciting Gifts on purchase!",
    },
    { image: "https://images-static.nykaa.com/uploads/7cd66dc1-d218-4c89-840f-487f7a9238f9.jpg?tr=w-600,cm-pad_resize", offer: "Upto 35% Off", description: "Expert Skincare Validated By Dermats" },
    { image: "https://images-static.nykaa.com/uploads/ee143edb-ebc4-42d6-a955-63d0a5ffbe52.gif?tr=w-600,cm-pad_resize", offer: "Upto 40% Off", description: "On Best Sellers" },
    {
      image: "https://images-static.nykaa.com/uploads/25a842ec-b66a-46f3-8c67-dd4e5178d5be.jpg?tr=w-600,cm-pad_resize",
      offer: "Upto 30% Off + Free Perfume",
      description: "Worth Rs. 299 on Rs. 799 ",
    },
    {
      image: "https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif?tr=w-600,cm-pad_resize",
      offer: "Explore Luxe New Launches +",
      description: "Exciting Gifts on purchase!",
    },
  ];

  getCards = this.card_items.map((card) => (
    <div style={{ width: "100%" }} className="Tinycontainer">
      <div className="Tinycontainer-1">
        <img src={card.image} alt="Btyimg" />
      </div>
      <div className="Tinycontainer-2">
        <div className="Tinycontainer-heading1">
          <h5>{card.offer}</h5>
        </div>
        <div className="Tinycontainer-heading2">
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  ));

  features = [
    {
      image: "https://images-static.nykaa.com/uploads/02a3c530-711c-4fb0-89a8-ee68215eddc3.jpg?tr=w-300,cm-pad_resize",
      offer: "Upto 20% Off + Select your free",
      description: "worth Rs. 799 on Rs. 999",
    },
    {
      image: "https://images-static.nykaa.com/uploads/e56f43f6-0f07-412f-a300-8ffde7036a8c.jpg?tr=w-300,cm-pad_resize",
      offer: "Upto 20% Off + Select your free",
      description: "worth Rs. 799 on Rs. 999",
    },
    {
      image: "https://images-static.nykaa.com/uploads/6ea1c6f1-6e7a-434d-ba45-67e778d47b4b.jpg?tr=w-300,cm-pad_resize",
      offer: "Upto 20% Off + Select your fre",
      description: "worth Rs. 799 on Rs. 999",
    },
    {
      image: "https://images-static.nykaa.com/uploads/38ce9084-1f44-4e79-bee7-f561e45acef9.gif?tr=w-300,cm-pad_resize",
      offer: "Upto 20% Off + Select your fre",
      description: "worth Rs. 799 on Rs. 999",
    },
    {
      image: "https://images-static.nykaa.com/uploads/aedce902-5bcc-4ed1-a28c-5ab2b3c2fed4.jpg?tr=w-300,cm-pad_resize",
      offer: "Upto 20% Off + Select your free",
      description: "worth Rs. 799 on Rs. 999",
    },
    {
      image: "https://images-static.nykaa.com/uploads/52d3c769-9f88-4912-ab09-88789acf17fd.jpg?tr=w-300,cm-pad_resize",
      offer: "Upto 20% Off + Select your fre",
      description: "worth Rs. 799 on Rs. 999",
    },
  ];

  getFeatureBrands = this.features.map((feature) => (
    <div style={{ width: "100%" }} className="small-container">
      <div className="containerimg-1">
        <img src={feature.image} alt="winterimg" />
      </div>
      <div className="containerimg-2">
        <div className="containerheading-1">
          <h5>{feature.offer}</h5>
        </div>
        <div className="containerheading-2">
          <p>{feature.description}</p>
        </div>
      </div>
    </div>
  ));

  render() {
    return (
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <h4 style={{ color: "#f63a5f"}}>Be bold. Be daring</h4>
        <h3 style={{ color: "rgb(149, 149, 248)" }}>
          <span></span> Be simply beautiful
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "45% 45%", gap: "2%" }}>{this.getCards}</div>
        <h4 style={{ textAlign: "center", marginTop: "10%" }}>FEATURED BRANDS</h4>
        <div style={{ marginLeft: "5%", marginRight: "5%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2%" }}>{this.getFeatureBrands}</div>
      </div>
    );
  }
}

export default Bebold;
