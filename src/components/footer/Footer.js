import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <Link className="footer-link" to="/measures">
        <i className="fas fa-balance-scale-right" />
      </Link>
      <Link className="footer-link" to="/">
        <i className="fas fa-bars" />
      </Link>
      <Link className="footer-link" to="/progress">
        <i className="fas fa-tasks" />
      </Link>
      <Link className="footer-link" to="/more">
        <i className="fas fa-info" />
      </Link>
    </div>
  </footer>
);

export default Footer;
