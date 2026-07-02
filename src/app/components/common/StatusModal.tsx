import { motion, AnimatePresence } from 'motion/react';
import {
    CheckCircle2,
    XCircle,
    X,
} from 'lucide-react';
import { Button } from '../ui/button';

interface StatusModalProps {
    open: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
    onClose: () => void;
}

export default function StatusModal({
    open,
    type,
    title,
    message,
    onClose,
}: StatusModalProps) {

     if (!open) return null;
    return (

        <AnimatePresence>

            {open && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                        fixed
                        inset-0
                        z-[9999]
                        flex
                        items-center
                        justify-center
                        bg-[#020617]/70
                        backdrop-blur-xl
                        px-4
                        animate-in
                        fade-in
                        duration-300
                        mt-12
                        "
                >

                    {/* Modal */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40,
                        }}

                        transition={{
                            duration: 0.3,
                        }}

                        className="
            relative
            w-full
            max-w-lg
            overflow-hidden
            rounded-[32px]
            border
            border-white/20
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_30px_80px_rgba(15,23,42,0.25)]
            "
                    >

                        {/* Glow */}
                        <div
                            className={`
              absolute
              inset-0
              opacity-20

              ${type === 'success'
                                    ? 'bg-gradient-to-br from-[#16C47F] via-[#2563EB] to-[#7C3AED]'
                                    : 'bg-gradient-to-br from-red-500 via-rose-500 to-orange-400'
                                }
              `}
                        />

                        {/* Close */}
                        {/* Close */}
                        {/* <Button
                            type="button"
                            onClick={onClose}
                            className="
                                absolute
                                top-5
                                right-5
                                w-10
                                h-10
                                rounded-full
                                bg-white/70
                                border
                                border-white/50
                                flex
                                items-center
                                justify-center
                                text-[#64748B]
                                hover:text-[#0F172A]
                                hover:bg-white
                                transition-all
                                duration-300
                            "
                            >
                            <X className="w-5 h-5" />
                        </Button> */}

                        {/* Content */}
                        <div className="relative z-10 px-10 py-12 text-center">

                            {/* Icon */}
                            <div
                                className={`
                mx-auto
                flex
                items-center
                justify-center
                w-24
                h-24
                rounded-full
                shadow-2xl

                ${type === 'success'
                                        ? 'bg-gradient-to-br from-[#16C47F] to-[#2563EB]'
                                        : 'bg-gradient-to-br from-red-500 to-rose-500'
                                    }
                `}
                            >

                                {type === 'success' ? (

                                    <CheckCircle2 className="w-12 h-12 text-white" />

                                ) : (

                                    <XCircle className="w-12 h-12 text-white" />
                                )}
                            </div>

                            {/* Title */}
                            <h3
                                className="
                mt-8
                text-3xl
                font-black
                text-[#0F172A]
                "
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                {title}
                            </h3>

                            {/* Message */}
                            <p
                                className="
                mt-4
                text-[15px]
                leading-7
                text-[#64748B]
                "
                            >
                                {message}
                            </p>

                            {/* Button */}
                            <button
                                onClick={onClose}
                                className={`
                mt-10
                h-14
                px-8
                rounded-2xl
                text-white
                font-semibold
                transition-all
                duration-300
                shadow-lg

                ${type === 'success'
                                        ? 'bg-gradient-to-r from-[#16C47F] to-[#2563EB]'
                                        : 'bg-gradient-to-r from-red-500 to-rose-500'
                                    }
                `}
                            >

                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}