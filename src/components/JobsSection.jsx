import React, { useState } from 'react';
import { jobListings } from '../data/bakeryData';
import { Briefcase, CheckCircle2, Clock, Mail, ChevronDown, ChevronUp, Globe } from 'lucide-react';

export default function JobsSection({ onOpenApplyModal }) {
  const [lang, setLang] = useState('en'); // 'en' or 'jp'
  const [expandedJobId, setExpandedJobId] = useState('cashier');

  return (
    <section id="jobs" className="py-20 bg-[#FAF7F2] border-t border-[#E5DAC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C3A27] bg-[#EFE6D8] px-3.5 py-1 rounded-full border border-[#DFCBB5]">
            Join Our Brookline Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C231F] mt-3 mb-4">
            Careers at Japonaise Bakery
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E55] leading-relaxed">
            Japonaise Bakery is a family-run institution proudly baking for Greater Boston for over 35 years. Whether you're seeking a passionate career in baking or flexible student work, we welcome dedicated individuals!
          </p>

          {/* Language Switcher */}
          <div className="mt-6 inline-flex p-1 bg-[#EAE0D2] rounded-full border border-[#D5C2AD]">
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#2C231F] shadow-sm'
                  : 'text-[#6B5E55] hover:text-black'
              }`}
            >
              <Globe className="w-3.5 h-3.5" /> English Description
            </button>
            <button
              onClick={() => setLang('jp')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold font-jp transition cursor-pointer ${
                lang === 'jp'
                  ? 'bg-white text-[#8C3A27] shadow-sm'
                  : 'text-[#6B5E55] hover:text-black'
              }`}
            >
              日本語でのご案内
            </button>
          </div>
        </div>

        {/* Japanese Welcome Banner if lang === 'jp' */}
        {lang === 'jp' && (
          <div className="bg-[#FFFDF9] border border-[#DFCBB5] rounded-3xl p-8 mb-10 max-w-3xl mx-auto text-left shadow-sm">
            <h3 className="font-jp font-bold text-xl text-[#8C3A27] mb-3">
              ジャポネーズ・ベーカリー＆カフェ、従業員を募集しております！
            </h3>
            <p className="font-jp text-sm text-[#4A3E38] leading-relaxed mb-3">
              当店の場所は地下鉄グリーンのCライン、セイント・メアリー駅の手前、ホールフーズの隣です！責任感があり、やる気のある方、接客業が好きな方、是非一緒に働きませんか？
            </p>
            <p className="font-jp text-sm text-[#4A3E38] leading-relaxed">
              オープンから30年以上、ブルックラインで日本のペーストリー、食パン、菓子パン、ケーキなどをお届けしております。キャッシャー以外のポジションは時間をある程度柔軟に変更可能ですので、パートタイムでもフルタイムでも大歓迎です！
            </p>
          </div>
        )}

        {/* Job Listings Accordion/Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {jobListings.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-[#E3D6C5] shadow-sm hover:shadow transition p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Job Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#2C231F]">
                        {job.title}
                      </h3>
                      <p className="font-jp text-xs text-[#8C3A27] font-semibold mt-0.5">
                        {job.japaneseTitle}
                      </p>
                    </div>
                    <span className="text-[11px] font-medium bg-[#FAF2E6] text-[#8C3A27] border border-[#ECD9C3] px-3 py-1 rounded-full whitespace-nowrap">
                      {job.type}
                    </span>
                  </div>

                  {/* Shift info */}
                  <div className="flex items-center gap-1.5 text-xs text-[#73655D] mb-4">
                    <Clock className="w-3.5 h-3.5 text-[#8C3A27]" />
                    <span>{job.shifts}</span>
                  </div>

                  {/* Language specific description */}
                  {lang === 'jp' ? (
                    <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EBE1D3] mb-4">
                      <p className="font-jp text-xs text-[#4A3E38] leading-relaxed">
                        {job.jpSummary}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 mb-4">
                      {/* Requirements */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2C231F] mb-2">
                          Key Requirements:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#6B5E55]">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2C231F] mb-2">
                          Primary Responsibilities:
                        </h4>
                        <ul className="space-y-1 text-xs text-[#6B5E55] list-disc list-inside">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Apply Button */}
                <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    No experience? We train dedicated candidates!
                  </span>
                  <button
                    onClick={() => onOpenApplyModal(job)}
                    className="bg-[#8C3A27] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#722F1F] transition cursor-pointer shadow-xs"
                  >
                    Apply for Position
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#2C231F] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-bold">
              Questions About Employment?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              Applicants can apply online, drop off a resume in person during store hours, or email us directly with their weekly shift availability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:japonaise617@gmail.com?subject=Job%20Application%20Inquiry"
              className="bg-white text-[#2C231F] px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-stone-100 transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#8C3A27]" />
              Email Resume & Inquiry
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
