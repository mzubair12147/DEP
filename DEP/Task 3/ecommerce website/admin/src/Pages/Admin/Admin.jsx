import AddProduct from '../../components/AddProduct/AddProduct';
import ListProduct from '../../components/ListProduct/ListProduct';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Admin.css';
import { Routes, Route } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path='/add-product' element={ <AddProduct />} />
        <Route path='/list-product' element={ <ListProduct />} />
      </Routes>
    </div>
  )
}
