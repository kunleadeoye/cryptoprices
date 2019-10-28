import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div class="row mt-5">
      <div class="col-md-6 mx-auto">
        <h1>Welcome to CryptoPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi}/>
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;