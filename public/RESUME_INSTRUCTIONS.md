# How to Add Your Resume

## Step 1: Create Your Resume PDF

You have two options:

### Option A: Using Your Existing Resume
1. Have your resume in PDF format (e.g., `Lakshay_Sharma_Resume.pdf`)
2. Place it directly in the `public/` folder at the root of your project

### Option B: Create a New Resume
Use any of these tools:
- **Google Docs**: Export as PDF
- **Canva**: Design and export as PDF
- **Microsoft Word**: Save as PDF
- **LaTeX/Overleaf**: Generate PDF

## Step 2: File Location

Place your resume PDF file at:
```
Portfolio/
└── public/
    └── resume.pdf
```

**Important**: The file must be named exactly `resume.pdf` (lowercase).

## Step 3: Test the Download

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Click the "Resume" button or "Download Resume" button on your portfolio

3. The PDF should download as `Lakshay_Sharma_Resume.pdf`

## Troubleshooting

### Resume button shows error
- Ensure the file is at `public/resume.pdf`
- Check that the filename is exactly `resume.pdf` (not `.PDF` or other variations)
- Restart the dev server: `npm run dev`

### File downloads but with wrong name
- The download filename is set to `Lakshay_Sharma_Resume.pdf` in the code
- You can change it by editing `src/lib/utils/resumeHandler.ts`

### Download doesn't start
- Check browser console (F12) for errors
- Ensure the file size isn't too large (>100MB)
- Try a different browser

## Resume Content Suggestions

Your resume should include:
- ✅ Full name, email, phone, location
- ✅ Professional summary (2-3 lines)
- ✅ Skills (Technical, Tools, Languages)
- ✅ Experience (Projects, Internships, Work)
- ✅ Education
- ✅ Certifications & Awards
- ✅ GitHub/Portfolio links
- ✅ LeetCode/Competitive coding (optional)

## Sample Resume Structure

**Lakshay Sharma**
Email: lakshaysh1@gmail.com | Phone: +91 9896009903 | GitHub: lakshay545

**PROFESSIONAL SUMMARY**
Computer Science undergraduate with expertise in full-stack development, Python, and AI/ML...

**TECHNICAL SKILLS**
Languages: JavaScript, Python, Java, TypeScript
Frontend: React.js, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js, REST APIs
...

**EXPERIENCE**
[Details of your hackathons, projects, internships]

**EDUCATION**
B.Tech – Computer Science Engineering, KR Mangalam University (2024-2028)

---

Once you add the `public/resume.pdf` file, the download button will work perfectly! 🎉
