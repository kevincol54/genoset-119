var gql = require('gql')

module.exports = gql.or([
  gql.and([
    gql.exact('rs1501299', 'GG'),
    gql.exact('rs2241766', 'TT')
  ]),
  gql.and([
    gql.exact('rs1501299', 'GT'),
    gql.exact('rs2241766', 'TT')
  ]),
  gql.and([
    gql.exact('rs1501299', 'GG'),
    gql.exact('rs2241766', 'GT')
  ])
])
