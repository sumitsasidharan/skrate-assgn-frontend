import './SidebarIcon.css';
import { Link } from 'react-router-dom';

const SidebarIcon = ({ Icon, iconName, active, setActive }) => {
   return (
      <Link to={`/${iconName}`}>
         <div
            onClick={() => setActive(Icon)}
            className={`Sidebar__Icon ${active ? 'active' : ''}`}>
            <Icon fontSize="large" />
         </div>
      </Link>
   );
};

export default SidebarIcon;
