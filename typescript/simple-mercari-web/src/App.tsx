import { useState } from 'react';
import './App.css';
import { ItemList } from './components/ItemList';
import { Listing } from './components/Listing';

function App() {
  // reload ItemList after Listing complete
  const [reload, setReload] = useState(true);
  return (
    <div>
      <header className='Title'>
        <a href="https://jp.mercari.com">
            <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mercari_logo.svg/768px-Mercari_logo.svg.png" alt="logo"/>
        </a>
      </header>
      <div>
        <Listing onListingCompleted={() => setReload(true)} />
      </div>
      <div>
        <ItemList reload={reload} onLoadCompleted={() => setReload(false)} />
      </div>
    </div>
  )
}

export default App;