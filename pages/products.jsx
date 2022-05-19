import Footer from '../components/Footer';
import NavProducts from '../components/NavMenu/NavProducts';
import ProjectCard from '../components/ProjectCard';
import { getProducts } from './api/products';
import styles from '../styles/ProjectsPage.module.css';

const ProductsPage = ({ products }) => {
  return (
    <>
      <NavProducts />

      <br />
      <h1>Products Section</h1>
      <br />
      <h4> - MyOneUniverse.com </h4>
      <h4> - Client Software Development </h4>
      <h4> - QRcode Website </h4>
      {/* <h4> - Tech Tips w separate videos</h4> */}
      <h4> - ShopperLady dbs </h4>

      <br />
      <br />
      <h2 className="typecolor">Client Software Development</h2>
      <br />

      <br />
      <div className={styles.container}>
        {products.map((product) => (
          <ProjectCard key={product.id} project={product} />
        ))}
      </div>
      <br />
      <div className={styles.container}>
        {products.map((product) => (
          <ProjectCard key={product.id} project={product} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const products = getProducts();

  return {
    props: { title: 'Products', products },
  };
}

export default ProductsPage;
