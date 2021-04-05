function CalculateIntraday(controlID) {
    debugger;
    rowNumber = getRowNumber(controlID);
    document.getElementById("Buy"+rowNumber).value = document.getElementById("Buy"+rowNumber).value.replace(",","")
 
    buyPrice = parseFloat(document.getElementById("Buy"+rowNumber).value)
    purchaseQty =  parseFloat(document.getElementById("qty"+rowNumber).value)
    targetPercent = document.getElementById("tgtPercent").value
    stopLossPercent = document.getElementById("slPercent").value
 
    target = buyPrice + (buyPrice * (targetPercent/100))
    stopLoss = buyPrice - (buyPrice * (stopLossPercent/100))
    sellPrice = target
 
    document.getElementById("Target"+rowNumber).value = target.toFixed(2);
    document.getElementById("SL"+rowNumber).value = stopLoss.toFixed(2);
    
    turnOver = (buyPrice + sellPrice) * purchaseQty
    brokerage = Math.min(turnOver * 0.0003, 40)
    STT = (sellPrice * purchaseQty) * 0.00025
    tranCharges = turnOver * 0.0000345
    sebiCharges = turnOver * 0.0000005
    GST = (brokerage + tranCharges) * 0.18
    stampDuty = turnOver * 0.000015
 
    totalCharges = parseFloat(brokerage) + Math.round(parseFloat(STT)) + parseFloat(tranCharges) + parseFloat(sebiCharges) + parseFloat(GST) + parseFloat(stampDuty);
    document.getElementById("Brokerage"+rowNumber).value = totalCharges.toFixed(2)
 
    breakEven = ((buyPrice * purchaseQty) + totalCharges)/purchaseQty
    document.getElementById("Breakeven"+rowNumber).value = breakEven.toFixed(2)
 }
 
 function CalculateDelivery(controlID) {
  debugger;
    rowNumber = getRowNumber(controlID);
    document.getElementById("Buy"+rowNumber).value = document.getElementById("Buy"+rowNumber).value.replace(",","")
 
    buyPrice = parseFloat(document.getElementById("Buy"+rowNumber).value)
    purchaseQty =  parseFloat(document.getElementById("qty"+rowNumber).value)
    targetPercent = document.getElementById("tgtPercentDelivery").value
    
 
    target = buyPrice + (buyPrice * (targetPercent/100))
    sellPrice = target
    profit = (target.toFixed(2) - buyPrice.toFixed(2)) * purchaseQty
 
    turnOver = (buyPrice + sellPrice) * purchaseQty
    turnOver = turnOver.toFixed(2)
    brokerage = 0
    STT = parseFloat(turnOver * 0.001)
    tranCharges = parseFloat(turnOver * 0.0000345)
    sebiCharges = parseFloat(turnOver * 0.0000005)
    GST = parseFloat((brokerage + tranCharges) * 0.18)
    stampDuty = parseFloat(buyPrice * purchaseQty * 0.00015)
 
    var totalCharges = parseFloat(brokerage) + Math.round(parseFloat(STT)) + parseFloat(tranCharges) + parseFloat(sebiCharges) + parseFloat(GST) + parseFloat(stampDuty);
    
    
    //  alert(totalCharges); 
      document.getElementById("Brokerage"+rowNumber).value = totalCharges.toFixed(2)
  
      breakEven = ((buyPrice * purchaseQty) + totalCharges)/purchaseQty
      document.getElementById("Breakeven"+rowNumber).value = breakEven.toFixed(2)
  
      document.getElementById("Target"+rowNumber).value = target.toFixed(2);
      document.getElementById("Profit"+rowNumber).value = (profit - totalCharges).toFixed(2);
    
 }
 
 function getRowNumber(ctrolId)
 {
     //find the digit in the control id
     var r = /\d+/;
     //alert (ctrolId.match(r));
     return ctrolId.match(r)
 }
 
 function ChangeTargetIntraDay()
 {
     //debugger;
     for (rowCount = 1; rowCount <= 4; rowCount++) {
         if(document.getElementById("qty"+rowCount).value != "")
            CalculateIntraday("qty"+rowCount);
     }
 }
 
 function ChangeTargetIntraDayDelivery()
 {
     //debugger;
     for (rowCount = 7; rowCount <= 8; rowCount++) {
         if(document.getElementById("qty"+rowCount).value != "")
         CalculateDelivery("qty"+rowCount);
     }
 }
 
 function ClearValues(controlID)
 {
     rowNumber = getRowNumber(controlID);
     document.getElementById("qty"+rowNumber).value = ""
     document.getElementById("Buy"+rowNumber).value = ""
     document.getElementById("Target"+rowNumber).value = ""
     document.getElementById("SL"+rowNumber).value = ""
     document.getElementById("Brokerage"+rowNumber).value = ""
     document.getElementById("Breakeven"+rowNumber).value = ""
     document.getElementById("script"+rowNumber).value = ""
 }