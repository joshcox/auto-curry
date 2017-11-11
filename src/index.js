import template from 'babel-template'




// TODO: to be removed
// eslint-disable-next-line
export default ({ types: t }) => {
  return {
    visitor: {
      ArrowFunctionExpression(path, { opts }) {
          path.replaceWith(t.stringLiteral('Josh is a dork'));
      }
    }
  };
};
