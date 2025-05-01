'use client';

export default function WindowOpenButton({
  buttonName,
  url,
}: {
  buttonName: string;
  url: string;
}) {
  return (
    <button
      onClick={() => {
        window.open(url);
      }}
      className="text-blue-600"
    >
      {buttonName}
    </button>
  );
}
