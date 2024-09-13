import Payment from "../models/paymentModel.js";

export const createPayment = async (req, res) => {
  const { itemName, price } = req.body;
  try {
    const payment = await Payment.create({
      itemName: itemName,
      price: price
    })
    res.status(201).json(payment)
  } catch (err) {
    res.status(500).json({ error: err, message: "Couldn't create" })
  }
}

export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll()
    res.status(200).json(payments)
  } catch (err) {
    res.status(500).json({ error: err, message: "Couldn't find any payments" })
  }
}

export const getPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payment.findByPk(id);
    if (payment) {
      res.status(200).json(payment)
    } else {
      res.status(404).json({ message: "Payment not found" })
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching payment", error: err })
  }
}

export const deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payment.findByPk(id);
    if (payment) {
      await payment.destroy();
      res.status(200).json({ message: "Payment deleted successfully" });
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting payment", error });
  }
}