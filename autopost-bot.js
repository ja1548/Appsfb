import fetch from "node-fetch";

const PAGE_ID = 779444491928165; // Ganti dengan ID halaman kamu
const ACCESS_TOKEN = process.env.FB_PAGE_TOKEN;
const IMAGE_URL = "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lvjfxh4e4lq6f4";
const MESSAGE = "🔥 Promo Shopee Affiliate Terbaru! Belanja hemat, untung cepat! Cek di sini 👉 https://id.shp.ee/e2eqze5?smtt=0.0.9";

async function postToFacebook() {
  try {
    const res = await fetch(`https://graph.facebook.com/${PAGE_ID}/photos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caption: MESSAGE,
        url: IMAGE_URL,
        access_token: ACCESS_TOKEN,
      }),
    });

    const data = await res.json();
    console.log("📢 Hasil posting:", data);
  } catch (err) {
    console.error("❌ Gagal posting:", err);
  }
}

postToFacebook();
