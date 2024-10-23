import ProductCard from './productCard';
import egg from "/images/egg.png";
import chicken from "/images/chicken.png";
import cow from "/images/cow.png";
import potato from "/images/potato.png";   
import rice from "/images/rice.png";

const Orders = () => {
  const products = [
    { id: 1, title: 'Egg', description: 'The Bengal Egg Farm', price: 15, image: egg, trackingNumber: '11803001' },
    { id: 2, title: 'Chicken', description: 'Black n white Chicken farm', price: 200, image: chicken, trackingNumber: '4236246' },
    { id: 3, title: 'Cow', description: 'Cow from how cow shop', price: 700, image:cow, trackingNumber: '623547156435654' },
    { id: 4, title: 'Potato', description: 'Pran potato', price: 60, image: potato, trackingNumber: '143343254' },
   { id: 5, title: 'Rice', description: ' Richmans rice ', price: 65, image: rice, trackingNumber: '2354436587' }
  ];
  return (
    <main className='mx-6 lg:mx-48 my-10 grid grid-cols-1 gap-6'>
      <h1 className='text-white font-bold text-3xl'>My Orders</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}
export default Orders