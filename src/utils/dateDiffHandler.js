import * as dayjs from 'dayjs';

const dateDiffHandler = (oldtime) => {
  const timeDiff = dayjs().millisecond() - dayjs(oldtime).millisecond();
  return timeDiff;
};

export default dateDiffHandler;
