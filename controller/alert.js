const Alert = require("../models/alert");

const alerts = require("../data/alerts.json");

exports.createAlert = (req, res, next) => {
  Alert.collection
    .insertMany(alerts, { safe: true }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Multiple data inserted to collection");
      }
    })
    .then((result) => {
      res.status(201).json({
        message: "alert created successfully",
      });
    });
};

exports.getSeverity = (req, res, next) => {
  let errorSeverity = req.query.errorSeverity;
  let errorCategory = req.query.errorCategory;
  const sortBy = req.query.sortBy || "title";
  const sortOrder = req.query.sortOrder || "asc";
  const query = {};
  if (errorSeverity) {
    query.errorSeverity = errorSeverity;
  }
  if (errorCategory) {
    query.errorCategory = errorCategory;
  }
  Alert.find(query)
    .sort([[sortBy, sortOrder]])
    .then((result) => {
      res.status(201).json({
        message: "Alerts filtered successfully",
        alerts: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
