import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-3': true
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = ['All', 'General', 'Investment', 'Fees & Custody', 'Security & Risk'];

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="faq"
      className="py-20 sm:py-28 bg-[#071A2F] text-white border-t border-[#E3E8EF]/10"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
            Inquiries & Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#EAF3FF]/80 leading-relaxed">
            Straightforward answers regarding our custodial architecture, strategy parameters, fee structure, and risk governance.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or topics (e.g. fees, custody, onboarding, risk)..."
              className="w-full bg-[#0B243F] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`faq-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1769D2] text-white font-semibold'
                    : 'bg-black/30 text-[#EAF3FF]/70 hover:text-white hover:bg-black/50 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-[#0B243F] border border-white/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-white/5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold uppercase text-[#38BDF8] px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {faq.category}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-[#64748B] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#38BDF8]" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div 
                      id={`faq-answer-${faq.id}`}
                      className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#EAF3FF]/80 leading-relaxed border-t border-white/5 animate-in fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#0B243F] rounded-xl border border-white/10 text-xs text-[#64748B]">
              No questions found matching your search. Try another search term or category.
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-white">Still have questions regarding your specific mandate?</h4>
            <p className="text-xs text-[#64748B]">Our wealth strategy specialists are available to review portfolio parameters and custody terms.</p>
          </div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-colors shrink-0"
          >
            Contact Wealth Advisory
          </button>
        </div>

      </div>
    </section>
  );
};
