import { useState } from "react";

// Shared message content styles
const messageContentClass =
  "flex-1 overflow-y-auto overflow-x-hidden mb-4 break-words text-center";

// ----------------------
// Message
// ----------------------
interface MessagePopUpProps {
  message: React.ReactNode | string;
  clickStrict?: boolean;
  onClose?: () => void;
}

export function MessagePopUp({
  message,
  clickStrict = false,
  onClose = () => {},
}: MessagePopUpProps) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/70"
        onClick={() => !clickStrict && onClose()}
      />

      <div
        className="
          relative z-10
          min-w-[30%] max-w-[80vw] max-h-[70vh]
          rounded-lg p-6 shadow-lg
          bg-white text-neutral-900
          dark:bg-neutral-900 dark:text-white
          flex flex-col
        "
      >
        <button
          className="
            absolute top-2 right-2 cursor-pointer
            text-gray-500 hover:text-gray-700
            dark:text-gray-300 dark:hover:text-white
          "
          onClick={onClose}
        >
          ✕
        </button>

        <div className={messageContentClass}>
          <p>{message}</p>
        </div>

        <button
          className="
            px-4 py-2 rounded cursor-pointer
            bg-blue-500 hover:bg-blue-600
            dark:bg-blue-600 dark:hover:bg-blue-700
            text-white
          "
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

// ----------------------
// Confirm
// ----------------------
interface ConfirmPopUpProps {
  message: React.ReactNode | string;
  clickStrict?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function ConfirmPopUp({
  message,
  clickStrict = false,
  onConfirm = () => {},
  onCancel = () => {},
}: ConfirmPopUpProps) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/70"
        onClick={() => !clickStrict && onCancel()}
      />

      <div
        className="
          relative z-10
          min-w-[30%] max-w-[80vw] max-h-[70vh]
          rounded-lg p-6 shadow-lg
          bg-white text-neutral-900
          dark:bg-neutral-900 dark:text-white
          flex flex-col
        "
      >
        <button
          className="
            absolute top-2 right-2 cursor-pointer
            text-gray-500 hover:text-gray-700
            dark:text-gray-300 dark:hover:text-white
          "
          onClick={onCancel}
        >
          ✕
        </button>

        <div className={messageContentClass}>
          <p>{message}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            className="
              px-4 py-2 rounded cursor-pointer
              bg-green-500 hover:bg-green-600
              dark:bg-green-600 dark:hover:bg-green-700
              text-white
            "
            onClick={onConfirm}
          >
            Confirm
          </button>

          <button
            className="
              px-4 py-2 rounded cursor-pointer
              bg-red-500 hover:bg-red-600
              dark:bg-red-600 dark:hover:bg-red-700
              text-white
            "
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------
// Prompt
// ----------------------
interface PromptPopUpProps {
  message: React.ReactNode | string;
  clickStrict?: boolean;
  onConfirm?: (input: string) => void;
  onCancel?: () => void;
}

export function PromptPopUp({
  message,
  clickStrict = false,
  onConfirm = () => {},
  onCancel = () => {},
}: PromptPopUpProps) {
  const [input, setInput] = useState("");

  if (!message) return null;

  const handleConfirm = () => {
    onConfirm(input);
    setInput("");
  };

  const handleCancel = () => {
    setInput("");
    onCancel();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/70"
        onClick={() => !clickStrict && handleCancel()}
      />

      <div
        className="
          relative z-10
          min-w-[30%] max-w-[80vw] max-h-[70vh]
          rounded-lg p-6 shadow-lg
          bg-white text-neutral-900
          dark:bg-neutral-900 dark:text-white
          flex flex-col
        "
      >
        <button
          className="
            absolute top-2 right-2 cursor-pointer
            text-gray-500 hover:text-gray-700
            dark:text-gray-300 dark:hover:text-white
          "
          onClick={handleCancel}
        >
          ✕
        </button>

        <div className={messageContentClass}>
          <p>{message}</p>
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            w-full mb-4 rounded border p-2
            bg-white text-neutral-800 border-neutral-300
            dark:bg-neutral-700 dark:text-white dark:border-neutral-600
          "
        />

        <div className="flex justify-center gap-4">
          <button
            className="
              px-4 py-2 rounded cursor-pointer
              bg-green-500 hover:bg-green-600
              dark:bg-green-600 dark:hover:bg-green-700
              text-white
            "
            onClick={handleConfirm}
          >
            Confirm
          </button>

          <button
            className="
              px-4 py-2 rounded cursor-pointer
              bg-red-500 hover:bg-red-600
              dark:bg-red-600 dark:hover:bg-red-700
              text-white
            "
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
