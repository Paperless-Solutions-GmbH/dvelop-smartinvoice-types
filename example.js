const invoice = require("dvelop-smartinvoice-types");
/** @type {Scripting.RequestHandler} */
module.exports = async (req, res) => {
  /** @type {import("dvelop-smartinvoice-types").Transfer} */
  const transfer = invoice.parseTransfer(req.json().transfer);

  console.log(transfer);
  // Access to the request body (only possible with the POST, PUT and PATCH methods)
  // let body = req.json();
  // if (!body || !body.name) {
  //     res.status(400).set("Content-Type", "text/plain").send("Bad request");
  //     return;
  // }

  res.status(200).json({
    success: true,
  });
};
