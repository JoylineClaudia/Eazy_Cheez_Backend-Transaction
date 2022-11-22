const mongoose = require("mongoose")
var url = "mongodb://localhost:27017/easy_cheez";
const Transaction = require("../schema/transactionSchema");

exports.updateRetailerId = async (req,res,next)=>{
    var transactionId = req.body.id;
    try{
        console.log(req.body)
        await mongoose.connect(url)
        console.log("connected")
        var transaction = await Transaction.findByIdAndUpdate(transactionId,{
            shopOwner: req.body.retailerId
        })
        console.log(transaction)
        mongoose.disconnect()
        res.json("sucess")
      } catch (err){
        res.status(500).json({
          error: err.message
        })
      }
}

exports.updateTransactionStatus = async (req,res,next)=>{
    var transactionId = req.body.id;
    try{
        console.log(req.body)
        await mongoose.connect(url)
        var transaction = await Transaction.findByIdAndUpdate(transactionId,{
            status: req.body.status
        })
        mongoose.disconnect()
        res.json("sucess")
      } catch (err){
        res.status(500).json({
          error: err.message
        })
      }
}