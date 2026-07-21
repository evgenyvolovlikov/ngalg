export const APP_ROUTES = {
  dashboard: 'dashboard',

  tracks: 'tracks',

  articles: 'articles',

  course: 'course/:category'
} as const

export type AppRouteKey = keyof typeof APP_ROUTES
