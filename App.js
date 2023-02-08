import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
   <h1 className="title">
      Bienvenido al Sistema de Captura de Información Penitenciaria. <span aria-label="emoji" role="img"></span>
   </h1>
   
   <input type="text" className="new-task" placeholder="usuario"/>
   <input type="password" className="new-task" placeholder="contraseña"/>
  
   <input type="submit" className="new-task" value="INGRESAR"/>
</div>
  );
}

export default App;
