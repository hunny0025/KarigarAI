'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Instagram, FileText, Loader2, Copy, Check, RefreshCw, Image } from 'lucide-react';

export default function AIToolsPage() {
  const [descTitle, setDescTitle] = useState('');
  const [descMaterial, setDescMaterial] = useState('');
  const [descCraft, setDescCraft] = useState('');
  const [generatedDesc, setGeneratedDesc] = useState('');
  const [descLoading, setDescLoading] = useState(false);

  const [marketingProduct, setMarketingProduct] = useState('');
  const [marketingType, setMarketingType] = useState('instagram');
  const [generatedMarketing, setGeneratedMarketing] = useState('');
  const [marketingLoading, setMarketingLoading] = useState(false);

  const [copied, setCopied] = useState('');

  const generateDescription = async () => {
    setDescLoading(true);
    await new Promise((r) => setTimeout(r, 2500));
    setGeneratedDesc(
      `Discover the exquisite beauty of this handcrafted ${descTitle || 'masterpiece'}, ` +
      `meticulously created by a skilled artisan using traditional ${descCraft || 'Indian'} techniques. ` +
      `Each piece is thoughtfully made with premium ${descMaterial || 'natural'} materials, ` +
      `reflecting centuries of craftsmanship passed down through generations.\n\n` +
      `What makes this piece special:\n` +
      `• Authentic handmade craftsmanship\n` +
      `• Premium quality ${descMaterial || 'natural'} material\n` +
      `• Traditional ${descCraft || 'Indian craft'} technique\n` +
      `• Each piece is unique with subtle variations\n` +
      `• Supports artisan livelihoods directly\n\n` +
      `Perfect for those who appreciate the beauty of traditional artisanship and wish to own a piece of India's rich cultural heritage.`
    );
    setDescLoading(false);
  };

  const generateMarketing = async () => {
    setMarketingLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    if (marketingType === 'instagram') {
      setGeneratedMarketing(
        `✨ Every thread tells a story, every stitch carries a legacy.\n\n` +
        `Presenting our ${marketingProduct || 'handcrafted masterpiece'} — where tradition meets timeless elegance. ` +
        `Made by master artisans who've perfected their craft over generations. 🧵\n\n` +
        `Each piece is unique, just like the artisan who created it.\n\n` +
        `🛍️ Shop now → Link in bio\n\n` +
        `#KarigarAI #Handcrafted #IndianArtisans #TraditionalCrafts #SupportArtisans #MadeInIndia #Handloom #ArtisanMade #CulturalHeritage`
      );
    } else {
      setGeneratedMarketing(
        `Handcrafted with love, steeped in tradition. Our ${marketingProduct || 'latest creation'} is a testament to the skill and dedication of India's master artisans. ` +
        `Discover the beauty of authentic craftsmanship — shop the collection today.`
      );
    }
    setMarketingLoading(false);
  };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)] flex items-center gap-2">
          <Sparkles className="text-[var(--color-saffron)]" /> AI Tools
        </h1>
        <p className="text-sm text-[var(--color-warm-gray)] mt-1">
          AI-assisted tools to help you present your crafts. All content is editable — you&apos;re always in control.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Description Generator */}
        <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-indigo)]/10 flex items-center justify-center">
              <FileText size={16} className="text-[var(--color-indigo)]" />
            </div>
            <div>
              <h2 className="text-sm font-bold">Product Description Assistant</h2>
              <p className="text-[10px] text-[var(--color-warm-gray)]">Generate structured descriptions for your products</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <input
              type="text"
              value={descTitle}
              onChange={(e) => setDescTitle(e.target.value)}
              placeholder="Product name (e.g., Banarasi Silk Saree)"
              className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={descMaterial}
                onChange={(e) => setDescMaterial(e.target.value)}
                placeholder="Material (e.g., Silk)"
                className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
              />
              <input
                type="text"
                value={descCraft}
                onChange={(e) => setDescCraft(e.target.value)}
                placeholder="Craft type (e.g., Weaving)"
                className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
              />
            </div>
          </div>

          <button
            onClick={generateDescription}
            disabled={descLoading || !descTitle}
            className="btn-primary text-sm w-full justify-center disabled:opacity-50"
          >
            {descLoading ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
            {descLoading ? 'Generating...' : 'Generate Description'}
          </button>

          {generatedDesc && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-xl bg-[var(--color-ivory)] border border-[var(--color-sand)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider">Generated Description</span>
                <div className="flex gap-1">
                  <button onClick={() => copyText(generatedDesc, 'desc')} className="p-1 rounded hover:bg-[var(--color-sand)] transition-colors">
                    {copied === 'desc' ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-[var(--color-warm-gray)]" />}
                  </button>
                  <button onClick={generateDescription} className="p-1 rounded hover:bg-[var(--color-sand)] transition-colors">
                    <RefreshCw size={14} className="text-[var(--color-warm-gray)]" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-[var(--color-charcoal)] whitespace-pre-wrap leading-relaxed">{generatedDesc}</p>
              <p className="text-[10px] text-[var(--color-warm-gray)] mt-3 italic">
                ✨ This is an AI suggestion. Edit freely before publishing.
              </p>
            </motion.div>
          )}
        </div>

        {/* Marketing Content Generator */}
        <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-terracotta)]/10 flex items-center justify-center">
              <Instagram size={16} className="text-[var(--color-terracotta)]" />
            </div>
            <div>
              <h2 className="text-sm font-bold">Marketing Content Generator</h2>
              <p className="text-[10px] text-[var(--color-warm-gray)]">Create social media captions and marketing text</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <input
              type="text"
              value={marketingProduct}
              onChange={(e) => setMarketingProduct(e.target.value)}
              placeholder="Product name"
              className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
            />
            <div className="flex gap-2">
              {[
                { id: 'instagram', label: 'Instagram Caption', icon: <Instagram size={14} /> },
                { id: 'short', label: 'Short Text', icon: <FileText size={14} /> },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setMarketingType(type.id)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium transition-colors ${marketingType === type.id
                    ? 'bg-[var(--color-saffron)] text-white'
                    : 'bg-[var(--color-ivory)] text-[var(--color-warm-gray)] hover:bg-[var(--color-sand)]'
                  }`}
                >
                  {type.icon} {type.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateMarketing}
            disabled={marketingLoading || !marketingProduct}
            className="btn-primary text-sm w-full justify-center disabled:opacity-50"
          >
            {marketingLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            {marketingLoading ? 'Generating...' : 'Generate Content'}
          </button>

          {generatedMarketing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-xl bg-[var(--color-ivory)] border border-[var(--color-sand)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider">Generated Content</span>
                <button onClick={() => copyText(generatedMarketing, 'marketing')} className="p-1 rounded hover:bg-[var(--color-sand)] transition-colors">
                  {copied === 'marketing' ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-[var(--color-warm-gray)]" />}
                </button>
              </div>
              <p className="text-sm text-[var(--color-charcoal)] whitespace-pre-wrap leading-relaxed">{generatedMarketing}</p>
            </motion.div>
          )}
        </div>

        {/* Image Enhancement */}
        <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)] lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-saffron)]/10 flex items-center justify-center">
              <Image size={16} className="text-[var(--color-saffron)]" />
            </div>
            <div>
              <h2 className="text-sm font-bold">Image Enhancement</h2>
              <p className="text-[10px] text-[var(--color-warm-gray)]">Improve your product photos with AI-powered tools</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Remove Background', desc: 'Isolate your product with a clean white background', icon: '🖼️' },
              { title: 'Improve Lighting', desc: 'Enhance brightness, contrast and color balance', icon: '💡' },
              { title: 'Smart Crop', desc: 'Automatically crop for optimal product presentation', icon: '✂️' },
            ].map((tool) => (
              <div key={tool.title} className="p-4 rounded-xl border-2 border-dashed border-[var(--color-sand-dark)] text-center hover:border-[var(--color-saffron)] transition-colors cursor-pointer group">
                <span className="text-3xl mb-3 block">{tool.icon}</span>
                <h3 className="text-sm font-semibold mb-1 group-hover:text-[var(--color-saffron)] transition-colors">{tool.title}</h3>
                <p className="text-xs text-[var(--color-warm-gray)]">{tool.desc}</p>
                <button className="btn-secondary text-[10px] mt-3 px-4 py-1.5">Upload Image</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
