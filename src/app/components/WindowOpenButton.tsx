export default function WindowOpenButton(buttonName: string, url: string) {
  return (
    <button
      onClick={() => {
        window.open(url);
      }}
    >
      {buttonName}
    </button>
  );
}
