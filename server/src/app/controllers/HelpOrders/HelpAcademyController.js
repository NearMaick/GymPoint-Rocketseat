import HelpOrder from '../../models/HelpOrder';

class HelpAcademyController {
  async update(req, res) {
    const { answer } = req.body;

    const order = await HelpOrder.findByPk(req.params.id);

    const date = new Date();

    await order.update({
      answer,
      answer_at: date,
    });

    return res.json(order);
  }

  async index(req, res) {
    const order = await HelpOrder.findAll({
      where: { answer: null },
    });

    return res.json(order);
  }
}

export default new HelpAcademyController();
