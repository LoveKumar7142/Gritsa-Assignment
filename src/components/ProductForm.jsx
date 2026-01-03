import { useEffect, useState } from "react";

export default function ProductForm({ onSave, editProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  useEffect(() => {
    if (editProduct) setForm(editProduct);
  }, [editProduct]);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) return;
    onSave(form);
    setForm({ name: "", price: "", category: "", stock: "", description: "" });
  };

  return (
    <form onSubmit={submit} className="form">
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="number" placeholder="Price" value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Category" value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="number" placeholder="Stock" value={form.stock}
        onChange={e => setForm({ ...form, stock: e.target.value })} />
      <textarea placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })} />
      <button>Save</button>
    </form>
  );
}
