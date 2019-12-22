import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const checkEmail = await Student.findOne({
      where: { email: req.body.email },
    });

    if (checkEmail) {
      return res.status(400).json({ error: 'Duplicated email' });
    }

    const { userId } = req;
    const { name, is_active, email, age, weight, height } = req.body;

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
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { userId } = req;
    const { name, is_active, email, age, weight, height } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email },
      });

      if (studentExists) {
        return res.status(400).json({ error: 'Email already exists' });
      }
    }

    await student.update({
      user_id: userId,
      name,
      email,
      age,
      weight,
      height,
    });

    return res.json(student);
  }

  async index(req, res) {
    const { q } = req.query;
    let students;

    if (q === '') {
      students = await Student.findAll();
    } else {
      students = await Student.findAll({
        where: { name: { [Op.iLike]: `%${q}%` } },
      });
    }

    return res.json(students);
  }
}

export default new StudentController();
