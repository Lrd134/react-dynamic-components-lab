//your code here
import React, {Component} from React;

class Comment extends Component {
  render() {
    return (
      <div>{this.props.commentText}</div>
    )
  }
}

export default Comment;