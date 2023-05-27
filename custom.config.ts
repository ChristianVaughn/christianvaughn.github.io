const liveURL = process.env.NODE_ENV === 'development' ? '' : '';
const imagePath= process.env.NODE_ENV === 'development' ? '/images' : '/images';

export {
  imagePath,
  liveURL
}