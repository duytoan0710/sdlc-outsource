/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Layout, 
  Code, 
  ShieldCheck, 
  Rocket, 
  ChevronRight, 
  ChevronLeft, 
  Calendar,
  Sparkles,
  BookOpen,
  ArrowRight,
  Target,
  Settings,
  FileText,
  Lightbulb,
  X,
  ExternalLink,
  ArrowLeft,
  Download,
  Printer
} from 'lucide-react';
import { sdlcSteps, msaTemplate, sowTemplate } from './constants';

const IconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Layout,
  Code,
  ShieldCheck,
  Rocket,
  ChevronRight,
  Calendar
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [view, setView] = useState<'home' | 'MSA' | 'SOW'>('home');
  const step = sdlcSteps[currentStep];

  const nextStep = () => {
    if (currentStep < sdlcSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatText = (text: string) => {
    // Split by numbering like "1. ", "2. " or arrows " -> "
    // We use a capture group to keep the delimiters in the split array
    const parts = text.split(/(\d+\.\s|(?:\s*->\s*))/g);
    if (parts.length === 1) return text;

    const formatted: React.ReactNode[] = [];
    let currentLine = "";

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (/^\d+\.\s$/.test(part) || /^\s*->\s*$/.test(part)) {
        if (currentLine.trim()) {
          formatted.push(<span key={`text-${i}`} className="block mb-2">{currentLine.trim()}</span>);
        }
        currentLine = part.trim() + " ";
      } else {
        currentLine += part;
      }
    }
    if (currentLine.trim()) {
      formatted.push(<span key="last" className="block">{currentLine.trim()}</span>);
    }

    return formatted;
  };

  if (view !== 'home') {
    const template = view === 'MSA' ? msaTemplate : sowTemplate;
    return (
      <div className="min-h-screen bg-[#F0F2F5] py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto">
          {/* Header Actions */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold transition-colors bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-100"
            >
              <ArrowLeft size={18} />
              Quay lại trang chủ
            </button>
            <div className="flex gap-3">
              <button className="p-2.5 bg-white text-slate-600 rounded-xl shadow-sm border border-slate-100 hover:text-slate-900 transition-colors">
                <Printer size={18} />
              </button>
              <button className="p-2.5 bg-white text-slate-600 rounded-xl shadow-sm border border-slate-100 hover:text-slate-900 transition-colors">
                <Download size={18} />
              </button>
            </div>
          </div>

          {/* Document Content (PDF Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl rounded-[4px] border border-slate-200 overflow-hidden min-h-[1122px] flex flex-col"
          >
            {/* Document Header */}
            <div className="p-16 border-b-2 border-slate-100 bg-slate-50/30">
              {/* Administrative Header */}
              {template.administrativeHeader && (
                <div className="text-center mb-12">
                  <p className="font-bold text-lg uppercase tracking-wider">{template.administrativeHeader.motto}</p>
                  <p className="font-bold text-md border-b-2 border-slate-900 inline-block pb-1 mb-4">{template.administrativeHeader.slogan}</p>
                  <p className="text-sm italic text-slate-500 mt-2">{template.administrativeHeader.date}</p>
                </div>
              )}

              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                  <BookOpen size={32} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Mã tài liệu</p>
                  <p className="text-sm font-mono font-bold text-slate-900">{template.documentNo}</p>
                </div>
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight text-center uppercase">{template.title}</h1>
              <p className="text-lg text-slate-500 font-serif italic text-center mb-8">{template.subtitle}</p>

              {/* Parties Section */}
              {template.parties && (
                <div className="flex flex-col gap-10 mt-12 pt-12 border-t border-slate-200">
                  {template.parties.map((party, pIdx) => (
                    <div key={pIdx} className="space-y-3">
                      <h3 className="font-black text-sm uppercase tracking-wider text-slate-900">{party.role}</h3>
                      <div className="space-y-1">
                        {party.details.map((detail, dIdx) => (
                          <p key={dIdx} className="text-xs text-slate-600 leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Document Body */}
            <div className="p-16 flex-1 space-y-12">
              {template.sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-4">
                    {section.heading}
                  </h2>
                  <div className="text-slate-700 leading-relaxed text-justify whitespace-pre-line font-medium">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Document Footer */}
            <div className="p-16 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                © 2024 Agile Development Framework
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Trang 1 / 1
              </div>
            </div>
          </motion.div>

          {/* Bottom Back Button */}
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setView('home')}
              className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-slate-900 selection:bg-amber-100 font-sans">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 hidden xl:flex flex-col items-center py-8 bg-white border-r border-slate-100 z-50">
        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-12">
          <BookOpen size={20} />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {sdlcSteps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStep(idx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                currentStep === idx ? 'bg-amber-50 text-amber-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="text-xs font-black">0{s.id}</span>
              <div className="absolute left-16 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap uppercase tracking-widest">
                {s.proTitle}
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="xl:pl-20">
        {/* Mobile/Tablet Nav */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 xl:hidden">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-slate-900" />
              <span className="font-serif font-bold text-lg">ITBA Masterclass</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Step 0{step.id} / 0{sdlcSteps.length}
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* SECTION 1: PROFESSIONAL HERO */}
              <header className="mb-16 lg:mb-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    Phase 0{step.id} • Standard Process
                  </div>
                </div>
                <h1 className="text-5xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight mb-10 text-slate-900">
                  {step.proTitle}
                </h1>
                <p className="text-xl lg:text-3xl text-slate-700 leading-relaxed max-w-4xl font-light text-justify">
                  {formatText(step.standardProcess)}
                </p>
              </header>

              {/* SECTION 2: STORYTELLING ANALOGY */}
              <section className="mb-24">
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-8 bg-amber-600 rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-amber-200/50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <Sparkles size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Ví dụ thực tế (Waterfall vs Agile)</span>
                      </div>
                      
                      <h2 className="text-3xl lg:text-5xl font-serif italic mb-8 leading-tight">
                        "{step.analogyTitle}"
                      </h2>
                      <p className="text-lg lg:text-2xl text-amber-50 leading-relaxed font-light text-justify">
                        {formatText(step.lifeAnalogy)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 bg-white rounded-[48px] border border-slate-100 p-8 flex flex-col items-center justify-center text-amber-600/10">
                    {React.createElement(IconMap[step.icon], { size: 180, strokeWidth: 1 })}
                  </div>
                </div>
              </section>

              {/* SECTION 3: DEEP DIVE BENTO GRID */}
              <section className="mb-24">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-100">
                    <Settings size={20} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Đào sâu chi tiết kỹ thuật</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* What Card */}
                  <div className="group bg-white border border-slate-100 p-10 rounded-[40px] transition-all hover:shadow-xl hover:shadow-slate-200/50">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Target size={20} />
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Mục tiêu (What)</h4>
                    <p className="text-slate-700 leading-relaxed font-medium text-justify">{formatText(step.deepDive.what)}</p>
                  </div>

                  {/* How Card */}
                  <div className="group bg-white border border-slate-100 p-10 rounded-[40px] transition-all hover:shadow-xl hover:shadow-slate-200/50">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Settings size={20} />
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Cách làm (How)</h4>
                    <p className="text-slate-700 leading-relaxed font-medium text-justify">{formatText(step.deepDive.how)}</p>
                  </div>

                  {/* Output Card */}
                  <div className="group bg-white border border-slate-100 p-10 rounded-[40px] transition-all hover:shadow-xl hover:shadow-slate-200/50">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <FileText size={20} />
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Kết quả (Output)</h4>
                    <p className="text-slate-700 leading-relaxed font-medium text-justify">{formatText(step.deepDive.output)}</p>
                  </div>
                </div>

                {/* New Detailed Sections for Step 2 */}
                {step.id === 2 && (
                  <div className="space-y-8 mb-12">
                    {/* Contract Models Table */}
                    <div className="bg-white border-2 border-slate-200 rounded-[40px] overflow-hidden shadow-sm">
                      <div className="p-8 border-b-2 border-slate-100 bg-slate-50/50 text-center">
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Các mô hình hợp đồng phổ biến trong Agile</h4>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-slate-50/30">
                              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-r-2 border-slate-100 text-center">Mô hình</th>
                              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-r-2 border-slate-100 text-center">Đặc điểm</th>
                              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-r-2 border-slate-100 text-center">Phù hợp khi nào?</th>
                              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-100 text-center">Ví dụ thực tế</th>
                            </tr>
                          </thead>
                          <tbody>
                            {step.contractModels?.map((model, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-6 border-b-2 border-r-2 border-slate-100 font-bold text-slate-900 bg-slate-50/20 text-center">{model.name}</td>
                                <td className="p-6 border-b-2 border-r-2 border-slate-100 text-slate-600 text-sm leading-relaxed">{model.features}</td>
                                <td className="p-6 border-b-2 border-r-2 border-slate-100 text-slate-600 text-sm leading-relaxed italic">{model.suitability}</td>
                                <td className="p-6 border-b-2 border-slate-100 text-indigo-600 text-sm leading-relaxed font-medium bg-indigo-50/10">
                                  <div className="flex gap-2">
                                    <div className="w-1 h-auto bg-indigo-200 rounded-full shrink-0" />
                                    {model.example}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid gap-8">
                      {/* Key Contents Grouped */}
                      <div className="bg-white border border-slate-100 p-10 rounded-[40px]">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-10 text-center">Các nội dung quan trọng cần ký kết (Agile SOW)</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                          {step.keyContents?.map((group, idx) => (
                            <div key={idx} className="space-y-5">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-amber-400" />
                                <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-900">
                                  {group.group}
                                </h5>
                              </div>
                              <ul className="space-y-4">
                                {group.items.map((item, iIdx) => (
                                  <li key={iIdx} className="text-slate-600 text-xs leading-relaxed pl-4 border-l border-slate-100 hover:border-amber-200 transition-colors">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Advice */}
                      <div className="bg-indigo-50/30 border border-indigo-100 p-10 rounded-[40px]">
                        <h4 className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-8 text-center">Lời khuyên chiến lược khi ký kết</h4>
                        <div className="grid sm:grid-cols-3 gap-8">
                          {step.advice?.map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-3xl shadow-sm border border-indigo-50">
                              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-xs">
                                {idx + 1}
                              </div>
                              <p className="text-slate-700 text-xs leading-relaxed font-medium">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Template Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                          onClick={() => {
                            setView('MSA');
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }}
                          className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                        >
                          <FileText size={18} />
                          Xem Mẫu MSA (Hợp đồng khung)
                        </button>
                        <button 
                          onClick={() => {
                            setView('SOW');
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }}
                          className="flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                        >
                          <ExternalLink size={18} />
                          Xem Mẫu SOW (Phụ lục Agile)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Example Banner */}
                <div className="bg-slate-900 rounded-[40px] p-8 lg:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
                  <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20">
                    <Lightbulb size={28} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400 mb-3">Ví dụ thực tế</h5>
                    <p className="text-xl lg:text-2xl font-serif italic text-slate-200 leading-relaxed text-justify">
                      "{formatText(step.example)}"
                    </p>
                  </div>
                </div>
              </section>

              {/* FOOTER NAVIGATION */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-200">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="group flex items-center gap-4 text-slate-400 hover:text-slate-900 disabled:opacity-20 transition-all"
                >
                  <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 transition-colors">
                    <ChevronLeft size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Quay lại</div>
                    <div className="font-bold">Bước trước</div>
                  </div>
                </button>

                <div className="flex gap-2">
                  {sdlcSteps.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentStep ? 'bg-slate-900 w-12' : 'bg-slate-200 w-3'}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  disabled={currentStep === sdlcSteps.length - 1}
                  className="group flex items-center gap-4 text-slate-900 hover:text-amber-600 disabled:opacity-20 transition-all"
                >
                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Tiếp theo</div>
                    <div className="font-bold">Bước kế tiếp</div>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-amber-600 transition-all shadow-xl shadow-slate-200">
                    <ChevronRight size={24} />
                  </div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-slate-300">
              <BookOpen size={24} />
            </div>
            <h4 className="text-3xl font-serif mb-6">Lộ trình ITBA chuyên nghiệp</h4>
            <p className="text-slate-500 max-w-lg mx-auto mb-12 leading-relaxed">
              Hiểu rõ quy trình SDLC là bước đệm vững chắc nhất để bạn tự tin bước vào thế giới công nghệ.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">© 2026 ITBA Journey</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">•</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Mastering SDLC</div>
            </div>
          </div>
        </footer>
      </div>
      {/* Modal Template Removed */}
    </div>
  );
}
