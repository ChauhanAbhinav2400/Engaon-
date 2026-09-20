import fs from 'fs';
import https from 'https';

const urls = {
  'step2_crushing.jpg': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80',
  'step4_thickening.jpg': 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80',
  'step5_setting.jpg': 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=500&q=80',
  'step6_packing.jpg': 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=500&q=80',
  'story_farm.jpg': 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
  'recipe_dish.jpg': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80'
};

for (const [filename, url] of Object.entries(urls)) {
  const filePath = `public/images/${filename}`;
  const file = fs.createWriteStream(filePath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
}
