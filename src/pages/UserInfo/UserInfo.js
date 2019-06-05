import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from 'actions/userInfo'

class UserInfo extends Component {
  render() {
    const {userInfo, isLoading, errorMsg} = this.props.userInfo

    return (
      <div>
        {
          isLoading ? '请求中。。。。' :
          (
            errorMsg ? errorMsg :
            <div>
              <p>拥护信息</p>
              <p>用户名：{userInfo.name}</p>
              <p>介绍： {userInfo.intro}</p>
            </div>
          )
        }
        <button onClick={() => this.props.getUserInfo()}>请求拥护信息</button>
      </div>

    )
  }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo)