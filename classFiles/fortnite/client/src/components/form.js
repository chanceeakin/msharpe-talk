import React from 'react'
import PropTypes from 'prop-types'

const FormComponent = ({
  fetchRequest,
  platform,
  handlePlatformChange,
  handleNameChange,
  username,
}) => (
  <form onSubmit={fetchRequest}>
    <label>Platform</label>
    <br />
    <label>
      <input
        type="radio"
        value="psn"
        checked={platform === 'psn'}
        onChange={handlePlatformChange}
      />
      PSN
    </label>
    <br />
    <label>
      <input
        type="radio"
        value="xb1"
        checked={platform === 'xb1'}
        onChange={handlePlatformChange}
      />
      Xbox 1
    </label>
    <br />
    <label>
      <input
        type="radio"
        value="pc"
        checked={platform === 'pc'}
        onChange={handlePlatformChange}
      />
      PC
    </label>
    <br />
    <label htmlFor="username">Name: </label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={handleNameChange}
    />
    <br />
    <button type="submit" value="send">
      Send
    </button>
  </form>
)

FormComponent.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  handlePlatformChange: PropTypes.func.isRequired,
  fetchRequest: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default FormComponent
