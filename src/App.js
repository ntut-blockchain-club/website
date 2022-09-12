import Nav from './components/Nav';
import Main from './pages/banner';
import Intro from './pages/intro';
import Footer from './pages/footer';
import Crew_intro from './pages/crew_intro';

import "./App.scss";
import End_lecture from './pages/end_lecture';
import Join from './pages/join';
import Directors from './pages/director';
function App() {
    return (
        <div className="App">
            <Nav />
            <Main />
            <div className='container'>
            <Intro />
            <Directors />
            <Crew_intro />
            <End_lecture />
            <Join />
            </div>
            <Footer />
        </div>
        
    );

}

export default App;