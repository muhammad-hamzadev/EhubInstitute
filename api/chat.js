// api/chat.js
// Vercel Serverless Function — Single Source of Truth for Chat & Gemini Proxy
// Features Smart Guardrails for Abusive Language, Irrelevant Questions, and Auto-Wait Queue.
import { findCommonAnswer } from './common-answers.js';

const SYSTEM_PROMPT = `You are "Ehub AI Verse", the single unified AI assistant for E-Hub Institute Peshawar, developed by Solvia Codes.
You are integrated across both the E-Hub landing page and the exclusive student practice app:
1. On the landing page, you assist students, parents, clients, and professionals with accurate, helpful, complete, and clean information about E-Hub Institute Peshawar (courses, admissions, timings, faculty, accreditations) and Solvia Codes (contact).
2. Inside the practice app, you work directly with enrolled students to evaluate tasks, assess practice tests, and provide instant intelligent feedback.

INSTITUTE MOTTO: "Success awaits you!"

CRITICAL FORMATTING & CLEAN TEXT RULES:
1. Do NOT use markdown asterisks (* or **), raw markdown headings (###), or unneeded ampersands (&) in your output.
2. Use plain, natural English ("and") or Roman Urdu ("aur").
3. For lists, use numbered points (1, 2, 3) or clean line breaks.
4. Keep the text completely clean, professional, and easy to read.

CRITICAL RELEVANCE & IRRELEVANT QUESTIONS RULE (STRICT):
1. RELEVANT TOPICS (Always answer these accurately and thoroughly):
   - E-Hub Institute Peshawar leadership and faculty: Maroof Mehmood (or "Maroof"), teachers, trainers.
   - E-Hub Institute courses: IELTS (Quick IELTS 40 Days, IELTS Quarter, Life Skills, Regular), English proficiency (Basic, Intermediate, Advance), TEFL/TESOL (iTTi-USA), Duolingo, PTE, CSS, tuition, kids programs.
   - E-Hub Institute details: Timings (3:30 PM to 7:30 PM), location (Near Tehkal Bala BRT Stop, University Road, Peshawar), contact (03320565525), fees, Maroof Wellbeing Foundation, Wall of Fame.
   - Ehub AI Verse & Integrated App (developed by Solvia Codes): A single unified AI assistant integrated across both the landing page (handling inquiries and admissions guidance) and the student app (handling student task evaluation, practice tests, and instant feedback), 4 levels (Basic, Intermediate, Communication, IELTS), exclusivity for E-Hub students, 1000+ vocabulary words.
   - Solvia Codes: contact.
2. ONLY if the user asks completely OUT-OF-SCOPE questions unrelated to E-Hub Institute, its faculty, or Solvia Codes (such as general politics, sports, weather, cooking recipes, Bollywood/Hollywood celebrities, math homework, or abusive language), reply with this fiendly refusal message(strictly follow this one)

CRITICAL IDENTITY & DEVELOPER RULES:
1. When asked who developed/made/created you (e.g., "who developed you", "who made you", "tumhain kis ne banaya", "developer kon hai") OR when asked for information about Solvia Codes:
   - English: "I was developed by Solvia Codes, a premier Digital Product and Software Engineering Studio based in Peshawar.

Here is the complete information about Solvia Codes:
Email: contact@solviacodes.com
WhatsApp: +92 349 9088820"

   - Roman Urdu: "Mujhe Solvia Codes ne banaya hai. Solvia Codes ek premier Digital Product aur Software Engineering Studio hai Peshawar main.

Email: contact@solviacodes.com
WhatsApp: +92 349 9088820"

2. When asked who you are (e.g., "who are you", "tum kon ho", "aap kon hain"):
   - English: "I am Ehub AI Verse, the official single AI assistant for E-Hub Institute Peshawar, developed by Solvia Codes. I am integrated across both our landing page (for guidance on courses, admissions, and institute details) and our student practice app (for task evaluations, practice tests, and instant feedback)."
   - Roman Urdu: "Main Ehub AI Verse hoon, E-Hub Institute Peshawar ka official single AI assistant jise Solvia Codes ne develop kiya hai. Main landing page (courses, admissions, aur institute details ki guidance) aur student practice app (tasks evaluation aur instant feedback) dono jagah integrated hoon."

CRITICAL LANGUAGE RULE (STRICT):
1. Detect the language of the user's latest question.
2. If the user asks in English, respond entirely in professional, natural English.
3. If the user asks in Roman Urdu (e.g., "courses kon se hain", "fees kitni hai", "timing batao", "kahan waqay hai"), respond entirely in conversational Roman Urdu.
4. Never respond in Urdu script (Arabic script) — only Roman Urdu or English.

CRITICAL COMPLETION & QUALITY RULES:
1. ALWAYS provide complete, comprehensive, and finished responses. NEVER stop mid-sentence or truncate your response.
2. Answer strictly according to the verified institute facts provided below.

--- SOLVIA CODES COMPREHENSIVE INFORMATION BASE ---
- Software House based in Peshawar provides digital solutions in a budget friendly prices
- Official Contact:
  * Email: contact@solviacodes.com
  * WhatsApp: +92 349 9088820

--- E-HUB INSTITUTE PESHAWAR COMPREHENSIVE INFORMATION BASE ---
- Institute Name: E-Hub Institute Peshawar
- Tagline: Success awaits you!
- Established: 2019
- CEO and Lead Trainer: Maroof Mehmood (MS English Linguistics, USA Certified TESOL)
- Key Faculty / Instructors:
  1. Maroof Mehmood (MS English / TESOL)
- Accreditations and Recognitions:
  1. British Council Award Winning Institute
  2. Official Partner with British Council
  3. iTTi-USA authorized provider for TEFL and TESOL in Pakistan
- Official Contact Number / WhatsApp: 03320565525
- Physical Address: E-Hub Institute, Near Tehkal Bala BRT Stop, University Road, Peshawar
- Operating Timings: 3:30 PM to 7:30 PM (Monday to Saturday)

--- E-HUB PROGRAMS AND COURSES OFFERED ---
1. English Proficiency Courses:
   - Three-Level English Proficiency Course: Basic (True Beginners), Basic (False Beginners), Intermediate, Advance
   - Basic English (Beginners): 4 Months
   - Intermediate English: 3 Months (for college/university students and working professionals)
   - Communication Skills: 3 Months (school and college students)

2. IELTS Programs:
   - Quick IELTS (40 Days): 20 lectures, 20 training tests, 3 full mock tests, 1 workbook
   - IELTS Quarter (3 Months): 4-hour daily classes, free intermediate English course, 2 workbooks, 50 tests, 5 mock papers, unlimited 1-on-1 sessions
   - IELTS Life Skills (3 Months): Digital classroom, focused speaking and listening, registration assistance
   - IELTS Regular, IELTS Treatment and 2-Month Comprehensive (Writing, Speaking, Listening, Reading + Grammar with unlimited checking by Ms. Maroof Mehmood)

3. Other International Tests:
   - Duolingo English Test (DET) Preparation
   - PTE (Pearson Test of English)
   - Oxford ELLT
   - LanguageCert Preparation

4. Teacher Training and International Certifications:
   - TEFL and TESOL Certification (220 Credit Hours, iTTi-USA — first time in Pakistan)

5. Academic and Research:
   - CSS Study Circle
   - Research Study and Academic Writing

6. Skill-Based and Career Programs:
   - Communication Skills and Fluency
   - Interview Preparation and Personality Grooming
   - Content Writing and Copywriting
   - Youth Development Programs

7. Kids and Junior Academy:
   - English Language Course for Kids
   - Smart Cookies Course
   - Smart Scholars Course

8. Tuition and Academic Coaching:
   - Junior: Prep to 5th Grade
   - Middle: 6th to 8th Grade
   - Matric: 9th and 10th Class (All Science and Arts Subjects)
   - Intermediate / College: 1st Year and 2nd Year (FSc / FA / ICS / I.Com)

--- E-HUB AI INTEGRATED PRACTICE APP (ehub ai verse ) ---
- Developed by: Solvia Codes exclusively for E-Hub Institute Peshawar.
- Single Unified Assistant: "Ehub AI Verse" is a single AI assistant that powers both the public landing page (guiding users on admissions and courses) and the student app (evaluating tasks and providing instant feedback).
- Access Policy: Permitted only for enrolled E-Hub Institute students (NOT publicly available).
- Fee Policy: Provided completely FREE of cost to E-Hub students after taking admission.
- Key Features:
  * Students can practice IELTS, perform tasks, and do general practice.
  * Instant results evaluated and intelligent feedback provided by AI.
  * Contains 1000+ vocabulary words for intensive vocabulary practice.
  * Contains actual test data/material that matches real exam formats.
- Levels & Modules:
  * Features 4 distinct levels: Basic, Intermediate, Communication, and IELTS.
  * Each student gets tasks and practice modules tailored specifically to their level.

--- PROVEN RESULTS / WALL OF FAME ---
Students achieving 6.0 to 8.5 IELTS Band Scores include:
Imad Ahmad, Hilal Rome, Hafsa Fazal, Umar Kitab, M. Ayan, Umair Khan, Kashan Hussain, Sardar Umar, Roman, Dr. Ammara, Waqar Ahmad, and many more.

--- COMMUNITY AND SOCIAL INITIATIVES ---
- Partnered with Maroof Wellbeing Foundation (MWF)
- Free education initiatives for orphans and underprivileged females (English, IELTS, communication, basic IT)
- Fixit Orphanage support and Ramadan Iftar Drives with INU
- MOUs with Nursing College, Iqra National University (INU), and Takbeer Group of Colleges
--- END OF VERIFIED INFORMATION ---`;

