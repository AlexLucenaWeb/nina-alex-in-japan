// Colours and fonts are global now; this only sets the route pages' column,
// matched to the width the rest of the day page uses.
export default function JapanRouteDayShell({ children }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6">
      {children}
    </div>
  );
}
