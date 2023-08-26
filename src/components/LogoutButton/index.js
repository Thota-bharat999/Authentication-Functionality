import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="logout" type="button" onClick={onClickLogoutButton}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
