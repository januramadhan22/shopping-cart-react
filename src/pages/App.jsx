import CartItem from "../components/Card/CartItem";
import Checkout from "../components/Card/Checkout";
import Discount from "../components/Card/Discount";
import Header from "../components/Header";

function App() {
  const listItems = [
    {
      id: 1,
      productName: "Blue Denim Shirt",
      productType: "Shirt",
      image:
        "https://images.unsplash.com/photo-1604006852563-e8b846baca6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsdWUlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      size: "M",
      color: "Blue",
      price: "17.99",
    },
    {
      id: 2,
      productName: "Red Hoodie",
      productType: "Hoodie",
      image:
        "https://images.unsplash.com/photo-1625024573124-57a3efa69d7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwaG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      size: "M",
      color: "Red",
      price: "35.99",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-white flex flex-col items-center gap-6">
      <Header />
      <div className="w-11/12 flex gap-6">
        {/* List Item */}
        <div className="w-9/12 mb-5 p-5 flex flex-col gap-5 bg-white shadow-md rounded-md border">
          <h3 className="text-lg font-bold text-gray-600">
            Cart ({listItems.length} Items)
          </h3>
          {listItems.map((item) => (
            <>
              <CartItem
                key={item.id}
                name={item.productName}
                type={item.productType}
                color={item.color}
                size={item.size}
                price={item.price}
                image={item.image}
              />
              <hr />
            </>
          ))}
        </div>

        {/* Checkout Form */}
        <div className="w-3/12 relative">
          <div className="w-full flex flex-col gap-5 absolute">
            <Checkout />
            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
