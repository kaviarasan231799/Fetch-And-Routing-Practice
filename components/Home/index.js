import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <BlogList />
    <UserInfo />
  </div>
)

export default Home
