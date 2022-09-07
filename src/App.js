import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Widgets/Navbar'
import Posts from './Controller/Posts'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
