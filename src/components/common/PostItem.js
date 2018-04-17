import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';

class PostItem extends Component {
  render() {
    return (
      <Card>
        <CardTitle
          style={{ cursor: 'pointer' }}
          title={this.props.post.title}
          onClick={() => {
            console.log('card title clicked');
          }}
        />
        <CardText>{this.props.post.body}</CardText>

        <CardActions>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Chip style={{ marginRight: 2 }}>{`${this.props.post.commentCount} Comments`}</Chip>
            <Chip>{`${this.props.post.voteScore} Votes`}</Chip>
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

export default PostItem;
