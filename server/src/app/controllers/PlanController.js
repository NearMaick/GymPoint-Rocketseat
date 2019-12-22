import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const { userId } = req;

    const { title, duration, price } = req.body;

    const plan = await Plan.create({
      user_id: userId,
      title,
      duration,
      price,
    });

    return res.json(plan);
  }

  async update(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    await plan.update(req.body);

    return res.json(plan);
  }

  async delete(req, res) {
    Plan.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json();
  }

  async index(req, res) {
    const plansList = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
    });

    return res.json(plansList);
  }
}

export default new PlanController();
