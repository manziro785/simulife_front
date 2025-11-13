import React from "react";
import { XIcon } from "lucide-react";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-50 relative w-full max-w-lg mx-4 transform transition-all">
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <XIcon className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6 z-50 relative w-full max-w-lg mx-4 transform transition-all">
    {children}
  </div>
);

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
    {children}
  </div>
);

export const DialogFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end mt-4">
    {children}
  </div>
);

export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-lg font-semibold">{children}</h2>;

export const DialogDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-sm text-gray-500">{children}</p>;
