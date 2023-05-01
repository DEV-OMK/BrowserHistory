import './index.css'

const Ribbon = props => {
  const {changeInput} = props

  const updateInput = event => {
    changeInput(event.target.value)
  }

  return (
    <div className="ribbon-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          className="app-logo"
          alt="app logo"
        />
      </div>
      <div className="search-input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          className="search-icon"
          alt="search"
        />
        <input
          type="search"
          placeholder="Search History"
          className="search-input"
          onChange={updateInput}
        />
      </div>
    </div>
  )
}

export default Ribbon
