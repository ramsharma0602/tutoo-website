import { Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { seoConfig } from '../../../seo/seo.config';
import { track } from '../../../seo/analytics';
import { WhatsAppIcon, whatsappLink } from './FloatingWhatsApp';

/* Phase 1 (UX plan §11/§12): mobile users must always have Call / WhatsApp /
   Book within thumb reach. Hidden on desktop and on the form pages themselves. */

/* '/tutor/' is here because a tutor profile carries its own sticky bar with
   a tutor-specific action ("Enquire about Priya"). Both rendered at once and
   the global one — z-[60] against the profile's z-30 — sat directly on top,
   so the tutor-specific CTA was invisible and its 73px only pushed the page
   down. On a profile page the generic "Book a Free Assessment" is also the
   weaker action: the parent is looking at one specific person. */
const HIDDEN_ON = ['/book-free-assessment', '/apply-tutor', '/tutor/'];

export default function StickyMobileCTA() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-[#E6E3F0] shadow-[0_-4px_16px_rgba(30,27,58,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-stretch gap-2 px-3 py-2.5">
        <a
          href={`tel:${seoConfig.business.phone.replace(/\s/g, '')}`}
          onClick={() => track('call_click', { placement: 'sticky_bar' })}
          aria-label="Call Tutoo"
          className="flex items-center justify-center w-12 rounded-xl border border-[#E6E3F0] text-[#6D28D9] bg-white"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('whatsapp_click', { placement: 'sticky_bar' })}
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 rounded-xl bg-[#25D366] text-white"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={() => {
            track('book_cta_click', { placement: 'sticky_bar' });
            navigate('/book-free-assessment');
          }}
          /* No whitespace-nowrap: "Book a Free Assessment" is a long label and
             must be allowed to shrink inside the remaining flex width. */
          className="flex-1 min-w-0 h-12 px-3 rounded-xl bg-[#EA580C] active:bg-[#C2410C] text-white font-semibold text-[15px]"
        >
          Book a Free Assessment
        </button>
      </div>
    </div>
  );
}
