# CHEERS55 – Deployment Guide
## Smart Student Hub · Powered by TIDO AI · NIT Tanzania

---

## WHAT'S IN THIS PACKAGE

```
cheers55-final/
├── login.html       ← Entry point — Student & Lecturer login/register
├── index.html       ← Student dashboard (8 tabs)
├── lecturer.html    ← Lecturer portal (5 tabs)
├── premium.html     ← Premium upgrade · TZS 500
├── shared.js        ← Shared auth & storage utilities
├── sw.js            ← Service worker (offline + push)
├── manifest.json    ← PWA install config
├── icons/           ← App icons
│   ├── icon-192.png
│   └── icon-512.png
└── GUIDE.md         ← This file
```

---

## DEPLOY IN 5 MINUTES (Beginner)

### Step 1 — Go to Netlify
1. Open **netlify.com** in your browser
2. Click **Sign up** → use your Google or email account

### Step 2 — Deploy
1. After signing in, click **Sites** on the left
2. Find the drag & drop box: **"Drag and drop your site folder here"**
3. Unzip the package and drag the **`cheers55-final`** folder into that box
4. Wait 30 seconds → ✅ Your app is LIVE!

### Step 3 — Get Your Link
Netlify gives you a link like: `https://random-name-123.netlify.app`

**Optional:** Click Site settings → Change site name → e.g. `cheers55-nit`
Your link becomes: `https://cheers55-nit.netlify.app`

### Step 4 — Install on Phone

**Android (Chrome):**
1. Open Chrome → go to your link
2. Banner appears: **"Add CHEERS55 to Home Screen"** → tap Install ✅

**iPhone (Safari):**
1. Open Safari → go to your link
2. Tap Share button → **"Add to Home Screen"** → Add ✅

---

## HOW IT WORKS

### Student Login
- Register with Full Name, Username, Phone, Password
- Select **Student** role on login page
- Dashboard has 8 tabs: Today, Week, Modules, TIDO AI, Downloads, Calendar, Profile, Alerts

### Lecturer Login
- Register with same details + Department + Modules taught
- Select **Lecturer** role on login page
- Separate lecturer portal with 5 tabs: Notify, Notes, History, Profile, Settings

### Lecturer Notifications → Students
1. Lecturer logs in → goes to **Notify** tab
2. Selects type: ✅ Will Attend / ❌ Won't Attend / 🚫 Cancelled / 📅 Rescheduled
3. Selects module, writes message → taps **Send**
4. All students see the alert bar at the top of their **Today** tab immediately

### Lecturer Notes → Students
1. Lecturer → **Notes** tab → writes notes → taps Publish
2. Students see new notes appear in their **Downloads** tab under "Notes"
3. Students can read notes directly in the app or save for offline

---

## PREMIUM FEATURES (TZS 500 · One-time)

**Payment number: 142274076 (All networks)**

| Feature | Free | Premium |
|---------|------|---------|
| Timetable & Alerts | ✅ | ✅ |
| Google Calendar Sync | ✅ | ✅ |
| TIDO AI Tutor | ❌ | ✅ |
| Offline Reading Library | ❌ | ✅ |
| Past Exam Papers | ❌ | ✅ |
| Practice Quiz Bank | ❌ | ✅ |
| Future Updates | ❌ | ✅ |

Payment supports: **M-Pesa, Tigo Pesa, Airtel Money, HaloPesa**

---

## TIMETABLE UPLOAD (For Any Course)

Students can upload timetables from ANY course:
1. Go to **Week** tab → tap **Upload Timetable**
2. Upload a photo/screenshot/CSV of any timetable
3. **TIDO AI** reads it and builds the schedule automatically
4. Or use **Manual Entry** to type in lectures directly

---

## TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Install button not showing | Use Chrome on Android, Safari on iPhone |
| Notifications not working | Phone Settings → Apps → Chrome → Notifications → Allow |
| Lecturer alerts not showing | Make sure lecturer is logged in and has sent a notification |
| App shows old content | Pull down to refresh |

---

*CHEERS55 · Powered by TIDO AI · NIT Tanzania · Semester II 2025/2026*
*Created by CHEERS55 · cheers55.app*
