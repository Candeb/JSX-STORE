import Routes from './routes/Routes';
import { Categorias } from './components/Categorias/Categorias';
import { Featured } from './components/Featured/Featured';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import { Products } from './components/Products/Products';
import { Recycle } from './components/Recycle/Recycle';
import { Subscription } from './components/Subscription/Subscription';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Layout>
      <Header />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
