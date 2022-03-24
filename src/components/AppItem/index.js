import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li className="apps-container">
      <img src={imageUrl} className="img-icon" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
