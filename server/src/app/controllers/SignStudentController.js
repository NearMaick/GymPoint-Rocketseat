import Student from '../models/Student';

class SignStudentController {
  async index(req, res) {
    const { id } = req.params;

    const sign = await Student.findOne({
      where: { id },
    });

    return res.json(sign);
  }
}

export default new SignStudentController();
