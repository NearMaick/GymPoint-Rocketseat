import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const { userId } = req;

    const { name, email, age, weight, height } = req.body;

    const user = await Student.create({
      user_id: userId,
      name,
      email,
      age,
      weight,
      height,
    });

    return res.json(user);
  }

  async update(req, res) {
    const student = await Student.findByPk(req.params.id);

    await student.update(req.body);

    return res.json(student);
  }

  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new StudentController();
