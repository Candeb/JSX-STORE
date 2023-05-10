import Routes from './routes/Routes';
import { Footer } from './components/Footer/Footer';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
