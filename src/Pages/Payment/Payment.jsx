import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router';

const Payment = () => {

const {id}= useParams()
const axiosSecure = useAxiosSecure()
const {data: order =[]}=useQuery({
    queryKey: ["Order", id],
    queryFn: async()=>{
const res = await axiosSecure.get(`/order/id/${id}`)
return res.data
    }
})





const handlePayment =  ()=>{
 axiosSecure.post("/create-checkout-session", order ).then(res=>{
   window.location.href =res.data.url
 })

}



    return (
      <div className="text-center m-3 space-y-7">
        <img src={order.image} className='max-w-36 mx-auto' alt="" />
        <span className="font-semibold text-xl">
          Please Pay ${order.cost} for{" "}
          <span className="text-primary">{order.bookName}</span>
        </span> <br></br>
        <button onClick={handlePayment} className='btn bg-primary my-3 text-accent'>Proceed to Pay</button>
      </div>
    );
};

export default Payment;