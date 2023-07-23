const Post = ({ userName, firstName, lastName, content }) => {
  return (
    <div className='card'>
      <div className='card-header d-flex justify-content-between'>
        <div>
          <img
            src='https://picsum.photos/32'
            className='rounded-circle'
            alt='img-fluid'
          />{' '}
          <strong>Sankesh Jain</strong> • @chicku97
        </div>
        <div>1min</div>
      </div>
      <div className='card-body'>
        <p className='card-text'>
          Non programmers on my timeline. Attention.
          <br /> After placing 100+ programmers i in top Indian startups, I am
          thinking of coming up with a program for business roles as well.
          <br /> Interested in helping me build this course? Join the telegram
          group (in next tweet)
        </p>
      </div>
      <div className='card-footer d-flex justify-content-around bg-teal '>
        <span>
          <i className='bi bi-heart'></i>
        </span>
        <span>
          <i className='bi bi-chat-left'></i>
        </span>
        <span>
          <i className='bi bi-share'></i>
        </span>
        <span>
          <i className='bi bi-pencil-square'></i>
        </span>
      </div>
    </div>
  );
};
export default Post;
