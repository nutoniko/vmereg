const path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            modules: [
                /**
                 * this meanse you can get rid of dot hell
                 * for example import 'components/Foo' instead of import '../../components/Foo'
                 */
              path.join('./node_modules'),
              path.join('./src')
            ]
          }
      }
}