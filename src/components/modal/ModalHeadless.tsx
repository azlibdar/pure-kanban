import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FocusLock from "react-focus-lock";
import ThemeContext from "../../contexts/ThemeContext";

type MaxWidthType = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "none";

interface ModalHeadlessProps {
  maxWidth?: MaxWidthType;
  children: React.ReactNode;
  onOverlayClick: () => void;
  isOpen: boolean;
  center?: boolean;
}

function ModalHeadless({ maxWidth = "md", children, onOverlayClick, isOpen, center = true }: ModalHeadlessProps) {
  const { theme } = useContext(ThemeContext);
  const bg = theme === "light" ? "bg-white border-zinc-100 text-zinc-950" : "bg-zinc-900 border-zinc-800 text-zinc-50";
  const bgOverlay = theme === "light" ? "bg-zinc-700/90" : "bg-zinc-700/95";
  const centerClassForOverlay = center ? "items-center py-4" : "py-4";
  const centerClassForModal = center ? "" : "mt-8 sm:mt-12";

  const maxWidthClasses: Record<MaxWidthType, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    none: "max-w-none",
  };

  const maxWidthClass = maxWidthClasses[maxWidth] || maxWidthClasses["md"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${bgOverlay} ${centerClassForOverlay} w-full h-dvh flex justify-center fixed top-0 left-0 z-50 px-4 not-prose`}
          onClick={onOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className={`${bg} rounded-lg overflow-hidden w-full max-h-min ${maxWidthClass} ${centerClassForModal}`}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <FocusLock returnFocus={true}>{children}</FocusLock>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalHeadless;
