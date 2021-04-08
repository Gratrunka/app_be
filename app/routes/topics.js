const jwt = require('koa-jwt');
const Router = require('koa-router');
const router = new Router({ prefix: '/topics' });
const {
  find, findById, create, update,
  checkTopicExist, listFollowers,
  listQuestions,
} = require('../controllers/topics');

const { secret } = require('../config');

const auth = jwt({ secret });

router.get('/', find);//所有话题
router.post('/', auth, create);//创建话题
router.get('/:id', checkTopicExist, findById);//获取某个话题
router.patch('/:id', auth, checkTopicExist, update);//更新话题
router.get('/:id/followers', checkTopicExist, listFollowers);//话题的粉丝
router.get('/:id/questions', checkTopicExist, listQuestions);//话题的回复

module.exports = router;