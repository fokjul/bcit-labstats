import { useState } from 'react';
import './DonationForm.scss';

const DonationForm = () => {
    const frequency = ['once', 'monthly']
   
    const [donationFrequency, setDonationFrequency] = useState('once');
    const [donationAmount, setDonationAmount] = useState('')
    console.log(donationFrequency)
  return (
    <div>
        <h3>Make a Donation</h3>
        {frequency.map((item, index) => {
            return (
                <button key={index} onClick={()=>setDonationFrequency(item)}>{item}</button>
            )
        })}
        <div>
            <p>Donation amount</p>
            <div>
                <button>$40</button>
                <button>$100</button>
                <button>$200</button>
                <button>$400</button>
                <input />
            </div>
            
        </div>
    </div>
    
  )
}

export default DonationForm