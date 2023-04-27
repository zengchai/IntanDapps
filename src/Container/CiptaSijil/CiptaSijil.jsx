import React from 'react'
import '../CiptaSijil/ciptasijil.css'
import { Buttons } from '../../Component'
import { NavLink, useNavigate } from 'react-router-dom'
import backicon from '../../img/arrow.png'
import { deployContract, paySmartContract} from '../../Utils/utils'
import { MNEMONIC_KEY } from '../../constant/ALGOkey';
import algosdk from 'algosdk';

const recoveredAccount = algosdk.mnemonicToSecretKey(MNEMONIC_KEY);

const CiptaSijil = ({backpage}) => {
  const navigate = useNavigate();

  //@niczrsoh: Change this to match the database
  const handleDeploy = async () => {
     
   await deployContract(recoveredAccount, "Halo", "Course Date" )
        .then(async (appId)=> {
          paySmartContract (recoveredAccount, recoveredAccount, appId);
        });
      
  }
  return (
    <div className='app_box'>
      
      <div className='semakdaftarheader'>
      <button className='backbutton' onClick={()=>navigate(-1)}><img src={backicon} alt='This is a back button.' className="backicon"/></button>
      <h1 className='semakdaftaradmin'>CIPTA SIJIL</h1>
      {backpage==='/peserta-semak' &&
      <div className='smallback'><NavLink to="/admin/home">LAMAN UTAMA</NavLink>/<NavLink to={backpage}>PESERTA</NavLink>/EDIT SIJIL</div>}
      {backpage==='/semak' &&
      <div className='smallback'><NavLink to="/admin/home">LAMAN UTAMA</NavLink>/<NavLink to={backpage}>PROGRAM</NavLink>/EDIT SIJIL</div>}
      </div>
        <form className='maklumatbox'>
      <div>
        <div className='maklumatadminbahru'>
          MAKLUMAT SIJIL
        </div>
        <div className='maklumatsijil'>
          <div className='maklumat'>
            <label className="kik">TAJUK SIJIL</label>
            <div className='textarea'>
            <p className="kik">:</p>
            <input type="text" className='inputtext'/></div>
          </div>
          <div className='maklumat'>
            <label className="kik">TARIKH MULA</label>
            <div className='textarea'>
            <p className="kik">:</p>
            <input type="text" className='inputtext'/></div>
          </div>
          <div className='maklumat'>
            <label className="kik">TARIKH TAMAT</label>
            <div className='textarea'>
            <p className="kik">:</p>
            <input type="text" className='inputtext'/></div>
          </div>
          </div>
          </div>
          <div>
          <div className='maklumatadminbahru'>
          MAKLUMAT PENGUNA
        </div>
        <div className='maklumatsijil'>
          <div className='maklumat'>
            <label className="kik">NAMA</label>
            <div className='textarea'>
            <p className="kik">:</p>
            <input type="text" className='inputtext'/></div>
          </div>
          <div className='maklumat'>
            <label className="kik">No. MYKAD</label>
            <div className='textarea'>
            <p className="kik">:</p>
            <input type="text" className='inputtext'/></div>
          </div>
          </div>
          </div>
        </form>
        <div className='submitBtn'><Buttons title="CIPTA" onClick={handleDeploy}/></div>
      
    </div>
  )
}

export default CiptaSijil
