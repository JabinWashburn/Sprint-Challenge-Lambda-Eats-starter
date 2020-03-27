import React from "react";
import { Link } from "react-router-dom"
import Pizza from '../src/Pizza.jpg'



export default function Home() {
    return (
      <div>
        <h1>Welcome to Jabin's Delicious Zza</h1>
        <h2>Order your mucho delicious Zza today!</h2>
        <img className="home-image" src={Pizza} alt='pic of super delicious Zza that makes you wanna order 12 of them'/>
        <Link className='orderZza' to ={'/Form'}>
            <button className='order-here'>Order Zaa!</button>
        </Link>
      </div>
    );
  }
  