import React from 'react'
import PropTypes from 'prop-types'

const ResultsComp = ({ stats }) => (
  <div>
    {stats && stats.epicUserHandle ? (
      <h3>Stats for: {stats.epicUserHandle}</h3>
    ) : null}
    {JSON.stringify(stats.lifetimeStats)}
  </div>
)

ResultsComp.propTypes = {
  stats: PropTypes.object.isRequired,
}

export default ResultsComp
