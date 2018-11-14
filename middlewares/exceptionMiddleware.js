export const exceptionMiddleware = (store) => {
  return (next) => {
    return (action) => {
      try {
        next(action);
      } catch (err) {
        console.log('错误报告：', err);
      }
    }
  };
};
