'use client'
import React, {useState} from 'react'
import styles from './ShopLabs.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
import Button from '@/components/Buttons/Button/Button'
import ProductModal from '@/components/Modals/ProductModal/ProductModal'
import ProductItem from '@/components/ProductItem/ProductItem'
// Internal Assets
import Lily2 from '../../../../public/assets/Lily2.jpg'
import Olive from '../../../../public/assets/Olive.jpg';
import River2 from '../../../../public/assets/River2.jpg';

const labProducts = [
    {
        image: Lily2,
        name: 'Lily',
        price: '$$$',
        description: 'this is a more detailed description of Lily. Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
    },
    {
        image: Olive,
        name: 'Olive',
        price: '$$$',
        description: 'this is a more detailed description of Olive. Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
    },
    {
        image: River2,
        name: 'River',
        price: '$$$',
        description: 'this is a more detailed description of River. Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
    }
]

export default function ShopLabs() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (product: any) => {
      setIsModalOpen(true);
      setSelectedProduct(product);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProduct(null)
    };

  return (
    <LayoutContainerSections>
        <section className={styles.shop_labs} id="kennel">
        <div className={styles.header_section}>
            <h2> Our Labrador Retrievers</h2>
            <Button label="Shop Labradors" isTransparent={false} src="/labs" />
        </div>

        <div className={styles.product_container}>
            {labProducts.map((product, index) => (
                <ProductItem
                    key={index}
                    product={product}
                    openModal={() => openModal(product)} // selects the product to trigger pop-up modal for that product
                    isDog={true}
                />
            ))}
        </div>

        <p className={styles.disclaimer}> <span className={styles.bold}>Labridge Kennels promise:</span> a brief disclaimer or blurb about our dogs here...</p>
        </section>

        {/* renders in product pop-up modals, and displays the correct one when openModal(product) is triggered */}
        {selectedProduct && (
            <ProductModal
                name={selectedProduct.name}
                description={selectedProduct.description}
                image={selectedProduct.image}
                onClose={closeModal}
            />
        )}
    </LayoutContainerSections>
  )
}