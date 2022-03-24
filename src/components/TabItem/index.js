import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const isSelectedTab = isActive ? 'active' : ''

  const selectTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`btn ${isSelectedTab}`}
        onClick={selectTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
