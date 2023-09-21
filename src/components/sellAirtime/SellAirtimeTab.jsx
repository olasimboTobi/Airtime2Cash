import React, {useState} from 'react';
import Input from '../common/Inputs';
import Button from '../common/Button';
import SellAirtimeTabStyle from './SellAirtime.styles';

const ussds = {
  mtn: "*777*08031234567*1500*1234#",
  glo: "*131*08012345678*500*34567# ",
  airtel: "*496*",
  etisalat: "*333*",
}

const phones = {
  mtn: "08061564548",
  glo: "07053048647",
  airtel: "09012800237",
  etisalat: "08090000200"
}



function SellAirtimeTab() {
    const [formData, setFormData] =  useState({})
    const[ ussd, setUssd] = useState("")
    const[phone, setPhone] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, name: name, value: value });
    };
    const handlesSelectChange = (e) => { 
      setFormData({...formData, network: e.target.value });
      setUssd(ussds[e.target.value]);
      setPhone(phones[e.target.value]);
  }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData, ussd, phones)
}

  return (
    <SellAirtimeTabStyle>
      <div className='container'>
        <p className='sellairtime-text'>Transfer Airtime</p>
     <form className='form-container'>
     <label htmlFor='network' className='label-field'>Network</label>
    <select name='network' onChange={handlesSelectChange}>

        <option value="" placeholder='Select Network'>Select network</option>
        <option value="mtn">MTN</option>
        <option value="glo">Glo</option>
        <option value="airtel">Airtel</option>
        <option value="etisalat">Etisalat</option>
    </select>
    <label htmlFor='phone-number'className='label-field'>Phone Number</label>
    <Input
        name={"phonenumber"}
        className={"input"}
        onChange={handleChange}
        placeholder={"Phone Number"}
        type={"tel"}
        id={"phone-number"}
      />
    <label htmlFor='amounttosell' className='label-field'>Amount to Sell</label>
    <Input
        name={"amount"}
        className={"input"}
        onChange={handleChange}
        placeholder={"NGN"}
        type={"number"}
        id={"amounttosell"}
      />
       <label htmlFor='ussd' className='label-field'>USSD</label>
    <Input
        name={"ussd"}
        className={"input solid-field"}
        onChange={handleChange}
        value={ussd}
        // type={"number"}
        id={"ussd"}
        disabled
      />
       <label htmlFor="amounttorecieve" className='label-field'>Amount to Recieve</label>
    <Input
        name={"amounttorecieve"}
        className={"input solid-field"}
        onChange={handleChange}
        placeholder={"NGN"}
        type={"text"}
        id={"amounttorecieve"}
        disabled
      />
       <label htmlFor='destination' className='label-field'>Destination Phone Number</label>
    <Input
        name={"destination"}
        className={"input solid-field"}
        onChange={handleChange}
        value={phone}
        type={"text"}
        id={"destination"}
        disabled
      />

      <Button 
      type="submit"
       onClick={handleSubmit}
      height={"48px"}
        width={"198px"}
        text={"Transfer Airtime"}
        />
</form>
    </div>
    </SellAirtimeTabStyle>
  )
}

export default SellAirtimeTab