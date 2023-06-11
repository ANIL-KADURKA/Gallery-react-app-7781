import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, highlight} = props
  const {displayText, tabId} = tabDetails
  const hello = highlight ? 'active-tab-btn' : ''

  const onClickButton = () => {
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${hello}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
