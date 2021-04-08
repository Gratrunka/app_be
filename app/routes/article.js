const Router = require('koa-router');
const router = new Router({ prefix: '/article' });
const {
  find, findById
} = require('../controllers/article');

const { secret } = require('../config');

// const auth = jwt({ secret });

router.get('/', find);//获取所有文章
// router.post('/', auth, create);//发表文章
router.get('/:id', findById);//获取文章详情
// router.patch('/:id', auth, checkCommentExist, checkCommentator, update);
// router.delete('/:id', auth, checkCommentExist, checkCommentator, del);

module.exports = router;