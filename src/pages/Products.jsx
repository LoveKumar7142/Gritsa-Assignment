import { useEffect, useState } from "react";
import { dummyProducts } from "../data/dummyProducts";

import ProductTable from "../components/ProductTable";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import ViewToggle from "../components/ViewToggle";

const ITEMS_PER_PAGE = 5;

export default function Products() {
  const [products, setProducts] = useState(dummyProducts);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const saveProduct = (product) => {
    if (editProduct) {
      setProducts(products.map(p =>
        p.id === product.id ? product : p
      ));
      setEditProduct(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  return (
    <>
      <h1>Product Management</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <ViewToggle view={view} setView={setView} />
      <ProductForm onSave={saveProduct} editProduct={editProduct} />

      {view === "table" ? (
        <ProductTable products={paginated} onEdit={setEditProduct} />
      ) : (
        <ProductCard products={paginated} onEdit={setEditProduct} />
      )}

      <Pagination
        total={filtered.length}
        perPage={ITEMS_PER_PAGE}
        current={currentPage}
        setCurrent={setCurrentPage}
      />
    </>
  );
}
