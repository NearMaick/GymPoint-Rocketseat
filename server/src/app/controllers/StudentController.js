import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const { userId } = req;
    const { name, is_active, email, age, weight, height } = req.body;

    const checkEmail = await Student.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ error: 'Duplicated email' });
    }

    const user = await Student.create({
      user_id: userId,
      is_active,
      name,
      email,
      age,
      weight,
      height,
    });

    return res.json(user);
  }

  async update(req, res) {
    const { userId } = req;
    const { name, is_active, email, age, weight, height } = req.body;

    const student = await Student.findByPk(req.params.id);

    await student.update({
      user_id: userId,
      is_active,
      name,
      email,
      age,
      weight,
      height,
    });

    return res.json(student);
  }

  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new StudentController();
