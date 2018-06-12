import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, List } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Delete from 'material-ui/svg-icons/action/delete';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Edit from 'material-ui/svg-icons/image/edit';

class CommentItem extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        <div>
          <ListItem primaryText={comment.body} />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'row wrap',
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <Chip onClick={() => console.log('vote up')}>
            <Avatar icon={<ThumbUp />} color="#444" />
            {comment.voteScore} Votes
          </Chip>

          <Chip onClick={() => console.log('vote down')}>
            <Avatar icon={<ThumbDown />} color="#444" />
            Down Votes
          </Chip>

          <Chip onClick={() => console.log('edit comment')}>
            <Avatar icon={<Edit />} color="#444" />
            Edit
          </Chip>

          <Chip onClick={() => console.log(comment.id)}>
            <Avatar icon={<Delete />} color="#444" />
            Remove
          </Chip>
        </div>
        <div>
          <Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ PostReducer }) => {
  const { comments } = PostReducer;
  return {
    comments
  };
};

export default connect(mapStateToProps)(CommentItem);
