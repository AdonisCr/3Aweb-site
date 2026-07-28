import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
          <h2 className="text-heading-md font-bold text-dark">Une erreur est survenue</h2>
          <p className="max-w-md text-body-md text-muted">
            {this.state.error?.message ?? 'Une erreur inattendue s\'est produite.'}
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 rounded-btn bg-primary px-6 py-3 text-body-lg font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Réessayer
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
