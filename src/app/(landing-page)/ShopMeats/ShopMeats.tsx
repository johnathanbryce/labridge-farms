"use client";
import { useState } from "react";
import styles from "./ShopMeats.module.css";
// Internal Components
import LayoutContainerSections from "@/layouts/LayoutContainerSections/LayoutContainerSections";
import Button from "@/components/Buttons/Button/Button";
import ProductModal from "@/components/Modals/ProductModal/ProductModal";
import ProductItem from "@/components/ProductItem/ProductItem";
// Internal Assets
import beefPlaceholder from "../../../../public/assets/beefMainPlaceholder.jpg";
import porkPlaceholder from "../../../../public/assets/porkMainPlaceholder.jpg";
import groundBeefPlaceholder from "../../../../public/assets/groundBeefPlaceholder.jpg";

const meatProducts = [
  {
    image: beefPlaceholder,
    name: "Beef",
    price: "$6.50 / lb",
    description: " ",
  },
  {
    image: porkPlaceholder,
    name: "Pork",
    price: "$6.00 / lb",
    description: " ",
  },
  {
    image: groundBeefPlaceholder,
    name: "Ground Beef",
    price: "$7.00 / lb",
    description: " ",
  },
];

export default function ShopMeats() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: any) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <LayoutContainerSections title="Our Beef & Pork" bgColor="white">
      <section className={styles.shop_meats} id="farm">
        <div className={styles.header_section}>
          <Button label="Shop Our Meat" isTransparent={false} src="/farm" />
        </div>

        <div className={styles.product_container}>
          {meatProducts.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
              openModal={() => openModal(product)} // selects the product to trigger pop-up modal for that product
              isMeat={true}
            />
          ))}
        </div>

        <p className={styles.as_available}>
          {" "}
          As available, Labridge Farms occasionally offers free-range eggs,
          fresh lamb, chicken, turkey and additional specialty meats such as
          duck, goose and pheasant. Contact us for availability.
        </p>
        <p className={styles.disclaimer}>
          {" "}
          <span className={styles.bold}>Labridge Farms promise:</span> all our
          meat is sourced from pasture-raised, grass-fed animals, reflecting our
          holistic approach to ethical and sustainable farming.
        </p>
      </section>

      {/* renders in product pop-up modals, and displays the correct one when openModal(product) is triggered */}
      {selectedProduct && (
        <ProductModal
          name={selectedProduct.name}
          description={selectedProduct.description}
          image={selectedProduct.image}
          onClose={closeModal}
          src="/farm"
        />
      )}
    </LayoutContainerSections>
  );
}
