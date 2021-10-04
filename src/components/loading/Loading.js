import Navbar from '../navbar/Navbar';
import './loading.css';

const Loading = () => (
  <div>
    <Navbar />
    <div className="loading-container">
      <h1>Please wait...</h1>
    </div>
  </div>
);

export default Loading;
