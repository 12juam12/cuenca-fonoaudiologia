const dbConnection = require("../core/dbConnection");

const selectData = () => {
  const SELECT_ALL_DATA_QUERY =
    `SELECT * FROM railway.pacientes ORDER by id DESC LIMIT 1`
  return SELECT_ALL_DATA_QUERY;
}

const addPaciente = (nombre , dni) => {
  const ADD_PACIENTE_QUERY =
  `INSERT INTO railway.pacientes (dni, nombre) values (${dni} , '${nombre}');`
  return ADD_PACIENTE_QUERY;
}

const DataController = {
  getData: async (req, res, next) => {
    const userType = req.params.userType;
    dbConnection.query(selectData(), function (err, rows) {
      if (err) {
        next(err);
      } else {
        res.setHeader("Content-Type", "application/json");
        res.json(rows);
      }
    });
  },
  postData: async (req, res, next) => {
    const { nombre, dni } = req.body;
    dbConnection.query(addPaciente(nombre, dni), function (err, rows) {
      if (err) {
        next(err);
      } else {
        res.setHeader("Content-Type", "application/json");
        res.json({ status: 'Paciente Agregado'});
      }
    });
  },
};

module.exports = DataController;
