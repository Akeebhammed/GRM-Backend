const Contact = require("../models/contact");

const contacts = require("../data/contacts.json");

const CONTACT_PER_PAGE = 20;

exports.createContact = (req, res, next) => {
  Contact.collection
    .insertMany(contacts, { safe: true }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Multiple contact inserted to collection");
      }
    })
    .then((result) => {
      res.status(201).json({
        message: "contact data created successfuly",
      });
    });
};

exports.getContacts = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * CONTACT_PER_PAGE;
  let contactState = req.query.contactState;
  const query = {};
  let totalItems;
  let totalPages;
  let totalFailed;
  let totalExecuting;
  if (contactState) {
    query.contactState = contactState;
  }
  Contact.find({ contactState: "failed" })
    .count()
    .then((numFailed) => {
      totalFailed = numFailed;
    });
  Contact.find({ contactState: "executing" })
    .count()
    .then((numExecuting) => {
      totalExecuting = numExecuting;
    });
  Contact.find()
    .count()
    .then((numContacts) => {
      totalItems = numContacts;
      totalPages = Math.ceil(numContacts / CONTACT_PER_PAGE);
      return Contact.find(query).skip(skip).limit(CONTACT_PER_PAGE);
    })
    .then((contacts) => {
      res.status(201).json({
        contacts: contacts,
        totalItems: totalItems,
        totalPages: totalPages,
        totalFailed: totalFailed,
        totalExecuting: totalExecuting,
        message: "Contacts data fetched successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
