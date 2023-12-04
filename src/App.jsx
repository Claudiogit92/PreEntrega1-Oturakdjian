import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemlistContainer from './components/ItemListContaiiner';


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemlistContainer greeting= "¡Bienvenido!"/>
    </div>
  );
}

export default App;