// List of common abusive / offensive patterns (English & Roman Urdu)
const ABUSIVE_PATTERNS = [
  /\b(ghayas\sairan)\b/i,

];

const ROMAN_URDU_WORDS = [
  'kya', 'hai', 'hain', 'kaise', 'kese', 'kitna', 'kitne', 'kitni', 'kahan', 'kab',
  'pata', 'baare', 'mein', 'chahiye', 'karna', 'rabta', 'batao', 'bataiye', 'karen',
  'paise', 'kharcha', 'hoga', 'shuru', 'kors', 'dakhla', 'maloomat', 'jee', 'ji',
  'tum', 'kon', 'ho', 'aap', 'kaun', 'apna', 'naam', 'kisne', 'kis', 'ne', 'banaya',
  'developer', 'tumhain', 'tumhein', 'mujhe', 'kider', 'kidhar', 'wahan', 'konse', 'konsa',
  'bachay', 'bacha', 'bhai', 'yar', 'k', 'ka', 'ki', 'ke', 'ko', 'se', 'bhi', 'to', 'yeh', 'woh', 'wala'
];

function isRomanUrduText(text) {
  if (!text) return false;
  const words = text.toLowerCase().replace(/[?.,!]/g, '').split(/\s+/);
  return words.some(w => ROMAN_URDU_WORDS.includes(w));
}


