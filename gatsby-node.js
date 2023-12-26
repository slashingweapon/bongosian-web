
exports.createPages = ({graphql, actions}) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/hungry',
    toPath: '/books/hungry-new-world/',
    isPermanent: false
  })
  createRedirect({
    fromPath: '/subscribe',
    toPath: '/news',
    isPermanent: true
  })
}
