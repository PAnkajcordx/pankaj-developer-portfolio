import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio App Crash:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#131316] text-[#e5e1e5] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md p-8 rounded-2xl bg-[#1c1b1f] border border-[#464554]/30 shadow-2xl">
            <h1 className="text-2xl font-bold text-white mb-2">Pankaj Chauhan Portfolio</h1>
            <p className="text-[#c7c4d7] text-sm mb-6">
              Something unexpected happened while loading the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7bd0ff] to-[#c0c1ff] text-[#0e0e10] font-semibold text-sm hover:scale-105 transition-transform"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
