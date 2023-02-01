import { Outlet } from 'react-router-dom';
import './index.scss'

//class="App" main wrapper of application
//? span is for identifying body tag and end of html tag

const Layout = () => {
    return <div className="App">
        <div className="page">            
            <Outlet />
        </div>
    </div>
}

export default Layout