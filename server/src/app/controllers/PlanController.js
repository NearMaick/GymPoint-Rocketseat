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

  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new PlanController();
