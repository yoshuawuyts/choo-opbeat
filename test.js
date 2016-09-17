const test = require('tape')
const chooOpbeat = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(chooOpbeat)
})
