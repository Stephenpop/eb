
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Tag, ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Neurochemistry of Viral Headlines",
    excerpt: "Why certain phrases bypass the logical brain and trigger an immediate dopaminergic response in health-conscious readers.",
    content: "In the digital health space, attention is the most valuable currency. But how do we capture it without resorting to cheap clickbait? The answer lies in neurochemistry. Studies show that words associated with 'discovery', 'certainty', and 'resolution' trigger the ventral striatum. When a reader sees a headline like 'The Hidden Architecture of Reproductive Health,' their brain anticipates a reward—new knowledge. As a medical writer, I engineer these hooks by combining clinical intrigue with linguistic precision. This article explores the balance between ethical communication and the biological necessity of engagement...",
    category: "Science of Writing",
    date: "Mar 12, 2024",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "De-mystifying the Lab: Writing for Non-Scientists",
    excerpt: "A guide for medical professionals on how to communicate life-saving diagnostic data without losing the audience's attention.",
    content: "Science is often locked behind the iron gate of jargon. For a Medical Laboratory Science student, the challenge is translation. We see 'Hematocrit' and 'Mean Corpuscular Volume', but the patient sees fear. My editorial philosophy is 'Translation without Dilution.' You don't have to make the science simpler; you just have to make it more human. By using metaphors—comparing the immune system to a security team or DNA to an architectural blueprint—we create a bridge. This piece outlines the three-step framework for converting lab results into patient narratives...",
    category: "Medical Communication",
    date: "Feb 28, 2024",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Ghostwriting vs. AI: The Battle for Brand Soul",
    excerpt: "In an age of automated text, why human intuition and specialized medical expertise are the only true defensive moats.",
    content: "AI can generate 10,000 words in seconds, but it cannot empathize. It cannot feel the weight of a health diagnosis or the nuance of an executive's personal legacy. Ghostwriting is a deeply intimate process. It requires 'Voice Mimicry'—the ability to live in someone else's syntax. Large Language Models often sound 'grey'—mathematically perfect but emotionally hollow. In the high-authority health space, the soul of the brand is its only moat. This essay argues that the future of content isn't about volume, but about the specific, irreplaceable human fingerprint on the page...",
    category: "Editorial Strategy",
    date: "Feb 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Reproductive Health: Narrative Trends in 2024",
    excerpt: "Analyzing the shift from clinical detachment to empathetic storytelling in the wellness and diagnostics space.",
    content: "For decades, reproductive health was treated with a clinical coldness. Today, we are seeing a 'Narrative Revolution.' Brands like Flo and Oura have proven that users want more than data; they want context. They want to know *why* their basal body temperature is rising and what it means for their creativity, their energy, and their mental health. Writing in this space requires a balance of empathy and evidence. We are moving away from the 'Doctor-Patient' hierarchy toward a 'Peer-to-Peer' collaboration...",
    category: "Wellness Trends",
    date: "Jan 22, 2024",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "The Ethical Ghost: Transparency in Medical Writing",
    excerpt: "Maintaining scientific integrity when writing under someone else's byline.",
    content: "When I write for a CEO or a leading physician, I carry their reputation in my keyboard. Ethical ghostwriting isn't about deception; it's about empowerment. It's providing the linguistic tools to someone who has the expertise but not the time. However, in medical writing, this comes with a heavy burden of truth. Every claim must be cited. Every statistic must be current. If the science is wrong, the ghost is at fault. This article discusses the rigorous peer-review process I implement for every ghostwritten medical piece...",
    category: "Editorial Ethics",
    date: "Jan 05, 2024",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "SEO for Science: Keywords without Compromise",
    excerpt: "How to rank on Google while maintaining the dignity of a medical journal.",
    content: "Many writers believe you must choose between 'Writing for Humans' and 'Writing for Robots.' This is a false dichotomy. Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines now actively reward scientific depth. To rank in 2024, you don't need keyword stuffing; you need semantic richness. Using terms like 'pathophysiology' alongside 'common symptoms' signals to search engines that this is a high-authority source. I call this 'Scientific SEO'...",
    category: "Content Strategy",
    date: "Dec 18, 2023",
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "The Power of the Anecdote in Clinical Essays",
    excerpt: "Using small stories to illustrate massive medical breakthroughs.",
    content: "A single patient's journey can be more persuasive than a thousand-page clinical trial. While the trial provides the 'What,' the anecdote provides the 'So What?' In my work, I use 'The Anchor Narrative'—a short, true-to-life scenario that grounds the technical data. When we talk about diagnostic accuracy, we talk about the father who got to see his daughter graduate because of an early screen. This is the heart of health storytelling...",
    category: "Storytelling",
    date: "Dec 01, 2023",
    readTime: "5 min read"
  },
  {
    id: 8,
    title: "Student Wellness: The Forgotten Demographic",
    excerpt: "Addressing the unique mental and physical health challenges of campus life.",
    content: "As a student at IMSU, I see the gaps in health communication firsthand. Students are often treated as a monolith of health, but the reality is one of sleep deprivation, nutritional instability, and chronic stress. My work with local campus publications aims to normalize health conversations among youth. We need content that speaks to the budget-conscious, time-poor student who still wants to thrive. This piece explores the intersection of academic pressure and biological limits...",
    category: "Public Health",
    date: "Nov 15, 2023",
    readTime: "8 min read"
  },
  {
    id: 9,
    title: "Brevity as a Virtue in Executive Ghostwriting",
    excerpt: "Why the busiest leaders need the shortest, sharpest manifestos.",
    content: "Complexity is easy; simplicity is hard. For a leader, the goal of a piece of content is often to drive a single decision or change a single mind. I specialize in 'High-Density Writing'—packing maximum insight into minimum word counts. In this article, I reveal the 'Redline Method' I use to cut 30% of a draft without losing a single drop of meaning. If it doesn't serve the narrative arc, it's noise...",
    category: "Executive Strategy",
    date: "Nov 02, 2023",
    readTime: "4 min read"
  },
  {
    id: 10,
    title: "Designing Your Content Lifecycle",
    excerpt: "How one great medical article can fuel a month of social media authority.",
    content: "Stop thinking about 'posts' and start thinking about 'assets.' A well-researched medical white paper is the root of a content ecosystem. It can be atomized into five LinkedIn posts, ten tweets, three newsletter segments, and a webinar script. This is how high-authority brands dominate the conversation without burning out. I help my clients build 'Narrative Engines' that recycle their best ideas into different formats for different audiences...",
    category: "Content Ops",
    date: "Oct 20, 2023",
    readTime: "11 min read"
  }
];

const JournalPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [subStatus, setSubStatus] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubStatus("Joining...");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://submify.vercel.app/blessingezenwa0211@gmail.com", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubStatus("Successfully joined!");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubStatus("Failed. Please try again.");
      }
    } catch {
      setSubStatus("Error joining list.");
    }
  };

  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRead = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-40 pb-24 bg-[#FDFBF7] min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 pb-12">
              <div className="max-w-2xl">
                <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-6 block">The Manuscript Archive</span>
                <h1 className="text-6xl md:text-8xl serif font-bold mb-8">The <span className="italic text-[#4A6741]">Journal.</span></h1>
                <p className="text-xl text-gray-500 leading-relaxed">Essays, observations, and deep-dives into the intersection of medical science and human narrative.</p>
              </div>
              <div className="mt-8 md:mt-0 relative w-full md:w-auto">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topics..." 
                  className="w-full md:w-80 bg-white border border-gray-200 rounded-full px-12 py-4 outline-none focus:border-[#4A6741] transition-all" 
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
              {filteredArticles.map((article, idx) => (
                <motion.article 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleRead(article)}
                >
                  <div className="flex items-center space-x-4 mb-6 text-[10px] font-bold uppercase tracking-widest text-[#4A6741]">
                    <Tag size={12} />
                    <span>{article.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400">{article.date}</span>
                  </div>
                  
                  <h2 className="serif text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#4A6741] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{article.readTime}</span>
                    <div className="flex items-center space-x-2 text-[#1A1A1A] group-hover:text-[#4A6741] transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest">Read Article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-gray-400 italic">No manuscripts found matching your search.</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-6"
          >
            <button 
              onClick={handleBack}
              className="group flex items-center space-x-3 text-gray-400 hover:text-[#4A6741] transition-colors mb-16 uppercase text-[10px] font-bold tracking-widest"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Archive</span>
            </button>

            <header className="mb-16">
              <div className="flex items-center space-x-4 mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A6741]">
                <BookOpen size={14} />
                <span>{selectedArticle.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400">{selectedArticle.date}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl serif font-bold mb-10 leading-[1.1]">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center justify-between pt-10 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#4A6741] font-bold serif">EB</div>
                  <div>
                    <p className="text-xs font-bold">Ezenwa Blessing</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Content Architect</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase">{selectedArticle.readTime}</span>
                  </div>
                  <button className="hover:text-[#4A6741] transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </header>

            <div className="prose prose-xl prose-stone max-w-none">
              <p className="text-2xl md:text-3xl italic serif text-gray-700 leading-relaxed mb-12 border-l-4 border-[#4A6741] pl-8">
                {selectedArticle.excerpt}
              </p>
              <div className="serif text-xl md:text-2xl leading-[1.8] text-gray-800 space-y-8 first-letter:text-7xl first-letter:font-bold first-letter:text-[#4A6741] first-letter:mr-3 first-letter:float-left">
                {selectedArticle.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
              </div>
            </div>

            <footer className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Next Chapter</p>
                <button 
                  onClick={() => handleRead(articles[(articles.indexOf(selectedArticle) + 1) % articles.length])}
                  className="serif text-2xl font-bold hover:text-[#4A6741] transition-colors"
                >
                  {articles[(articles.indexOf(selectedArticle) + 1) % articles.length].title}
                </button>
              </div>
              <button 
                onClick={handleBack}
                className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#4A6741] transition-all"
              >
                Return to Archive
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-12 md:p-20 bg-[#1A1A1A] rounded-[4rem] text-white text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(74,103,65,0.1)_0%,transparent_70%)] pointer-events-none"></div>
           <h3 className="serif text-4xl md:text-5xl font-bold mb-8 relative z-10">Want these insights in your inbox?</h3>
           <p className="text-gray-400 mb-12 max-w-md mx-auto relative z-10">Join "The Sunday Manuscript" — a weekly breakdown of editorial strategy for wellness leaders.</p>
           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 relative z-10">
              <input name="email" type="email" required placeholder="Your best email..." className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-[#4A6741] transition-all" />
              <button type="submit" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#4A6741] hover:text-white transition-all">Subscribe</button>
           </form>
           {subStatus && (
             <p className={`mt-4 text-sm font-bold ${subStatus.includes("joined") ? "text-[#4A6741]" : "text-gray-400"}`}>
               {subStatus}
             </p>
           )}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
