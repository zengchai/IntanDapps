import {React, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Penyemak.css';

export default function Penyemak(){
  const [mykad, setMykad] = useState("");
  const onChangeMykad = (e) =>{
    const regex = /^[0-9\b]+$/;
    if(e.target.value === "" || regex.test(e.target.value)){
      setMykad(e.target.value);
    }
  }
    return(
      <>
        <div className='penyemakPage'>
          <div className='penyemakContainer'>
            <div className='titlePenyemak'>
              <h1>Maklumat Penyemak</h1>
            </div>
            {/*Need change */}
            <form className='maklumatPenyemak' method='get' action='/semaksijil'>

              <label htmlFor='namaPenyemak'>Nama: 
                <input id='namaPenyemak' name='namaPenyemak' type='text' placeholder='Nama'/>
              </label>
              
              <label htmlFor='myKadPenyemak'>No. MyKad: 
                <input id='myKadPenyemak' name='myKadPenyemak' type='text' placeholder='No. MyKad' minlength='12' maxLength='12' onChange={onChangeMykad} value={mykad}/>
              </label>

              <label htmlFor='organisasiPenyemak'>Nama Organisasi: 
                <input id='organisasiPenyemak' name='organisasiPenyemak' type='text' placeholder='Alamat Dompet'/>
              </label>

              <button type='Submit'>Masuk</button>
              
            </form>
          </div>
        </div> 
      </>  
    )
}