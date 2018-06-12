import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Comments from 'material-ui/svg-icons/communication/comment';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Delete from 'material-ui/svg-icons/action/delete';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import moment from 'moment';
import { appEditPost } from 'actions';

class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <Card style={{ margin: 10 }}>
        <Link to="/edit">
          <CardTitle
            style={{ cursor: 'pointer' }}
            title={post.title}
            onClick={() => {
              this.props.appEditPost(post);
            }}
          />
        </Link>

        <CardText>{post.body}</CardText>

        <CardActions>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Chip style={{ marginRight: 8 }} onClick={() => console.log('comments clicked')}>
              <Avatar color="#444" icon={<Comments />} />
              {post.commentCount} Comments
            </Chip>
            <Chip style={{ marginRight: 8 }} onClick={() => console.log('thumbs up clicked')}>
              <Avatar color="#444" icon={<ThumbUp />} />
              {post.voteScore} Votes
            </Chip>
            <Chip style={{ marginRight: 8 }}>
              <Avatar color="#444" icon={<DateRange />} />
              {moment(post.timestamp).format('ddd, MMM Do YYYY')}
            </Chip>
            <Chip onClick={() => console.log('remove: ', post.id)}>
              <Avatar color="#444" icon={<Delete />} />
              Remove
            </Chip>
          </div>
        </CardActions>
      </Card>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default connect(null, { appEditPost })(PostItem);
