# 🚀 Hybrid Chatbot - Quick Start Guide

## What's Installed?

✅ **Hybrid Chatbot Component** - `/src/components/chatbot/HybridChatbot.tsx`
✅ **API Route** - `/src/app/api/chat/route.ts`
✅ **Hybrid Logic** - `/src/lib/chatbot/hybrid-logic.ts`
✅ **TypeScript Types** - `/src/types/hybrid-chatbot.ts`
✅ **Environment Setup** - `.env.local` with OpenAI key
✅ **Layout Integration** - Already added to `/src/app/layout.tsx`

## How to Use

### 1. **Already Running** ✨
The chatbot is automatically included in your portfolio! 
- No additional setup needed
- Chatbot appears as a 💬 button in bottom-right corner
- Click to open chat window

### 2. **Test It Locally**
```bash
npm run dev
# Open http://localhost:3000
# Click the 💬 chat bubble
```

### 3. **Try These Queries**

**Instant FAQ Responses:**
- "Tell me about your projects"
- "What's your resume?"
- "GitHub link"
- "Contact info"
- "Skills and tech"

**AI-Powered Responses:**
- "How do you approach learning?"
- "What's your development methodology?"
- "Tell me about your best project"

## Key Features

| Feature | Details |
|---------|---------|
| **Response Type** | FAQ (instant) or AI (smart) |
| **FAQ Speed** | < 10ms ⚡ |
| **AI Speed** | 1-3 seconds 🤖 |
| **Animations** | Smooth Framer Motion |
| **Mobile** | Fully responsive |
| **Dark Mode** | Auto-detects system theme |
| **Links** | Fully clickable in responses |

## File Locations

```
Root
├── .env.local                          ← API key here
├── HYBRID_CHATBOT_GUIDE.md             ← Full documentation
└── src/
    ├── app/
    │   ├── api/chat/route.ts           ← OpenAI integration
    │   └── layout.tsx                  ← Chatbot imported here
    ├── components/chatbot/
    │   └── HybridChatbot.tsx            ← Main component
    ├── lib/chatbot/
    │   └── hybrid-logic.ts              ← FAQ + logic
    └── types/
        └── hybrid-chatbot.ts            ← TypeScript types
```

## Customization Examples

### Add a New FAQ Response

Edit `/src/lib/chatbot/hybrid-logic.ts`:

```typescript
{
  keywords: ['myapp', 'my project', 'my work'],
  response: `<b>My Amazing App</b><br/>
    <a href="https://example.com" target="_blank">View App</a>`,
  source: 'faq',
},
```

### Change Chat Bubble Position

Edit `/src/components/chatbot/HybridChatbot.tsx`:

```typescript
// Line ~70: Change "bottom-6 right-6" to your position
className="fixed bottom-6 right-6 ..."
// Examples:
// "bottom-6 left-6"    → Bottom-left
// "top-6 right-6"      → Top-right
```

### Change Colors

Edit `/src/components/chatbot/HybridChatbot.tsx`:

```typescript
// Line ~72: Change gradient colors
className="... from-blue-500 to-blue-600 ..."
// Try: from-purple-500 to-pink-600
// Or: from-green-500 to-emerald-600
```

### Add More Quick Questions

Edit `/src/components/chatbot/HybridChatbot.tsx`:

```typescript
const PREDEFINED_QUESTIONS = [
  '🚀 Tell me about your projects',
  '💻 What tech do you use?',
  '📄 Download resume',
  '🔗 Show GitHub',
  '💼 What experience?',
  '📞 Contact info',
  // Add your own:
  '🎯 What are your goals?',
  '📊 Show portfolio stats',
];
```

## Testing

### Local Testing
```bash
npm run dev
# Open http://localhost:3000
# Click 💬 button
# Ask: "What projects?" (instant FAQ)
# Ask: "How do you learn?" (AI response)
```

### Build Testing
```bash
npm run build
# Should compile without errors
npm run start
# Test production build locally
```

## Deployment

### Vercel (One-Click)
```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys
# Environment variables auto-configured
```

### Manual Deployment
1. Set `OPENAI_API_KEY` in production environment
2. Run `npm run build`
3. Deploy the `.next` folder
4. Ensure API route is accessible

## Cost Breakdown

- **Pricing**: ~$0.0005 per query
- **Monthly (1000 queries)**: ~$0.50
- **Annual (12000 queries)**: ~$6

✅ Extremely affordable!

## Troubleshooting

**Q: Chatbot not showing?**
A: Check browser console for errors. Verify layout.tsx includes `<HybridChatbot />`

**Q: "AI service not available"?**
A: Verify `.env.local` has valid OpenAI key

**Q: FAQ not matching my query?**
A: Add the keyword to `hybrid-logic.ts` FAQ database

**Q: Response taking too long?**
A: AI responses take 1-3 seconds. FAQ responses should be instant.

## Next Steps

1. ✅ Test the chatbot locally
2. ✅ Customize FAQ responses
3. ✅ Add your own questions
4. ✅ Deploy to production
5. ✅ Monitor costs on OpenAI dashboard

## Support

- 📖 Full docs: `HYBRID_CHATBOT_GUIDE.md`
- 🔗 OpenAI docs: https://platform.openai.com/docs
- 🎨 Framer Motion: https://www.framer.com/motion/
- ⚡ Next.js: https://nextjs.org/docs

---

**Your hybrid chatbot is ready! 🎉**

Enjoy your AI-powered portfolio assistant! 🚀
