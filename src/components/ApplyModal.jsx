import React, { useState } from 'react';
import { X, CheckCircle2, Send, Briefcase } from 'lucide-react';

export default function ApplyModal({ job, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    experience: '',
    message: ''
  });

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E3D6C5] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#EAE0D2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE6D8] text-[#8C3A27] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2C231F]">
                Apply for {job.title}
              </h3>
              <p className="font-jp text-xs text-[#8C3A27] font-semibold">
                {job.japaneseTitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-stone-500 hover:text-black flex items-center justify-center transition border border-[#D5C2AD] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-serif font-bold text-[#2C231F]">
                Application Submitted!
              </h4>
              <p className="text-sm text-[#5E524B] max-w-sm mx-auto leading-relaxed">
                Thank you for applying to Japonaise Bakery. Our hiring team reviews applications weekly and will reach out if your availability matches our shift schedule.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#8C3A27] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#722F1F] transition cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2C231F] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    placeholder="Kenji Sato"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C231F] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicant.phone}
                    onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                    placeholder="(617) 000-0000"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C231F] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={applicant.email}
                  onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                  placeholder="kenji@example.com"
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C231F] mb-1">
                  Shift Availability & Desired Hours *
                </label>
                <input
                  type="text"
                  required
                  value={applicant.availability}
                  onChange={(e) => setApplicant({ ...applicant, availability: e.target.value })}
                  placeholder="e.g. Thursday - Saturday mornings (approx. 20 hrs/week)"
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C231F] mb-1">
                  Culinary / Service Experience & Note
                </label>
                <textarea
                  rows={3}
                  value={applicant.experience}
                  onChange={(e) => setApplicant({ ...applicant, experience: e.target.value })}
                  placeholder="Briefly tell us about your background or why you'd love to work with us..."
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-stone-500 hover:text-black cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#8C3A27] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#722F1F] transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
