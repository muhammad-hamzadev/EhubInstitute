// api/common-answers.js
// Fast, zero-cost keyword matching cache for common institute inquiries for E-Hub Institute Peshawar & Solvia Codes.
// Clean, professional formatting without markdown asterisks, raw ampersands, or clutter.

// Common Roman Urdu indicators
const URDU_INDICATORS = [
  'kya', 'hai', 'hain', 'kaise', 'kese', 'kitna', 'kitne', 'kitni', 'kahan', 'kab',
  'pata', 'baare', 'mein', 'chahiye', 'karna', 'rabta', 'batao', 'bataiye', 'karen',
  'paise', 'kharcha', 'hoga', 'shuru', 'kors', 'dakhla', 'maloomat', 'jee', 'ji',
  'tum', 'kon', 'ho', 'aap', 'kaun', 'apna', 'naam', 'kisne', 'kis', 'ne', 'banaya',
  'developer', 'tumhain', 'tumhein', 'mujhe', 'kider', 'kidhar', 'wahan', 'konse', 'konsa', 'walay',
  'bhejo', 'batao', 'konsi', 'company', 'kaam', 'karte', 'karta', 'ki', 'ka', 'ke', 'k', 'ko', 'se', 'do', 'bhi'
];

function isRomanUrdu(text) {
  const words = text.toLowerCase().replace(/[?.,!]/g, '').split(/\s+/);
  return words.some(w => URDU_INDICATORS.includes(w));
}

const COMMON_ANSWERS = [

  {
    category: 'tefl',
    // TEFL / TESOL inquiries
    keywords: ['tefl', 'tesol', 'itti', 'teacher training', '220 credit'],
    answer_en: 'E-Hub Institute offers the internationally recognized TEFL and TESOL Certification (220 Credit Hours accredited by iTTi-USA) for the first time in Pakistan, enabling you to teach English globally. For registration details, contact: 03320565525.',
    answer_ur: 'E-Hub Institute Pakistan mein pehli martaba internationally recognized TEFL aur TESOL Certification (220 Credit Hours, iTTi-USA) offer kar raha hai jisse aap international certified English teacher ban sakte hain. Rabta: 03320565525.'
  },
 
  {
    category: 'recognition',
    // British Council & Accreditations
    keywords: [
      'british council', 'award', 'partner', 'partnership', 'affiliated', 'itti', 'usa',
      'certification', 'recognized', 'recognition'
    ],
    answer_en: 'E-Hub Institute is a British Council Award Winning Institute and an Official Partner with the British Council. We also offer Pakistans premier iTTi-USA certified TEFL and TESOL program.',
    answer_ur: 'E-Hub Institute British Council Award Winning Institute aur British Council ka Official Partner hai. Iske ilawa hum Pakistan mein iTTi-USA certified TEFL aur TESOL program offer karte hain.'
  },
  {
    category: 'contact',
    // Contact inquiries & WhatsApp
    keywords: [
      'contact', 'rabta', 'phone', 'number', 'email', 'whatsapp', 'call',
      'admissions', 'admission', 'dakhla', 'information desk', 'helpdesk', 'number kya hai'
    ],
    answer_en: 'You can contact E-Hub Institute Peshawar directly:\nPhone and WhatsApp: 03320565525\nAddress: Near Tehkal Bala BRT Stop, University Road, Peshawar\nTimings: 3:30 PM to 7:30 PM (Monday to Saturday)',
    answer_ur: 'Aap E-Hub Institute Peshawar se seedha rabta kar sakte hain:\nPhone aur WhatsApp: 03320565525\nAddress: Near Tehkal Bala BRT Stop, University Road, Peshawar\nTimings: 3:30 PM se 7:30 PM (Monday to Saturday) dastyab hain.'
  },
  {
    category: 'social',
    // Social / Welfare & MWF inquiries
    keywords: [
      'maroof wellbeing', 'maroof wellbeing foundation', 'mwf', 'orphan', 'orphans',
      'free education', 'welfare', 'charity', 'scholarship', 'yateem', 'khawateen'
    ],
    answer_en: 'In partnership with Maroof Wellbeing Foundation (MWF), E-Hub Institute provides free education in English, IELTS, communication, and basic IT for orphans and underprivileged females, along with community welfare initiatives.',
    answer_ur: 'Maroof Wellbeing Foundation (MWF) ke sath milkar E-Hub Institute yateem bachon aur zaroorat-mand khawateen ko English, IELTS aur IT ki free education provide karta hai.'
  },  
];

/**
 * Searches the common answers database for keyword matches.
 * Returns language-appropriate answer (English if asked in English, Roman Urdu if asked in Roman Urdu).
 */
export function findCommonAnswer(message) {
  if (!message || typeof message !== 'string') return null;
  const text = message.toLowerCase().trim();
  const prefersUrdu = isRomanUrdu(text);

  for (const entry of COMMON_ANSWERS) {
    if (entry.keywords.some(keyword => text.includes(keyword))) {
      return prefersUrdu ? entry.answer_ur : entry.answer_en;
    }
  }

  return null;
}
