import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './LoadError.css'

export class LoadError extends PureComponent {


  render() {
    const { error } = this.props

    if (!error) return null

    return(
      <div className="loaderror">
        <h2>Load Error</h2>
        <p>{ error }</p>
      </div>
    )
  }
}

const mapStateToProps = ({ loadError }) => ({ error: loadError })

export default connect(mapStateToProps)(LoadError)
