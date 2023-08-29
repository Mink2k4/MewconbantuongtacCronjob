const axios = require("axios");
const cron = require("node-cron");
const moment = require("moment");
const sendReq = async (bank,domain) => {
  const respone = await axios.get(
    `https://meoconbantuongtac.com.vn/cronJob/recharge-transfer/${bank}/${domain}`
  );
  if(respone.data){
    console.log(`Co don hang ${bank} moi`)
  }
  else{
    const date = new Date();
    const formatDate = moment(date).format("DD/MM/YYYY HH:mm:ss");
    console.log("Khong co do nao next "+formatDate);
  }

};


cron.schedule("*/10 * * * * *", async () => {
  // await sendReq('momo','meoconbantuongtac.com.vn');
  await sendReq('mbbank','meoconbantuongtac.com.vn');
});
  