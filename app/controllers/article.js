const Aricle = require('../models/article');
// const User = require('../models/users');
// const Question = require('../models/questions');

class ArticleCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await Topic
      .find({ name: new RegExp(ctx.query.q) })
      .limit(perPage).skip(page * perPage);
  }
  async findById(ctx) {
    const { fields = '' } = ctx.query;
    const selectFields = fields.split(';').filter(f => f).map(f => ' +' + f).join('');
    const detail = await Aricle.findById(ctx.params.id).select(selectFields);
    ctx.body = detail;
  }
}

module.exports = new ArticleCtl();