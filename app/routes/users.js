const jwt = require('koa-jwt');
const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const {
  find, findById, create, update,
  delete: del, login, checkOwner,
  listFollowing, listFollowers,
  checkUserExist, follow, unfollow,
  listFollowingTopics, followTopic, unfollowTopic,
  listQuestions,
  listLikingAnswers, likeAnswer, unlikeAnswer,
  listDislikingAnswers, dislikeAnswer, undislikeAnswer,
  listCollectingAnswers, collectAnswer, uncollectAnswer,
} = require('../controllers/users');

const { checkTopicExist } = require('../controllers/topics');
const { checkAnswerExist } = require('../controllers/answers');

const { secret } = require('../config');

const auth = jwt({ secret });

router.get('/', find);//获取所有用户
router.post('/', create);//创建新用户
router.get('/:id', findById);//查找
router.patch('/:id', auth, checkOwner, update);//更新
router.delete('/:id', auth, checkOwner, del);//删除
router.post('/login', login);//登陆
router.get('/:id/following', listFollowing);//查找某用户的关注者
router.get('/:id/followers', listFollowers);//查找某用户的粉丝
router.put('/following/:id', auth, checkUserExist, follow);//关注某人
router.delete('/following/:id', auth, checkUserExist, unfollow);//取消关注
router.get('/:id/followingTopics', listFollowingTopics);//关注的话题
router.put('/followingTopics/:id', auth, checkTopicExist, followTopic);//修改话题
router.delete('/followingTopics/:id', auth, checkTopicExist, unfollowTopic);//删除话题
router.get('/:id/questions', listQuestions);//获取回复
router.get('/:id/likingAnswers', listLikingAnswers);//关联的
router.put('/likingAnswers/:id', auth, checkAnswerExist, likeAnswer, undislikeAnswer);
router.delete('/likingAnswers/:id', auth, checkAnswerExist, unlikeAnswer);
router.get('/:id/dislikingAnswers', listDislikingAnswers);
router.put('/dislikingAnswers/:id', auth, checkAnswerExist, dislikeAnswer, unlikeAnswer);
router.delete('/dislikingAnswers/:id', auth, checkAnswerExist, undislikeAnswer);
router.get('/:id/collectingAnswers', listCollectingAnswers);
router.put('/collectingAnswers/:id', auth, checkAnswerExist, collectAnswer);
router.delete('/collectingAnswers/:id', auth, checkAnswerExist, uncollectAnswer);

module.exports = router;