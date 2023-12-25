
exports.createPages = ({graphql, actions}) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/hungry',
    toPath: '/',
    isPermanent: false
  })
  createRedirect({
    fromPath: '/subscribe',
    toPath: '/news',
    isPermanent: true
  })
}
