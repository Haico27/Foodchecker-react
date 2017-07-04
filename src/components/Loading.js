import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import loadingIcon from '../images/loading_icon.gif'
import { connect } from 'react-redux'
import './Loading.css'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const { loading } = this.props

    if (!loading) return null

    return(
      <div className="loading">
        <img src={ loadingIcon } alt="loading" />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
