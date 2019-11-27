import Checkin from '../models/Checkin';

class CheckinController {
  async store(req, res) {
    const { id } = req.params;

    const checkin = await Checkin.create({
      student_id: id,
    });

    return res.json(checkin);
  }

  async index(req, res) {
    const { id } = req.params;

    const checkins = await Checkin.findAll({ where: { student_id: id } });

    return res.json(checkins);
  }
}

export default new CheckinController();
