'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "術後照護",
    question: "手術後多久可以開始活動？",
    answer: "一般來說，手術後24小時內建議在床上進行簡單的肢體活動，如腳踝運動。具體活動時間和方式會根據手術類型和個人情況有所不同，請遵從醫師的指示。"
  },
  {
    category: "術後照護",
    question: "傷口要如何照顧？",
    answer: "保持傷口清潔乾燥，避免碰水。按時換藥，觀察傷口是否有紅腫、發熱或異常分泌物。如有異常情況，請立即就醫。"
  },
  {
    category: "疼痛管理",
    question: "術後疼痛該如何處理？",
    answer: "可以按醫囑服用止痛藥，同時可以配合冰敷、抬高患肢等方式緩解疼痛。如果疼痛加劇或出現異常，請及時就醫。"
  },
  {
    category: "疼痛管理",
    question: "止痛藥要吃到什麼時候？",
    answer: "止痛藥的使用時間因人而異，一般建議在疼痛明顯改善後逐漸減量。請遵從醫師指示，不要自行停藥或加量。"
  },
  {
    category: "復健運動",
    question: "什麼時候可以開始復健運動？",
    answer: "復健運動的開始時間取決於手術類型和恢復情況。一般會在術後1-2週開始，由物理治療師指導進行適當的運動。"
  },
  {
    category: "復健運動",
    question: "復健運動要注意什麼？",
    answer: "復健運動要循序漸進，不要操之過急。注意動作要正確，避免過度用力。如有不適，應立即停止並諮詢醫師。"
  },
  {
    category: "日常生活",
    question: "什麼時候可以洗澡？",
    answer: "一般建議在傷口癒合後（約7-10天）可以開始洗澡，但要注意保護傷口，避免直接沖洗。具體時間請遵從醫師指示。"
  },
  {
    category: "日常生活",
    question: "什麼時候可以恢復工作？",
    answer: "恢復工作的時間取決於手術類型、工作性質和個人恢復情況。一般建議在醫師評估後再決定，可能需要2-6週不等。"
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("全部");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const categories = ["全部", ...new Set(faqData.map(item => item.category))];

  const filteredFAQs = activeCategory === "全部" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          常見問答
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-400">
                  {openQuestions.includes(index) ? '−' : '+'}
                </span>
              </button>
              {openQuestions.includes(index) && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            還有其他問題嗎？歡迎聯繫我們
          </p>
          <a
            href="/ai-chat"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            立即諮詢 AI 客服
          </a>
        </div>
      </div>
    </main>
  );
}
