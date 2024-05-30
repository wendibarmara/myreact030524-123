import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout'
import { NavContext } from '../../components/common/navContext'

const Home = () => {
  const { namaLink,xNama,setXnama} = useContext(NavContext);
  const handleNama = (link) => {
    setXnama(link);
  };
    return (
      <Layout>
        <div>
             <p>Nama Link: {namaLink}</p>
              <div>
                  <button onClick={() => handleNama('ini home')}>Test</button>
              </div>
               <p>Ini Menu Home</p>
               {xNama}
       </div>
</Layout>

  )
}

export default Home
