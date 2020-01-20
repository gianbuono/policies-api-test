var express = require('express');
var router = express.Router();
const policiesController = require('../controllers/PoliciesController')
/* GET users listing. */
router.get('/', policiesController.get);
router.get('/:policyId/user', policiesController.getUserByPolicyNumber);

module.exports = router;