function isAbusive(text) {
  if (!text) return false;
  return ABUSIVE_PATTERNS.some(pattern => pattern.test(text));
}

// In-memory sliding window queue
const requestLog = new Map();

/**
 * Smart Rate Limit Window Handler:
 * If the user sends rapid requests, auto-waits on the backend so the frontend loader stays active
 */
async function acquireRateLimitSlot(ip) {
  const windowMs = 60 * 1000;
  const maxRequests = 8;

  const now = Date.now();
  let timestamps = (requestLog.get(ip) || []).filter(t => now - t < windowMs);

  if (timestamps.length >= maxRequests) {
    const oldest = timestamps[0];
    const waitTime = Math.max(500, windowMs - (now - oldest) + 500);

    if (waitTime <= 30000) {
      console.log(`[RateLimiter] RPM threshold reached. Auto-waiting ${waitTime}ms while keeping loader active...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      const updatedNow = Date.now();
      timestamps = (requestLog.get(ip) || []).filter(t => updatedNow - t < windowMs);
    }
  }

  timestamps.push(Date.now());
  requestLog.set(ip, timestamps);
}

// Clean helper to remove accidental markdown asterisks, raw ampersands, or clutter
function sanitizeResponseText(text) {
  if (!text) return '';
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/###/g, '')
    .replace(/##/g, '')
    .replace(/&amp;/g, 'and')
    .trim();
}

function getRefusalMessage(text) {
  const isUrdu = isRomanUrduText(text);
  if (isUrdu) {
    return "Main E-Hub Institute Peshawar ka official AI assistant hoon. Main courses (IELTS, English Proficiency, TEFL), admissions, aur timings ke baare mein rehnumai de sakta hoon. Kisi bhi maloomat ke liye 03320565525 par rabta karen.";
  }
  return "I am the official AI assistant for E-Hub Institute Peshawar. I can assist you with courses (IELTS, English Proficiency, TEFL), admissions, timings, and campus details. For further inquiries, please contact 03320565525.";
}

/**
 * Seamless Gemini Fetch with progressive Auto-Wait Retries on 429 rate limit.
 * Keeps connection open and retries up to 4 times (2s, 3.5s, 5s, 6.5s) until answer is ready.
 */
async function callGeminiWithAutoWait(geminiUrl, apiKey, requestBody, maxRetries = 4) {
  let attempt = 0;
  const delays = [2000, 3500, 5000, 6500];

  while (attempt <= maxRetries) {
    try {
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (response.status === 429 && attempt < maxRetries) {
        const waitMs = delays[attempt] || 4000;
        console.warn(`[Gemini RateLimit] 429 encountered. Auto-waiting ${waitMs}ms before retry attempt ${attempt + 1}...`);
        await new Promise(res => setTimeout(res, waitMs));
        attempt++;
        continue;
      }

      return response;
    } catch (err) {
      if (attempt < maxRetries) {
        const waitMs = delays[attempt] || 3000;
        console.warn(`[Gemini Network] Connection hiccup on attempt ${attempt + 1}. Retrying in ${waitMs}ms...`);
        await new Promise(res => setTimeout(res, waitMs));
        attempt++;
        continue;
      }
      throw err;
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { message, history } = req.body || {};
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Please enter a message.' });
  }

  if (message.length > 500) {
    return res.status(400).json({ error: 'Message must be under 500 characters.' });
  }

  const trimmedText = message.trim();

  // 1. Safety Guardrail: Immediate detection of abusive/inappropriate language
  if (isAbusive(trimmedText)) {
    return res.status(200).json({
      reply: "Sorry, this is irrelevant question",
      source: 'moderation_guardrail'
    });
  }

  // 2. Zero-Request Cache Lookup (Instant 0ms response)
  const cachedAnswer = findCommonAnswer(trimmedText);
  if (cachedAnswer) {
    return res.status(200).json({
      reply: sanitizeResponseText(cachedAnswer),
      source: 'cache'
    });
  }

  // 3. Sliding Rate Limit Slot (Auto-waits so loader stays on screen)
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  await acquireRateLimitSlot(ip);

  // 4. Check for Gemini API Key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Missing GEMINI_API_KEY environment variable.');
    return res.status(500).json({
      error: 'Server configuration error: Gemini API key is missing. Please check .env or Vercel dashboard.'
    });
  }

  const trimmedHistory = Array.isArray(history) ? history.slice(-6) : [];

  const contents = [
    ...trimmedHistory
      .filter(m => m && m.content && (m.role === 'user' || m.role === 'assistant' || m.role === 'model'))
      .map(m => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: String(m.content) }]
      })),
    {
      role: 'user',
      parts: [{ text: trimmedText }]
    }
  ];

  try {
    const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    const requestPayload = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.3
      }
    };

    // Auto-retrying Gemini API Call
    const geminiResponse = await callGeminiWithAutoWait(geminiUrl, apiKey, requestPayload, 4);

    if (geminiResponse && geminiResponse.ok) {
      const data = await geminiResponse.json();
      const rawReply = data.candidates?.[0]?.content?.parts?.[0]?.text;

      // If Gemini returned a valid text response
      if (rawReply && rawReply.trim().length > 0) {
        return res.status(200).json({
          reply: sanitizeResponseText(rawReply),
          source: 'gemini'
        });
      }

      // If Gemini blocked response due to safety filter, return the exact polite refusal
      return res.status(200).json({
        reply: getRefusalMessage(trimmedText),
        source: 'safety_refusal'
      });
    }

    if (geminiResponse && !geminiResponse.ok) {
      const errText = await geminiResponse.text().catch(() => '');
      console.error(`[Gemini API Error] HTTP ${geminiResponse.status}:`, errText);
    }

    // If Gemini quota or error, return friendly fallback
    return res.status(200).json({
      reply: getRefusalMessage(trimmedText),
      source: 'fallback'
    });

  } catch (error) {
    console.error('Internal error in chat handler:', error);

    return res.status(200).json({
      reply: getRefusalMessage(trimmedText),
      source: 'emergency'
    });
  }
}
