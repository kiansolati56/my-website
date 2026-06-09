export type ToastType = 'success' | 'error' | 'info'

export interface ToastItem {
  id: number
  title: string
  message: string
  type: ToastType
  duration: number
}

const timers = new Map<number, ReturnType<typeof setTimeout>>()

function clearToastTimer(id: number) {
  const timer = timers.get(id)

  if (timer) {
    clearTimeout(timer)
    timers.delete(id)
  }
}

export function useToast() {
  const toasts = useState<ToastItem[]>('app-toasts', () => [])

  function removeToast(id: number) {
    clearToastTimer(id)

    toasts.value = toasts.value.filter(
      toast => toast.id !== id
    )
  }

  function pushToast(payload: Omit<ToastItem, 'id'>) {
    const id = Date.now() + Math.floor(Math.random() * 1000)

    toasts.value = [
      ...toasts.value,
      {
        id,
        ...payload
      }
    ]

    if (payload.duration > 0) {
      const timer = setTimeout(() => {
        removeToast(id)
      }, payload.duration)

      timers.set(id, timer)
    }

    return id
  }

  const success = (
    title: string,
    message: string,
    duration = 2800
  ) => {
    return pushToast({
      title,
      message,
      type: 'success',
      duration
    })
  }

  const error = (
    title: string,
    message: string,
    duration = 3200
  ) => {
    return pushToast({
      title,
      message,
      type: 'error',
      duration
    })
  }

  const info = (
    title: string,
    message: string,
    duration = 2800
  ) => {
    return pushToast({
      title,
      message,
      type: 'info',
      duration
    })
  }

  return {
    toasts,
    success,
    error,
    info,
    removeToast
  }
}