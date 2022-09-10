import readingTime from 'reading-time';

export const readTime = (body) => {
  let str;
  for (let i = 0; i < body?.length; i++) {
    if (body[i]?.style) {
      str += body[i]?.children[0]?.text;
    } else {
      str += body[i]?.code;
    }
  }
  return readingTime(str);
};
