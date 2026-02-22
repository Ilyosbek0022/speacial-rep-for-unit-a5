/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Trophy, 
  AlertCircle,
  BookOpen,
  Layout,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { TEST_DATA } from './constants';
import { Section, UserAnswer } from './types';

export default function App() {
  const [userName, setUserName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const currentSection = TEST_DATA[currentSectionIndex];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSectionIndex < TEST_DATA.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsFinished(true);
      setShowReview(true);
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const calculateScore = () => {
    let totalQuestions = 0;
    let correctCount = 0;

    TEST_DATA.forEach(section => {
      section.questions.forEach(q => {
        if (q.isExample) return; // Skip examples in scoring

        if (q.points !== undefined) {
          // Custom points handling
          totalQuestions += q.points;
          if (q.type === 'cloze' || (q.type === 'fill' && q.correctAnswers.length > 1)) {
            const userAnswers = (answers[q.id] || '').split('|');
            const allCorrect = q.correctAnswers.every((correct, idx) => 
              userAnswers[idx]?.trim().toLowerCase() === correct.toLowerCase()
            );
            if (allCorrect) correctCount += q.points;
          } else {
            const userAnswer = (answers[q.id] || '').trim().toLowerCase();
            if (q.correctAnswers.some(correct => userAnswer === correct.toLowerCase())) {
              correctCount += q.points;
            }
          }
        } else if (q.type === 'cloze' || (q.type === 'fill' && q.correctAnswers.length > 1)) {
          // Default multi-blank handling: 1 point per blank
          const userAnswers = (answers[q.id] || '').split('|');
          totalQuestions += q.correctAnswers.length;
          q.correctAnswers.forEach((correct, idx) => {
            if (userAnswers[idx]?.trim().toLowerCase() === correct.toLowerCase()) {
              correctCount++;
            }
          });
        } else {
          // Default single-blank handling: 1 point
          totalQuestions++;
          const userAnswer = (answers[q.id] || '').trim().toLowerCase();
          if (q.correctAnswers.some(correct => userAnswer === correct.toLowerCase())) {
            correctCount++;
          }
        }
      });
    });

    return { score: correctCount, total: totalQuestions };
  };

  const { score, total } = useMemo(calculateScore, [answers, isFinished]);
  const percentage = Math.round((score / total) * 100);

  const resetTest = () => {
    setAnswers({});
    setCurrentSectionIndex(0);
    setIsFinished(false);
    setShowReview(false);
    setIsStarted(false);
    setUserName('');
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 text-center border border-slate-100"
        >
          <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-100">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 mb-2 tracking-tight">
            ROADMAP <span className="text-indigo-600">A1</span>
          </h1>
          <p className="text-slate-500 text-lg mb-8 font-medium">Unit Test 5: Grammar, Vocabulary & Function</p>
          
          <div className="space-y-4 mb-8">
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Ismingizni kiriting
              </label>
              <input
                id="name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Masalan: Ilyosbek, Gulchapchap "
                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 focus:bg-white outline-none transition-all font-bold text-slate-800"
              />
            </div>
          </div>

          <button
            onClick={() => userName.trim() && setIsStarted(true)}
            disabled={!userName.trim()}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 active:scale-95 flex items-center justify-center gap-3"
          >
            Testni boshlash
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    );
  }

  if (showReview) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
          >
            <div className="bg-indigo-600 p-8 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4"
              >
                <Trophy className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">Test yakunlandi!</h1>
              <p className="text-indigo-100 text-lg">{userName}, natijangiz bilan tanishing</p>
            </div>

            <div className="p-8">
              {/* Parent Summary Section */}
              <div className="mb-10 p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                <h3 className="text-indigo-800 font-black uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Ota-onalar uchun xulosa:
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium">
                  <span className="text-indigo-600 font-bold">{userName}</span> A1 Unit 5 (Grammar, Vocabulary & Function) testini muvaffaqiyatli yakunladi. 
                  Ushbu testda u jami <span className="font-bold">{total}</span> ta savoldan <span className="text-indigo-600 font-bold">{score}</span> ta to'g'ri javob topdi (<span className="font-bold">{percentage}%</span>). 
                  {percentage < 100 ? " Xatolar ustida ishlab, qayta topshirib ko'ring." : " Mukammal natija! Barakalla!"}
                </p>
              </div>

              <div className="flex flex-col items-center mb-10">
                <div className="text-6xl font-black text-indigo-600 mb-2">{percentage}%</div>
                <div className="text-slate-500 font-medium">Siz {total} tadan {score} ta to'g'ri javob berdingiz</div>
                
                <div className="w-full bg-slate-100 h-3 rounded-full mt-6 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-indigo-600"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-4">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  Detailed Review
                </h2>

                {TEST_DATA.map((section, sIdx) => (
                  <div key={section.id} className="space-y-4">
                    <h3 className="font-bold text-indigo-600 uppercase tracking-wider text-sm">{section.title} - Section {sIdx + 1}</h3>
                    <div className="space-y-3">
                      {section.questions.map((q) => {
                        if (q.type === 'cloze' || (q.type === 'fill' && q.correctAnswers.length > 1)) {
                          const userAnswers = q.isExample ? q.correctAnswers : (answers[q.id] || '').split('|');
                          return (
                            <div key={q.id} className={`p-4 rounded-2xl border ${q.isExample ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-slate-50 border-slate-100'}`}>
                              {q.isExample && <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Example</div>}
                              <p className="text-slate-700 leading-relaxed">
                                {(q.text || q.instruction).split('[blank]').map((part, i) => (
                                  <React.Fragment key={i}>
                                    {part}
                                    {i < q.correctAnswers.length && (
                                      <span className={`font-bold px-1 rounded ${
                                        q.isExample || userAnswers[i]?.trim().toLowerCase() === q.correctAnswers[i].toLowerCase() 
                                          ? 'text-emerald-600' 
                                          : 'text-rose-600 underline decoration-2'
                                      }`}>
                                        {userAnswers[i]?.trim() || '____'}
                                        {!q.isExample && userAnswers[i]?.trim().toLowerCase() !== q.correctAnswers[i].toLowerCase() && (
                                          <span className="text-xs ml-1 text-slate-400 font-normal">({q.correctAnswers[i]})</span>
                                        )}
                                      </span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </p>
                            </div>
                          );
                        }

                        const userAnswer = q.isExample ? q.correctAnswers[0] : (answers[q.id] || '').trim();
                        const isCorrect = q.isExample || q.correctAnswers.some(correct => userAnswer.toLowerCase() === correct.toLowerCase());

                        return (
                          <div key={q.id} className={`flex items-start gap-3 p-4 rounded-2xl border ${q.isExample ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-slate-50 border-slate-100'}`}>
                            <div className={`mt-1 p-1 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                              {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                              <div className="text-slate-500 text-xs mb-1">{q.isExample ? 'Example' : (q.instruction || 'Question')}</div>
                              <div className="text-slate-800 font-medium">
                                {q.text ? q.text.replace('[blank]', userAnswer || '____') : (userAnswer || 'No answer')}
                              </div>
                              {!isCorrect && !q.isExample && (
                                <div className="mt-2 text-sm text-emerald-600 font-medium">
                                  Correct: {q.correctAnswers.join(' or ')}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                <button
                  onClick={resetTest}
                  className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-lg active:scale-95"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-800">ROADMAP<span className="text-indigo-600">A1</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</div>
              <div className="text-sm font-bold text-slate-700">{currentSectionIndex + 1} / {TEST_DATA.length}</div>
            </div>
            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${((currentSectionIndex + 1) / TEST_DATA.length) * 100}%` }}
                className="h-full bg-indigo-600"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  currentSection.title === 'Grammar' ? 'bg-amber-100 text-amber-700' :
                  currentSection.title === 'Vocabulary' ? 'bg-emerald-100 text-emerald-700' :
                  'bg-indigo-100 text-indigo-700'
                }`}>
                  {currentSection.title}
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight">
                {currentSection.instruction}
              </h2>
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {currentSection.questions.map((q, idx) => (
                <QuestionCard 
                  key={q.id} 
                  question={q} 
                  index={idx}
                  options={currentSection.options}
                  value={answers[q.id] || ''}
                  onChange={(val) => handleAnswerChange(q.id, val)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={handleBack}
            disabled={currentSectionIndex === 0}
            className="flex items-center gap-2 py-3 px-6 rounded-2xl font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-4 px-10 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
          >
            <span>{currentSectionIndex === TEST_DATA.length - 1 ? 'Finish Test' : 'Next Section'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

function QuestionCard({ question, index, value, onChange, options }: { 
  question: any, 
  index: number, 
  value: string, 
  onChange: (val: string) => void,
  options?: string[],
  key?: string
}) {
  const isExample = question.isExample;
  const displayValue = isExample ? question.correctAnswers[0] : value;

  if (question.type === 'cloze' || (question.type === 'fill' && question.correctAnswers.length > 1)) {
    const textToSplit = question.text || question.instruction;
    const parts = textToSplit.split('[blank]');
    const currentAnswers = isExample ? question.correctAnswers : value.split('|');

    const handleMultiChange = (idx: number, val: string) => {
      if (isExample) return;
      const newAnswers = [...currentAnswers];
      while (newAnswers.length <= idx) newAnswers.push('');
      newAnswers[idx] = val;
      onChange(newAnswers.join('|'));
    };

    return (
      <div className={`bg-white p-6 sm:p-8 rounded-3xl shadow-sm border transition-all ${isExample ? 'border-slate-200 bg-slate-50/50' : 'border-slate-100'}`}>
        {isExample && <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Example</div>}
        {options && (
          <div className="flex flex-wrap gap-2 mb-8 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            {options.map(opt => (
              <span key={opt} className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 shadow-sm">
                {opt}
              </span>
            ))}
          </div>
        )}
        <div className={`text-lg sm:text-xl leading-loose ${isExample ? 'text-slate-400' : 'text-slate-700'}`}>
          {parts.map((part: string, i: number) => (
            <React.Fragment key={i}>
              {part}
              {i < parts.length - 1 && (
                <span className="inline-block mx-1">
                  <input
                    type="text"
                    value={currentAnswers[i] || ''}
                    onChange={(e) => handleMultiChange(i, e.target.value)}
                    disabled={isExample}
                    placeholder={`${i + 1}`}
                    className={`w-24 sm:w-32 px-3 py-1 border-b-2 outline-none transition-all text-center font-bold rounded-t-lg ${
                      isExample 
                        ? 'bg-slate-100 border-slate-300 text-slate-500' 
                        : 'bg-indigo-50 border-indigo-200 focus:border-indigo-600 focus:bg-white text-indigo-600'
                    }`}
                  />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 sm:p-8 rounded-3xl shadow-sm border transition-all ${
      isExample ? 'border-slate-200 bg-slate-50/50' : 'border-slate-100 group hover:border-indigo-200'
    }`}>
      {isExample && <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Example</div>}
      <div className="flex items-start gap-4">
        <div className="flex-1">
          {question.type === 'choice' && (
            <div className="space-y-4">
              <div className={`text-lg sm:text-xl font-medium mb-4 ${isExample ? 'text-slate-400' : 'text-slate-700'}`}>
                {question.instruction}
              </div>
              <div className="flex flex-wrap gap-3">
                {question.options.map((option: string) => (
                  <button
                    key={option}
                    disabled={isExample}
                    onClick={() => onChange(option)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all border-2 ${
                      displayValue === option 
                        ? (isExample ? 'bg-slate-200 text-slate-500 border-slate-300' : 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100')
                        : 'bg-white text-slate-400 border-slate-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {question.type === 'fill' && (
            <div className={`text-lg sm:text-xl leading-relaxed ${isExample ? 'text-slate-400' : 'text-slate-700'}`}>
              {question.text.split('[blank]').map((part: string, i: number) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && question.text.includes('[blank]') && (
                    <span className="inline-block mx-1">
                      <input
                        type="text"
                        value={displayValue}
                        onChange={(e) => onChange(e.target.value)}
                        disabled={isExample}
                        className={`w-32 sm:w-40 px-3 py-1 border-b-2 outline-none transition-all text-center font-bold rounded-t-lg ${
                          isExample 
                            ? 'bg-slate-100 border-slate-300 text-slate-500' 
                            : 'bg-indigo-50 border-indigo-200 focus:border-indigo-600 focus:bg-white text-indigo-600'
                        }`}
                      />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {question.type === 'order' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {question.words.map((word: string, i: number) => (
                  <span key={i} className={`px-3 py-1.5 rounded-xl text-sm font-medium border ${
                    isExample ? 'bg-slate-50 text-slate-400 border-slate-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {word}
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={displayValue}
                onChange={(e) => onChange(e.target.value)}
                disabled={isExample}
                placeholder={isExample ? "" : "Type the sentence here..."}
                className={`w-full px-4 py-3 border-2 outline-none transition-all font-medium rounded-2xl ${
                  isExample 
                    ? 'bg-slate-100 border-slate-200 text-slate-500' 
                    : 'bg-indigo-50 border-transparent focus:border-indigo-600 focus:bg-white text-indigo-600'
                }`}
              />
            </div>
          )}

          {question.type === 'spelling' && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className={`text-xl font-mono tracking-widest uppercase ${isExample ? 'text-slate-300' : 'text-slate-400'}`}>
                {question.clue}
              </div>
              <input
                type="text"
                value={displayValue}
                onChange={(e) => onChange(e.target.value)}
                disabled={isExample}
                placeholder="Answer"
                className={`w-full sm:w-48 px-4 py-2 border-b-2 outline-none transition-all text-center font-bold rounded-t-lg ${
                  isExample 
                    ? 'bg-slate-100 border-slate-300 text-slate-500' 
                    : 'bg-indigo-50 border-indigo-200 focus:border-indigo-600 focus:bg-white text-indigo-600'
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
