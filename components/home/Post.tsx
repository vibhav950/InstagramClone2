import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { icons } from '../../data/icons'; // Import icon data

interface PostType {
  user: string;
  profilePic: string;
  imageUrl: string;
  verified: number;
  likes: number;
  caption: string;
  comments: CommentType[];
}

interface CommentType {
  user: string;
  comment: string;
}

const defaultProps: Partial<PostType> = {
  verified: 0, // provide a default value for the 'verified' prop if not provided
};

const Post = ({ post }: { post: PostType }) => {
    const mergedPost = { ...defaultProps, ...post };
  
    const [likeActive, setLikeActive] = useState(0);
    const [saveActive, setSaveActive] = useState(0);
  
    return (
      <View style={styles.container}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={mergedPost} />
        <PostImage post={mergedPost} />
        <View style={styles.marginContent}>
          <PostFooter
            likeActive={likeActive}
            setLikeActive={setLikeActive}
            saveActive={saveActive}
            setSaveActive={setSaveActive}
          />
          <Likes post={mergedPost} />
          <Caption post={mergedPost} />
          <CommentSection post={mergedPost} />
          {/* <Comments post={mergedPost}/> */}
        </View>
      </View>
    );
  };
  

const PostHeader = ({ post }: { post: PostType }) => (
  <View style={styles.headerContainer}>
    <View style={styles.headerLeft}>
      <Image source={{ uri: post.profilePic }} style={styles.story} />
      <Text style={styles.username}>{post.user}</Text>
      {post.verified === 1 && <VerifiedIcon />}
    </View>

    <View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/ellipsis-vertical.png')}
          style={styles.ellipsis}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const PostImage = ({ post }: { post: PostType }) => (
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: post.imageUrl }}
      style={styles.image}
    />
  </View>
);

const VerifiedIcon = () => (
  <Image
    source={require('../../assets/icons/verified.png')}
    style={styles.verifiedIcon}
  />
);

const PostFooter = ({ likeActive, setLikeActive, saveActive, setSaveActive }: { likeActive: number, setLikeActive: React.Dispatch<React.SetStateAction<number>>, saveActive: number, setSaveActive: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.leftFooterIconContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setLikeActive(likeActive === 1 ? 0 : 1)}>
          <Image
            style={styles.footerIcon}
            source={likeActive === 1 ? icons[0].activeImg : icons[0].inactiveImg}
          />
        </TouchableOpacity>

        <Image
          style={styles.footerIcon}
          source={require('../../assets/icons/bubble-chat.png')}
        />

        <Image
          style={styles.footerIcon}
          source={require('../../assets/icons/send.png')}
        />
      </View>

      <View style={styles.rightFooterIconContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSaveActive(saveActive === 1 ? 0 : 1)}>
          <Image
            style={styles.footerIcon}
            source={saveActive === 1 ? icons[1].activeImg : icons[1].inactiveImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Likes = ({ post }: { post: PostType }) => (
  <View style={styles.likesContainer}>
    <Text style={styles.likesText}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({ post }: { post: PostType }) => (
  <View style={styles.captionContainer}>
    <Text style={styles.captionText}>
      <Text style={styles.captionUsername}>{post.user}</Text>
      <Text>
        {post.caption.length > 119
          ? ` ${post.caption.slice(0, 106)}`
          : ` ${post.caption}`}
        {post.caption.length > 119 && (
          <Text style={styles.captionMore}>{'... more'}</Text>
        )}
      </Text>
    </Text>
  </View>
);

const CommentSection = ({ post }: { post: PostType }) => (
  <View style={styles.commentSection}>
    {post.comments.length > 0 && (
      <Text style={styles.commentText}>
        View {post.comments.length > 1 ? 'all ' : ' '}
        {post.comments.length > 1 ? `${post.comments.length} ` : ''}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);

const Comments = ({ post }: { post: PostType }) => (
  <View style={styles.commentsContainer}>
    {post.comments.map((comment, index) => (
      <View key={index} style={styles.commentRow}>
        <Text style={styles.commentText}>
          <Text style={styles.commentUsername}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  marginContent: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ffffff',
  },
  username: {
    color: 'black',
    marginLeft: 5,
    fontWeight: '700',
  },
  verifiedIcon: {
    width: 15,
    height: 15,
    marginLeft: 4,
  },
  ellipsis: {
    width: 25,
    height: 25,
  },
  imageContainer: {
    width: '100%',
    height: 450,
  },
  image: {
    height: '100%',
    width: 'auto',
    resizeMode: 'cover',
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: -2,
    marginLeft: -3,
  },
  leftFooterIconContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginTop: -3,
  },
  rightFooterIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  likesContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  likesText: {
    color: 'black',
    fontWeight: '500',
  },
  captionContainer: {
    marginTop: 0,
  },
  captionText: {
    color: 'black',
  },
  captionUsername: {
    fontWeight: '500',
  },
  captionMore: {
    color: 'grey',
  },
  commentSection: {
    marginTop: 1.75,
  },
  commentText: {
    color: 'grey',
  },
  commentsContainer: {
    marginTop: 0,
  },
  commentRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  commentUsername: {
    fontWeight: '600',
  },
});

export default Post;
