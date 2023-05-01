import './index.css'

const HistoryItem = props => {
  const {history, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDeleteHistory = () => {
    onDelete(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-details-container">
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <div className="text-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
